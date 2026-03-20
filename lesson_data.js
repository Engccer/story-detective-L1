const LESSON_DATA = {
  lesson: 1,
  title: "Who Is in Your Heart?",
  subtitle: "소중한 사람들에 대한 이야기를 읽고 이해해 봅시다.",

  passages: [
    {
      id: 1,
      character: "Jihun",
      characterDesc: "지훈이와 가장 친한 친구 민수",
      page: 16,
      text: "I'm Jihun. My best friend is Minsu. Minsu and I love rock music. We are members of the school band Rock It. I play the guitar, and Minsu plays the drums. We are not good players, but we have so much fun together.\nWith Minsu, I laugh all the time. Together, we are happy.",
      translation: "나는 지훈이야. 나의 가장 친한 친구는 민수야. 민수와 나는 록 음악을 정말 좋아해. 우리는 학교 밴드 Rock It의 회원이야. 나는 기타를 치고, 민수는 드럼을 쳐. 우리는 연주를 잘하지 못하지만, 함께 정말 즐거워.\n민수와 있으면, 나는 항상 웃어. 같이 있으면, 우리는 행복해.",
      audioKey: "para_1",
      vocabulary: [
        { word: "member", korean: "구성원, 멤버", audioKey: "vocab_member" },
        { word: "band", korean: "밴드", audioKey: "vocab_band" },
        { word: "together", korean: "함께, 같이", audioKey: "vocab_together" },
        { word: "laugh", korean: "웃다", audioKey: "vocab_laugh" },
        { word: "all the time", korean: "내내, 아주 자주", audioKey: "vocab_all_the_time" }
      ],
      quizzes: [
        {
          type: "multiple_choice",
          source: "textbook_q",
          question: "What does Minsu play in the band?",
          audioKey: "quiz_1_1",
          options: [
            "He plays the guitar.",
            "He plays the drums.",
            "He plays the keyboard.",
            "He plays the bass."
          ],
          answer: 1,
          explanation: "본문에 'Minsu plays the drums'라고 나와 있어요."
        },
        {
          type: "multiple_choice",
          source: "more_q",
          question: "What music do Jihun and Minsu love?",
          audioKey: "quiz_1_2",
          options: [
            "They love pop music.",
            "They love classical music.",
            "They love rock music.",
            "They love jazz music."
          ],
          answer: 2,
          explanation: "'Minsu and I love rock music.'에서 알 수 있어요."
        },
        {
          type: "true_false",
          source: "custom",
          question: "Jihun and Minsu are good players.",
          audioKey: "quiz_1_3",
          answer: false,
          explanation: "'We are not good players'라고 했어요. 잘하지 못하지만 함께 즐거워해요."
        },
        {
          type: "fill_blank",
          source: "after_read",
          question: "Minsu is my _____, and we are members of the school _____. With him, I _____ all the time.",
          audioKey: "quiz_1_4",
          blanks: [
            { position: 0, answer: "best friend", options: ["best friend", "neighbor", "guide dog", "teacher"] },
            { position: 1, answer: "band", options: ["band", "team", "class", "club"] },
            { position: 2, answer: "laugh", options: ["laugh", "cry", "sleep", "study"] }
          ],
          explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
        }
      ]
    },
    {
      id: 2,
      character: "Hannah",
      characterDesc: "Hannah와 이웃 Schmidt 부인",
      page: 17,
      text: "I'm Hannah. Mrs. Schmidt, my neighbor, is a dear friend to me. She is a great listener, and I often talk with her. She doesn't talk much. She just nods and smiles at me. Sometimes I'm sad, and she bakes a cake for me. Her cake is yummy, and I feel all right, like magic.\nWith Mrs. Schmidt, I feel at home. Together, we are happy.",
      translation: "나는 Hannah야. 내 이웃인 Schmidt 부인은 나에게 소중한 친구야. 그녀는 말을 잘 들어주는 사람이고, 나는 자주 그녀와 이야기를 나눠. 그녀는 말을 많이 하지 않으셔. 단지 고개를 끄덕이시고 내게 미소를 지어 주셔. 때때로 나는 슬퍼, 그리고 그녀는 나를 위해 케이크를 구워 주셔. 그녀의 케이크는 맛있어서, 나는 마법처럼 기분이 괜찮아져.\nSchmidt 부인과 있으면, 나는 마음이 편안해. 같이 있으면, 우리는 행복해.",
      audioKey: "para_2",
      vocabulary: [
        { word: "neighbor", korean: "이웃", audioKey: "vocab_neighbor" },
        { word: "dear", korean: "소중한", audioKey: "vocab_dear" },
        { word: "nod", korean: "끄덕이다", audioKey: "vocab_nod" },
        { word: "bake", korean: "(빵, 쿠키를) 굽다", audioKey: "vocab_bake" },
        { word: "magic", korean: "마술, 마법", audioKey: "vocab_magic" },
        { word: "feel at home", korean: "편안함을 느끼다", audioKey: "vocab_feel_at_home" }
      ],
      quizzes: [
        {
          type: "multiple_choice",
          source: "textbook_q",
          question: "How does Hannah feel with Mrs. Schmidt?",
          audioKey: "quiz_2_1",
          options: [
            "She feels excited.",
            "She feels at home.",
            "She feels nervous.",
            "She feels bored."
          ],
          answer: 1,
          explanation: "'With Mrs. Schmidt, I feel at home.'에서 알 수 있어요."
        },
        {
          type: "multiple_choice",
          source: "more_q",
          question: "What does Mrs. Schmidt bake for Hannah?",
          audioKey: "quiz_2_2",
          options: [
            "She bakes cookies.",
            "She bakes bread.",
            "She bakes a cake.",
            "She bakes pie."
          ],
          answer: 2,
          explanation: "'She bakes a cake for me.'에서 알 수 있어요."
        },
        {
          type: "true_false",
          source: "custom",
          question: "Mrs. Schmidt talks a lot with Hannah.",
          audioKey: "quiz_2_3",
          answer: false,
          explanation: "'She doesn't talk much. She just nods and smiles.'라고 했어요."
        },
        {
          type: "fill_blank",
          source: "after_read",
          question: "Mrs. Schmidt is my _____ and a dear friend to me. She's a great _____. With her, I feel at _____.",
          audioKey: "quiz_2_4",
          blanks: [
            { position: 0, answer: "neighbor", options: ["neighbor", "teacher", "sister", "mother"] },
            { position: 1, answer: "listener", options: ["listener", "singer", "player", "dancer"] },
            { position: 2, answer: "home", options: ["home", "school", "work", "peace"] }
          ],
          explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
        }
      ]
    },
    {
      id: 3,
      character: "Tim",
      characterDesc: "Tim과 안내견 Hope",
      page: 18,
      text: "I'm Tim. Hope is my guide dog and my best friend. She is by my side 24/7. She even goes to school with me. Is she a good student? Well, she mostly sleeps in class, but the teachers don't mind. On weekends, we go to the park and play together.\nWith Hope, I feel free and strong. Together, we are happy.",
      translation: "나는 Tim이야. Hope는 내 안내견이자 가장 친한 친구야. 그녀는 언제나 내 옆에 있어. 그녀는 심지어 나와 학교도 같이 다녀. 그녀는 좋은 학생일까? 글쎄, 그녀는 수업 중에 주로 잠을 자지만, 선생님들은 신경 쓰지 않으셔. 주말마다, 우리는 공원에 가서 함께 놀아.\nHope와 있으면, 나는 자유롭고 강한 느낌이 들어. 같이 있으면, 우리는 행복해.",
      audioKey: "para_3",
      vocabulary: [
        { word: "guide dog", korean: "안내견", audioKey: "vocab_guide_dog" },
        { word: "by one's side", korean: "~의 옆에", audioKey: "vocab_by_ones_side" },
        { word: "24/7", korean: "항상, 늘", audioKey: "vocab_twenty_four_seven" },
        { word: "even", korean: "심지어", audioKey: "vocab_even" },
        { word: "mostly", korean: "대부분", audioKey: "vocab_mostly" },
        { word: "mind", korean: "신경 쓰다", audioKey: "vocab_mind" }
      ],
      quizzes: [
        {
          type: "multiple_choice",
          source: "textbook_q",
          question: "What do Tim and Hope do on weekends?",
          audioKey: "quiz_3_1",
          options: [
            "They stay at home.",
            "They go to school.",
            "They go to the park and play together.",
            "They sleep all day."
          ],
          answer: 2,
          explanation: "'On weekends, we go to the park and play together.'에서 알 수 있어요."
        },
        {
          type: "multiple_choice",
          source: "more_q",
          question: "What does Hope do in class?",
          audioKey: "quiz_3_2",
          options: [
            "She plays with students.",
            "She mostly sleeps.",
            "She runs around.",
            "She barks a lot."
          ],
          answer: 1,
          explanation: "'She mostly sleeps in class'에서 알 수 있어요."
        },
        {
          type: "true_false",
          source: "custom",
          question: "The teachers don't like Hope in class.",
          audioKey: "quiz_3_3",
          answer: false,
          explanation: "'The teachers don't mind.'라고 했어요. 선생님들은 신경 쓰지 않으세요."
        },
        {
          type: "fill_blank",
          source: "after_read",
          question: "Hope is my _____ and my best friend. She is always by my _____. With her, I feel free and _____.",
          audioKey: "quiz_3_4",
          blanks: [
            { position: 0, answer: "guide dog", options: ["guide dog", "best friend", "dear neighbor", "school band"] },
            { position: 1, answer: "side", options: ["side", "home", "school", "heart"] },
            { position: 2, answer: "strong", options: ["strong", "sad", "tired", "bored"] }
          ],
          explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
        }
      ]
    }
  ],

  bonusQuizzes: [
    {
      type: "multiple_choice",
      question: "Jihun and Minsu love _____ music.",
      options: ["rock", "pop", "jazz", "classical"],
      answer: 0,
      explanation: "지훈이와 민수는 록 음악을 좋아해요."
    },
    {
      type: "multiple_choice",
      question: "Jihun plays the _____ in the band.",
      options: ["drums", "guitar", "keyboard", "bass"],
      answer: 1,
      explanation: "지훈이는 기타를 연주해요. 민수가 드럼이에요!"
    },
    {
      type: "multiple_choice",
      question: "Sometimes Hannah is sad, and Mrs. Schmidt bakes _____ for her.",
      options: ["a cake", "cookies", "bread", "pie"],
      answer: 0,
      explanation: "Schmidt 부인은 Hannah를 위해 케이크를 구워 줘요."
    },
    {
      type: "multiple_choice",
      question: "In class, Hope mostly _____.",
      options: ["plays", "sleeps", "runs", "barks"],
      answer: 1,
      explanation: "Hope는 수업 시간에 주로 잠을 자요."
    }
  ]
};
