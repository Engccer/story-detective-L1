# Story Detective 게임 제작 워크플로우

## 개요

교과서 Reading 본문으로부터 Story Detective 읽기 이해 게임을 생성하는 워크플로우.
단락별로 본문을 읽고, 탐정 테마의 퀴즈로 이해도를 확인하는 게임.

## 기술 스택

| 구성 요소 | 기술 | 비고 |
|-----------|------|------|
| 게임 UI | 바닐라 HTML/CSS/JS (단일 페이지) | 외부 의존: Google Fonts CDN (Special Elite, Noto Sans KR) |
| 사운드 효과 | ElevenLabs Sound Effects MCP | page_turn, magnifying, correct, wrong, clue_found, stamp, case_solved, typing |
| 본문/단어/퀴즈 음성 | Gemini TTS (`gemini-2.5-flash-preview-tts`) | 음성: Kore, PCM 16-bit 24kHz → WAV |
| TTS 오디오 내장 | base64 data URI (`audio_data.js`) | file:// 프로토콜에서도 재생 가능 |
| 효과음 내장 | base64 data URI (`sfx_data.js`) | 레슨 간 공유 가능 |
| 콘텐츠 데이터 | `lesson_data.js` (JS 객체) | 본문, 번역, 퀴즈, 어휘 |
| 접근성 | ARIA live region, 전체 키보드 조작 | Space/Enter/1~4/T/R/↑↓ |
| 배포 | GitHub Pages (legacy, master 브랜치) | `gh repo create` → `gh api .../pages` |

## 입력 자료

- 교과서 본문 텍스트 (`교과서_~41.txt`)
- 지도서 (`지도서(2025학년도).txt`) — Q&A, More Questions, 해석, 구문 해설, 핵심 단어
- 기존 워크시트 데이터 (해당 시)

## 데이터 구조 (lesson_data.js)

```javascript
const LESSON_DATA = {
  lesson: N,
  title: "레슨 제목",
  subtitle: "한국어 부제",
  passages: [
    {
      id: 1,
      character: "인물명",
      characterDesc: "한국어 설명",
      page: 16,
      text: "영어 본문...",
      translation: "한국어 해석...",
      audioKey: "para_1",
      vocabulary: [
        { word: "단어", korean: "한국어 뜻", audioKey: "vocab_단어" }
      ],
      quizzes: [
        {
          type: "multiple_choice",  // | "true_false" | "fill_blank"
          source: "textbook_q",     // | "more_q" | "after_read" | "custom"
          question: "질문 텍스트",
          audioKey: "quiz_N_M",
          options: ["선택지1", "선택지2", "선택지3", "선택지4"],
          answer: 0,  // 0-indexed
          explanation: "한국어 해설"
        }
      ]
    }
  ],
  bonusQuizzes: [/* After You Read B 문제들 */]
};
```

## 제작 단계

### 1단계: 콘텐츠 추출

교과서와 지도서에서 해당 레슨의 Reading 섹션을 추출:
- 각 단락의 영어 본문
- 한국어 해석 (지도서)
- Q1/Q2/Q3 + 예시 답
- More Questions + 답
- After You Read A (빈칸 완성) + B (선다형)
- 핵심 단어 + 한국어 뜻 (Words and Expressions)

### 2단계: lesson_data.js 생성

추출한 데이터를 lesson_data.js 구조에 맞게 정리.
퀴즈는 최소 3~4개/단락:
- 교과서 Q (textbook_q)
- More Questions (more_q)
- True/False (custom)
- Fill-in-the-blank (after_read)

### 3단계: 게임 폴더 생성

```bash
mkdir -p story-detective-L<N>/audio
mkdir -p story-detective-L<N>/sfx
```

### 4단계: 효과음 생성 (ElevenLabs SFX MCP) — 최초 1회만

**이미 생성된 sfx_data.js를 재사용!** L1에서 생성한 효과음은 모든 레슨에서 동일하게 사용.

```bash
cp story-detective-L1/sfx_data.js story-detective-L<N>/sfx_data.js
cp story-detective-L1/sfx/*.mp3 story-detective-L<N>/sfx/
```

