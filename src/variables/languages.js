export const languages = [
  {
     id: 1, 
     title: "Ingliz tili", 
     imageSrc: "./src/assets/svg-img/eng.svg",
     videos: [
      {
        title: "1.To be verb",
        url: "https://www.youtube.com/embed/n-uTwzzVnsg?si=VIkw15Kk27-E1gnx",
        test: [
          {
            question: "I __ a student.",
            answers: ["am", "is", "are"],
            correct: 0
          },
          {
            question: "She __ a teacher.",
            answers: ["am", "is", "are"],
            correct: 1
          },
          {
            question: "Dildara __ 16 years old.",
            answers: ["are", "is", "am"],
            correct: 1
          },
          {
            question: "They __ my classmates.",
            answers: ["is", "are", "am"],
            correct: 1
          }
        ]
      },
      {
        title: "2.To be verb | Question Forms",
        url: "https://www.youtube.com/embed/0Gi1DknYo5A?si=DiyL4OOngJ0ZJHhH",
        test: [
          {
            question: "__ you a student?",
            answers: ["Are", "Is", "Am"],
            correct: 0
          },
          {
            question: "__ it your computer?",
            answers: ["Are", "Am", "Is"],
            correct: 2
          },
          {
            question: "__ he your brother?",
            answers: ["Is", "Are", "Am"],
            correct: 0
          },
          {
            question: "Is your room clean? Yes, __.",
            answers: ["it are", "it is", "it isn't"],
            correct: 1
          }
        ]
      },
      {
        title: "3.Present Contiuous Tense",
        url: "https://www.youtube.com/embed/MsrT1z4EuOg?si=4znNoxK23QWmbp6F",
        test: [
          {
            question: "The children __.",
            answers: ["are playing", "is playing", "is play"],
            correct: 0
          },
          {
            question: "My friend and I ___ going to the cinema.",
            answers: ["am", "is", "are"],
            correct: 2
          },
          {
            question: "I __ a book now.",
            answers: ["read", "am reading", "isn't reading"],
            correct: 1
          },
          {
            question: "Look at Nargiza! She __ a hat.",
            answers: ["is wearing", "are wearing", "wears"],
            correct: 0
          },
        ]
      },
      {
        title: "4.Present Contiuous Questions",
        url: "https://www.youtube.com/embed/erJ1qmuZW6Q?si=fPg9UVs4GZpiOVAP",
        test: [
          {
            question: "___ you ___ right now? ",
            answers: ["Do / read", "Are / reading", "Does / read"],
            correct: 1
          },
          {
            question: "__ she __ to her friend on the phone?",
            answers: ["Is / talking", "Does / talking", "Are / talking"],
            correct: 0
          },
          {
            question: "What ___ they ___ at the moment?",
            answers: ["do / do", "does / doing", "are / doing"],
            correct: 2
          }
        ]
      },
      {
        title: "5.Present Simple Tense",
        url: "https://www.youtube.com/embed/IL_008MAgwQ?si=qHkF99wAyrYssPs7",
        test: [
          {
            question: "___ she ___ coffee every morning? (to drink)",
            answers: ["Does / drinks", "Does / drink", "Is / drinking"],
            correct: 1
          },
          {
            question: "My father ___ to work by bus",
            answers: ["goes", "go", "gose"],
            correct: 0
          },
          {
            question: "They ___ football on Sundays.",
            answers: ["plays", "playing", "play"],
            correct: 2
          }
        ]
      },
      {
        title: "6.Present Simple Negative",
        url: "https://www.youtube.com/embed/EmWHDcJKLbE?si=5grh0f26sddgo-MP",
        test: [
          {
            question: "He ___ coffee in the morning.",
            answers: ["doesn't drink", "don't drink", "isn't drinking"],
            correct: 0
          },
          {
            question: "They ___ to school on Sundays.",
            answers: ["doesn't go", "don't go", "not go"],
            correct: 1
          },
          {
            question: "My brother ___ TV in the afternoon.",
            answers: ["doesn't watches", "don't watch", "doesn't watch"],
            correct: 2
          }
        ]
      },
      {
        title: "7.Present Simple Questions",
        url: "https://www.youtube.com/embed/6icIxa75PcY?si=LfHSHbKR8EofCOmh",
        test: [
          {
            question: "___ she ___ coffee every morning? (to drink)",
            answers: ["Does / drinks", "Does / drink", "Is / drinking"],
            correct: 1
          },
          {
            question: "___ they ___ football on Sundays?",
            answers: ["Do / play", "Does / play", "Are / playing"],
            correct: 0
          },
          {
            question: "___ your father ___ to work by bus?",
            answers: ["Do / goes", "Does / go", "Does / goes"],
            correct: 1
          }
        ]
      },
      {
        title: "8.Present Simple and Present Continuous",
        url: "https://www.youtube.com/embed/U78SzHVI?si=ymFnlUvXuKUVUWDu",
        test: [
          {
            question: "Look! The cat ___ on the sofa.",
            answers: ["sleeps", "is sleeping", "sleep"],
            correct: 1
          },
          {
            "question": "My brother usually ___ to school at 8 AM.",
            "answers": ["is going", "goes", "going"],
            "correct": 1
          },
          {
            "question": "They ___ a movie right now.",
            "answers": ["watch", "are watching", "watches"],
            "correct": 1
          }
        ]
      },
      {
        title: "9.I have got ... and I have ...",
        url: "https://www.youtube.com/embed/4-afuqA10t4?si=ZLtXl3CfHQiTNPc8",
        test: [
          {
            question: "I ___ a new laptop. (British English)",
            answers: ["have", "have got", "has got"],
            correct: 1
          },
          {
            question: "She ___ a beautiful garden. (American English)",
            answers: ["has got", "has", "have got"],
            correct: 1
          },
          {
            question: "They ___ two dogs. (British English)",
            answers: ["have got", "has got", "have"],
            correct: 0
          }
        ]
      },
      {
        title: "10.Past Simple",
        url: "https://www.youtube.com/embed/6A7n5RKFa2c?si=oiggO5DuPriaNe48",
        test: [
          { 
            question: "She ___ a letter to her friend yesterday.", 
            answers: ["writes", "wrote", "write"], 
            correct: 1 
          },  
          { 
            question: "They ___ to the park last weekend.", 
            answers: ["go", "went", "gone"], 
            correct: 1 
          },  
          { 
            question: "We ___ a great movie last night.", 
            answers: ["saw", "see", "seen"], 
            correct: 0 
          } 
        ]
      },
      {
        title: "11.Past Simple Negative and Questions",
        url: "https://www.youtube.com/embed/XfLqJNHSdZU?si=viLGBlODLQU0ytnf",
        test: [
          { 
            question: "She ___ to the store yesterday. (negative)", 
            answers: ["didn't go", "doesn't go", "not go"], 
            correct: 0 
          },  
          { 
            question: "They ___ the film because they were busy. (negative)", 
            answers: ["don't watch", "didn't watch",  "watched not"], 
            correct: 1
          },  
          { 
            question: "He ___ his homework last night. (negative)", 
            answers: [ "doesn't do", "not did", "didn't do"], 
            correct: 2
          },  
          { 
            question: "___ she ___ a new dress for the party? (question)", 
            answers: ["Did / buy", "Did / bought", "Does / buy"], 
            correct: 0 
          },  
          { 
            question: "___ they ___ the match last Sunday? (question)", 
            answers: ["Do / win", "Did / win", "Did / won"], 
            correct: 1 
          } 
        ]
      },
      {
        title: "12.Past Continuous",
        url: "https://www.youtube.com/embed/t_7oBHw-k-o?si=lEf_lR1mdgKQuuCq",
        test: [
          { 
            question: "She ___ a book when I called her.", 
            answers: ["were reading", "read", "was reading"], 
            correct: 2 
          },  
          { 
            question: "They ___ football at 5 PM yesterday.", 
            answers: ["played", "were playing", "was playing"], 
            correct: 1 
          },  
          { 
            question: "While I ___, my phone rang.", 
            answers: ["slept", "sleeping", "was sleeping"], 
            correct: 2 
          }  
        ]
      },
      {
        title: "13.Past Simple and Past Continuous",
        url: "https://www.youtube.com/embed/0CBcD06Jk7U?si=nOy-n1mZj8JuCPGp",
        test: [
          { 
            question: "I ___ to school when it started raining.", 
            answers: ["was walking", "walk", "walked"], 
            correct: 0 
          },  
          { 
            question: "She ___ TV when I arrived.", 
            answers: ["watched", "was watching", "watching"], 
            correct: 1 
          },  
          { 
            question: "They ___ dinner at 8 PM yesterday.", 
            answers: ["was having", "had", "were having"], 
            correct: 2 
          },  
          { 
            question: "While we ___ football, John hurt his leg.", 
            answers: ["played", "were playing", "play"], 
            correct: 1 
          },  
          { 
            question: "My mother ___ a cake for my birthday last year.", 
            answers: ["bakes", "baked", "was baking"], 
            correct: 1 
          }  
        ]
      },
      {
        title: "14.Present Perfect",
        url: "https://www.youtube.com/embed/Ew9OR6q6GW8?si=Oce4-NYdBNuNtyg7",
        test: [
          { 
            question: "She ___ just ___ her homework.", 
            answers: ["has finished", "finished", "have finished"], 
            correct: 0 
          },  
          { 
            question: "They ___ never ___ to Japan.", 
            answers: ["been", "have been", "has been"], 
            correct: 1 
          },  
          { 
            question: "I ___ my keys. I can't find them anywhere!", 
            answers: ["has lost", "have lost", "lost"], 
            correct: 1 
          }  
        ]
      },
      {
        title: "15.For Since Ago",
        url: "https://www.youtube.com/embed/j1bsFkoflsY?si=AK_RNyTs3gLBrQ5s",
        test: [
          { 
            question: "I have lived in this city ___ five years.", 
            answers: ["ago", "since", "for"], 
            correct: 2 
          },  
          { 
            question: "They moved to London two years ___.", 
            answers: ["for", "since", "ago"], 
            correct: 2 
          },  
          { 
            question: "She has worked here ___ 2010.", 
            answers: ["for", "since", "ago"], 
            correct: 1 
          } 
        ]
      },
      {
        title: "16.Present Perfect va Past Simple",
        url: "https://www.youtube.com/embed/f9chNIPYs18?si=xJoQBEATMzlORjBZ",
        test: [
          { 
            question: "I ___ this movie last night.", 
            answers: ["saw", "have seen", "seen"], 
            correct: 0 
          },  
          { 
            question: "She ___ in three different countries so far.", 
            answers: ["lived", "has lived", "lives"], 
            correct: 1 
          },  
          { 
            question: "We ___ to Paris in 2019.", 
            answers: ["have gone", "went", "gone"], 
            correct: 1 
          },  
          { 
            question: "He ___ his keys and can't find them anywhere.", 
            answers: ["lost", "has lost", "lose"], 
            correct: 1 
          },  
          { 
            question: "They ___ their homework before the teacher arrived.", 
            answers: ["finished", "have finished", "finish"], 
            correct: 0 
          }
        ]
      },
      {
        title: "17.Passive Voice",
        url: "https://www.youtube.com/embed/M2yBOEKH5AA?si=VFy9fI7dU6vAd-hw",
        test: [
          { 
            question: "This book ___ by J.K. Rowling.", 
            answers: ["was written", "wrote", "is write"], 
            correct: 0 
          },  
          { 
            question: "The windows ___ every week.", 
            answers: ["cleaned", "are cleaned", "is cleaned"], 
            correct: 1 
          },  
          { 
            question: "A new bridge ___ in our city last year.", 
            answers: ["was built", "built", "is built"], 
            correct: 0 
          } 
        ]
      },
      {
        title: "18.Present Past Tenses",
        url: "https://www.youtube.com/embed/XaxovUN8rZI?si=IR6vLn6W4cjuP7U1",
        test: [
          { 
            question: "She ___ to the store every Saturday.", 
            answers: ["go", "went", "goes"], 
            correct: 2 
          },  
          { 
            question: "We ___ a great time at the party yesterday.", 
            answers: ["have", "had", "has"], 
            correct: 1 
          },  
          { 
            question: "They ___ TV when I arrived.", 
            answers: ["were watching", "watch", "watched"], 
            correct: 0 
          } 
        ]
      },
      {
        title: "19.Regular and Irregular Verbs",
        url: "https://www.youtube.com/embed/YUiQNv3ihT4?si=UpXPCq8PsKlXHIfw",
        test: [
          {
            question: "He ___ his homework before dinner.",
            answers: ["do", "does", "did"],
            correct: 2
          },
          {
            question: "They ___ a beautiful song at the concert.",
            answers: ["sing", "sung", "sang"],
            correct: 2
          },
          {
            question: "The cake ___ by my sister.",
            answers: ["bake", "was baked", "is bake"],
            correct: 1
          },
          {
            question: "I ___ my keys yesterday.",
            answers: ["loses", "lost", "lose"],
            correct: 1
          },
          {
            question: "The car ___ every morning.",
            answers: ["wash", "washed", "is washed"],
            correct: 2
          } 
        ]
      },
      {
        title: "20.I used to ...",
        url: "https://www.youtube.com/embed/z_gZh4bqGwU?si=kfUYdj4SV6YX_DkD",
        test: [
          {
            question: "I used to ___ early when I was a child.",
            answers: ["wake up", "woke up", "waking up"],
            correct: 0
          },
          {
            question: "She used to ___ in a small village.",
            answers: ["living", "lives", "live"],
            correct: 2
          },
          {
            question: "We used to ___ soccer after school.",
            answers: ["played", "play", "playing"],
            correct: 1
          }
        ]
      },
      {
        title: "21.Going to",
        url: "https://www.youtube.com/embed/H1gZ_EWC2zA?si=OM_hFpLVnCCsVTP3",
        test: [
          {
            question: "I’m going to ___ a new phone next week.",
            answers: ["buy", "bought", "buying"],
            correct: 0
          },
          {
            question: "They are going to ___ football this evening.",
            answers: ["played", "playing", "play"],
            correct: 2
          },
          {
            question: "Is she going to ___ the meeting?",
            answers: ["attend", "attending", "attended"],
            correct: 0
          }
        ]
      },
      {
        title: "22.Modal verbs",
        url: "https://www.youtube.com/embed/Lta1sfBIXCY?si=695v3fkuWh6HuT3J",
        test: [
          {
            question: "You ___ speak loudly in the library.",
            answers: ["should", "must", "mustn't"],
            correct: 2
          },
          {
            question: "I ___ swim when I was five.",
            answers: ["can", "could", "should"],
            correct: 1
          },
          {
            question: "We ___ finish this project today. The deadline is tomorrow!",
            answers: ["might", "must", "could"],
            correct: 1
          }
        ]
      },
      {
        title: "23.Would you like ... ?",
        url: "https://www.youtube.com/embed/YmwBmwFp4Qg?si=9-vKlwJxb0o3kYqz",
        test: [
          {
            question: "Would you like ___ some coffee?",
            answers: ["to have", "having", "have"],
            correct: 0
          },
          {
            question: "Would you like ___ with us tonight?",
            answers: ["come", "coming", "to come"],
            correct: 2
          },
          {
            question: "Would you like ___ a movie later?",
            answers: ["watching", "to watch", "watched"],
            correct: 1
          }
        ]
      },
      {
        title: "24.There is vs There are",
        url: "https://www.youtube.com/embed/8W-7SdxjfaM?si=mx5OwF78zrwqg5QO",
        test: [
          {
            question: "There ___ a book on the table.",
            answers: ["are", "is", "be"],
            correct: 1
          },
          {
            question: "There ___ many students in the classroom.",
            answers: ["is", "are", "was"],
            correct: 1
          },
          {
            question: "There ___ a cat and a dog in the yard.",
            answers: ["is", "are", "were"],
            correct: 0
          }
        ]
      },
      {
        title: "25.Too / either / Neither do / So am I ",
        url: "https://www.youtube.com/embed/EwTazaFX6LY?si=IoGKfP9F3x6A95Vn",
        test: [
          {
            question: "I love pizza. – ___ I.",
            answers: ["Either", "So", "Neither"],
            correct: 1
          },
          {
            question: "I don’t like cold weather. – ___ I.",
            answers: ["Too", "So", "Neither"],
            correct: 2
          },
          {
            question: "She can’t swim. – ___ can I.",
            answers: ["Neither", "So", "Either"],
            correct: 0
          }
        ]
      },
      {
        title: "26.Go to / Go on / Go for",
        url: "https://www.youtube.com/embed/S0db9gFaGdQ?si=LdBrXL_V4izMolqG",
        test: [
          {
            question: "We are going to ___ a trip to Italy this summer.",
            answers: ["go on", "go for", "go to"],
            correct: 0
          },
          {
            question: "I usually ___ a walk after dinner.",
            answers: ["go to", "go for", "go on"],
            correct: 1
          },
          {
            question: "She has to ___ the dentist tomorrow.",
            answers: ["go on", "go for", "go to"],
            correct: 2
          }
        ]
      },
      {
        title: "27.Do vs Make",
        url: "https://www.youtube.com/embed/bDf7xZyicxM?si=yBykpCXnFdg49NeY",
        test: [
          {
            question: "I need to ___ my homework before going out.",
            answers: ["do", "make", "doing"],
            correct: 0
          },
          {
            question: "She always ___ a great job at work.",
            answers: ["does", "makes", "do"],
            correct: 1
          },
          {
            question: "They decided to ___ some changes to the project.",
            answers: ["do", "make", "doing"],
            correct: 1
          }
        ]
      },
      {
        title: "28.Pronouns",
        url: "https://www.youtube.com/embed/FLUwRWhGZcc?si=iPhzvMjeTQ9_azX1",
        test: [
          {
            question: "This is my brother. ___ name is John.",
            answers: ["His", "He", "Him"],
            correct: 0
          },
          {
            question: "I saw Mary and Tom at the park. ___ were playing football.",
            answers: ["They", "Them", "Their"],
            correct: 0
          },
          {
            question: "The book is on the table. Is it ___?",
            answers: ["hers", "she", "her"],
            correct: 0
          } 
        ]
      },
      {
        title: "29.A and an articles",
        url: "https://www.youtube.com/embed/9cO0taZ6zLA?si=SZDMA3ed2pZeBajO",
        test: [
          {
            question: "I saw ___ elephant at the zoo.",
            answers: ["a", "an", "the"],
            correct: 1
          },
          {
            question: "She is ___ honest person.",
            answers: ["a", "an", "the"],
            correct: 1
          },
          {
            question: "I need ___ umbrella because it's raining.",
            answers: ["a", "an", "the"],
            correct: 1
          } 
        ]
      },
      {
        title: "30.Singular and Plural nouns",
        url: "https://www.youtube.com/embed/8cEmTtO6mDE?si=3r56F52Wx7yQsESu",
        test: [
          {
            question: "There are three ___ in the garden.",
            answers: ["flower", "flowers", "floweres"],
            correct: 1
          },
          {
            question: "I have two ___ in my bag.",
            answers: ["pen", "pens", "penes"],
            correct: 1
          },
          {
            question: "She is reading five ___ in the library.",
            answers: ["book", "books", "bookes"],
            correct: 1
          } 
        ]
      },
    ]
  },
];