효과음 목록 (8개):
| 파일 | 설명 | 트리거 |
|------|------|--------|
| page_turn.mp3 | 종이 넘기는 소리 | READING 진입 |
| magnifying.mp3 | 돋보기 조사 | 퀴즈 진입 |
| correct.mp3 | 정답 차임 | 정답 |
| wrong.mp3 | 오답 버저 | 오답 |
| clue_found.mp3 | 단서 발견 | 단서 수집 완료 |
| stamp.mp3 | 스탬프 | SOLVED 스탬프 |
| case_solved.mp3 | 팡파레 | 사건 해결 |
| typing.mp3 | 타자기 | UI 선택 |

### 5단계: TTS 음성 생성

Gemini TTS API로 생성. **분당 10회 rate limit** → 7초 간격.

생성 대상:
- 단락 내레이션: `para_1.wav` ~ `para_N.wav` (전체 본문)
- 단어 발음: `vocab_<word>.wav` (짧은 단어는 "The word is <word>." 형태)
- 퀴즈 질문: `quiz_<P>_<Q>.wav`

### 6단계: base64 오디오 번들 생성

```python
import base64, os, json
result = {}
for f in sorted(os.listdir('audio')):
    if not f.endswith('.wav'): continue
    with open(f'audio/{f}', 'rb') as fh:
        b64 = base64.b64encode(fh.read()).decode()
    result[f.replace('.wav', '')] = f'data:audio/wav;base64,{b64}'
with open('audio_data.js', 'w') as out:
    out.write('const AUDIO_DATA = ' + json.dumps(result) + ';')
```

### 7단계: HTML 게임 파일 배치

L1의 `index.html`을 템플릿으로 사용. 변경:
1. `<title>` — 레슨 번호
2. `.subtitle` — "Lesson N — Reading"

### 8단계: 로컬 테스트

```bash
cd story-detective-L<N>
python -m http.server 8765
```

체크리스트:
- [ ] 게임 시작 (Space)
- [ ] 사건 선택 (1-3)
- [ ] 본문 읽기 + 음성 재생 (Space)
- [ ] 번역 토글 (T)
- [ ] 퀴즈 진입 (Enter)
- [ ] 4지선다 키보드 선택 (1-4)
- [ ] True/False 선택 (1-2)
- [ ] 빈칸 완성 선택 (1-4)
- [ ] 정답/오답 효과 + 해설
- [ ] 단어 복습 (↑↓, R)
- [ ] 단서 수집 애니메이션
- [ ] 보너스 라운드
- [ ] 최종 결과 화면
- [ ] 전체 키보드만으로 진행 가능

### 9단계: GitHub Pages 배포

```bash
cd story-detective-L<N>
git init
git add index.html lesson_data.js audio_data.js sfx_data.js audio/*.wav sfx/*.mp3 WORKFLOW.md
git commit -m "Story Detective: Lesson <N> Reading comprehension game"

gh repo create story-detective-L<N> --public --source=. --push \
  --description "Story Detective: Lesson <N> reading comprehension game"

gh api repos/Engccer/story-detective-L<N>/pages -X POST \
  -f "build_type=legacy" -f "source[branch]=master" -f "source[path]=/"

# URL: https://engccer.github.io/story-detective-L<N>/
```

## 파일 구조

```
story-detective-L<N>/
├── index.html          게임 본체 (단일 HTML)
├── lesson_data.js      레슨 콘텐츠 데이터
├── audio_data.js       base64 TTS 오디오 번들
├── sfx_data.js         base64 효과음 번들 (레슨 간 공유)
├── audio/              원본 TTS WAV 파일 (백업)
├── sfx/                원본 효과음 MP3 파일 (백업)
└── WORKFLOW.md         이 문서
```

## 게임 설정값

| 설정 | 값 | 비고 |
|------|-----|------|
| 정답 점수 (MC) | 10점 | 스트릭 배수 적용 |
| 정답 점수 (T/F) | 8점 | 스트릭 배수 적용 |
| 정답 점수 (빈칸) | 12점/칸 | 스트릭 배수 적용 |
| 보너스 점수 | 5점 | 배수 없음 |
| 스트릭 x1.5 | 2연속 | |
| 스트릭 x2 | 3연속+ | |
| TTS 음성 | Kore | Gemini TTS |
| 폰트 | Special Elite (탐정), Noto Sans KR (본문) | Google Fonts |

## 빠른 제작 명령 (Claude에게)

```
"L<N> Reading을 story-detective-L<N> 게임으로 만들어 줘.
교과서와 지도서에서 본문, Q&A, More Questions, After You Read 추출 +
TTS 음성 생성 + base64 내장 + GitHub Pages 배포까지."
```
