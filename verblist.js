const   originalVerbsList= [
    // Verbos seguidos por gerund (-ing)
    {
      base: "admit",
      fillBlank:"In court the accused admitted (to) ___ (steal) the documents.",
      correct: "gerund",
      example: "In court the accused admitted (to) stealing the documents.",
    },
    {
      base: "avoid",
      fillBlank: "She avoids ___ (drive) late at night.",
      correct: "gerund",
      example: "She avoids driving late at night.",
    },
    {
      base: "be worth",
      fillBlank: "This book is worth ___ (read).",
      correct: "gerund",
      example: "This book is worth reading.",
    },
    {
      base: "can't help",
      fillBlank: "I can't help ___ (laugh) at his jokes.",
      correct: "gerund",
      example: "I can't help laughing at his jokes.",
    },
    {
      base: "can't stand",
      fillBlank: "He can't stand ___ (wait) in lines.",
      correct: "gerund",
      example: "He can't stand waiting in lines.",
    },
    {
      base: "carry on",
      fillBlank: "They carried on ___ (talk) until 2:00 in the morning.",
      correct: "gerund",
      example: "They carried on talking until 2:00 in the morning.",
    },
    {
      base: "deny",
      fillBlank: "She denied ___ (break) the vase.",
      correct: "gerund",
      example: "She denied breaking the vase.",
    },
    {
      base: "enjoy",
      fillBlank: "We enjoy ___ (hike) on weekends.",
      correct: "gerund",
      example: "We enjoy hiking on weekends.",
    },
    {
      base: "fancy",
      fillBlank: "Do you fancy ___ (go) out tonight?",
      correct: "gerund",
      example: "Do you fancy going out tonight?",
    },
    {
      base: "feel like",
      fillBlank: "I feel like ___ (have) a cup of tea.",
      correct: "gerund",
      example: "I feel like having a cup of tea.",
    },
    {
      base: "finish",
      fillBlank: "He finished ___ (write) the report.",
      correct: "gerund",
      example: "He finished writing the report.",
    },
    {
      base: "give up",
      fillBlank: "She gave up ___ (smoke) last year.",
      correct: "gerund",
      example: "She gave up smoking last year.",
    },
    {
      base: "imagine",
      fillBlank: "Can you imagine ___ (live) in Paris?",
      correct: "gerund",
      example: "Can you imagine living in Paris?",
    },
    {
      base: "involve",
      fillBlank: "The job involves ___ (travel) abroad.",
      correct: "gerund",
      example: "The job involves travelling abroad.",
    },
    {
      base: "keep (on)",
      fillBlank: "They keep (on) ___ (talk) during the movie.",
      correct: "gerund",
      example: "They keep (on) talking during the movie.",
    },
    {
      base: "look forward to",
      fillBlank: "I'm looking forward to ___ (meet) you.",
      correct: "gerund",
      example: "I'm looking forward to meeting you.",
    },
    {
      base: "mind",
      fillBlank: "Would you mind ___ (close) the window?",
      correct: "gerund",
      example: "Would you mind closing the window?",
    },
    {
      base: "miss",
      fillBlank: "He misses ___ (play) with his friends.",
      correct: "gerund",
      example: "He misses playing with his friends.",
    },
    {
      base: "postpone",
      fillBlank: "They postponed ___ (go) on vacation.",
      correct: "gerund",
      example: "They postponed going on vacation.",
    },
    {
      base: "practice",
      fillBlank: "The more she practices ___ (play) the piano the better she gets.",
      correct: "gerund",
      example: "The more she practices playing the piano the better she gets.",
    },
    {
      base: "recommend",
      fillBlank: "I recommend ___ (try) the new restaurant.",
      correct: "gerund",
      example: "I recommend trying the new restaurant.",
    },
    {
      base: "regret",
      fillBlank: "I regret ___ (tell) you the secret.",
      correct: "gerund",
      example: "I regret telling you the secret.",
    },
    {
      base: "risk",
      fillBlank: "He risked ___ (lose) his job.",
      correct: "gerund",
      example: "He risked losing his job.",
    },
    {
      base: "spend",
      fillBlank: "They spend hours ___ (watch) TV.",
      correct: "gerund",
      example: "They spend hours watching TV.",
    },
    {
      base: "stop",
      fillBlank: "She stopped ___ (smoke) last year.",
      correct: "gerund",
      example: "She stopped smoking last year.",
    },
    {
      base: "suggest",
      fillBlank: "I suggest ___ (go) to the museum.",
      correct: "gerund",
      example: "I suggest going to the museum.",
    },

    // Verbos seguidos por infinitive (to + verbo)
    {
      base: "afford",
      fillBlank: "We can't afford ___ (buy) a new car.",
      correct: "infinitive",
      example: "We can't afford to buy a new car.",
    },
    {
      base: "agree",
      fillBlank: "They agreed ___ (meet) at noon.",
      correct: "infinitive",
      example: "They agreed to meet at noon.",
    },
    {
      base: "appear",
      fillBlank: "He appears ___ (be) tired.",
      correct: "infinitive",
      example: "He appears to be tired.",
    },
    {
      base: "arrange",
      fillBlank: "She arranged ___ (meet) him at the café.",
      correct: "infinitive",
      example: "She arranged to meet him at the café.",
    },
    {
      base: "be able",
      fillBlank: "He is able ___ (solve) the problem.",
      correct: "infinitive",
      example: "He is able to solve the problem.",
    },
    {
      base: "can't wait",
      fillBlank: "I can't wait ___ (see) the movie.",
      correct: "infinitive",
      example: "I can't wait to see the movie.",
    },
    {
      base: "choose",
      fillBlank: "They chose ___ (stay) home.",
      correct: "infinitive",
      example: "They chose to stay home.",
    },
    {
      base: "decide",
      fillBlank: "She decided ___ (study) abroad.",
      correct: "infinitive",
      example: "She decided to study abroad.",
    },
    {
      base: "deserve",
      fillBlank: "He deserves ___ (win) the prize.",
      correct: "infinitive",
      example: "He deserves to win the prize.",
    },
    {
      base: "expect",
      fillBlank: "We expect ___ (arrive) early.",
      correct: "infinitive",
      example: "We expect to arrive early.",
    },
    {
      base: "happen",
      fillBlank: "I happened ___ (see) her at the store.",
      correct: "infinitive",
      example: "I happened to see her at the store.",
    },
    {
      base: "help",
      fillBlank: "She helped me ___ (carry) the bags.",
      correct: "infinitiveWith&WithoutTo",
      example: "She helped me to carry the bags.",
    },
    {
      base: "hesitate",
      fillBlank: "Don't hesitate ___ (ask) questions.",
      correct: "infinitive",
      example: "Don't hesitate to ask questions.",
    },
    {
      base: "hope",
      fillBlank: "I hope ___ (visit) London next year.",
      correct: "infinitive",
      example: "I hope to visit London next year.",
    },
    {
      base: "learn",
      fillBlank: "He learned ___ (play) the guitar.",
      correct: "infinitive",
      example: "He learned to play the guitar.",
    },
    {
      base: "manage",
      fillBlank: "They managed ___ (finish) on time.",
      correct: "infinitive",
      example: "They managed to finish on time.",
    },
    {
      base: "offer",
      fillBlank: "She offered ___ (help) with the cleaning.",
      correct: "infinitive",
      example: "She offered to help with the cleaning.",
    },
    {
      base: "plan",
      fillBlank: "We plan ___ (travel) this summer.",
      correct: "infinitive",
      example: "We plan to travel this summer.",
    },
    {
      base: "pretend",
      fillBlank: "He pretended ___ (be) asleep.",
      correct: "infinitive",
      example: "He pretended to be asleep.",
    },
    {
      base: "promise",
      fillBlank: "They promised ___ (call) later.",
      correct: "infinitive",
      example: "They promised to call later.",
    },
    {
      base: "refuse",
      fillBlank: "She refused ___ (answer) the question.",
      correct: "infinitive",
      example: "She refused to answer the question.",
    },
    {
      base: "seem",
      fillBlank: "It seems ___ (be) raining.",
      correct: "infinitive",
      example: "It seems to be raining.",
    },
    {
      base: "teach",
      fillBlank: "He taught me ___ (swim).",
      correct: "infinitive",
      example: "He taught me to swim.",
    },
    {
      base: "tend",
      fillBlank: "Cats tend ___ (sleep) a lot.",
      correct: "infinitive",
      example: "Cats tend to sleep a lot.",
    },
    {
      base: "threaten",
      fillBlank: "He threatened ___ (leave).",
      correct: "infinitive",
      example: "He threatened to leave.",
    },
    {
      base: "want",
      fillBlank: "I want ___ (learn) Spanish.",
      correct: "infinitive",
      example: "I want to learn Spanish.",
    },
    {
      base: "would like",
      fillBlank: "She would like ___ (visit) Paris.",
      correct: "infinitive",
      example: "She would like to visit Paris.",
    },

    // Verbos modales seguidos por verbo en forma base
    { 
      base: "can", 
      fillBlank: "Can you ___ (help) me carry these suitcases?", 
      correct: "infinitive_without_to", 
      example: "Can you help me carry these suitcases?" 
    },
    { 
      base: "had better", 
      fillBlank: "You'd better ___ (leave) now if you want to catch the train.", 
      correct: "infinitive_without_to", 
      example: "You'd better leave now if you want to catch the train." 
    },
    { 
      base: "let", 
      fillBlank: "Let me ___ (pay) for coffee - it must be my turn.", 
      correct: "infinitive_without_to", 
      example: "Let me pay for coffee - it must be my turn." 
    },
    { 
      base: "make", 
      fillBlank: "Sue makes her two teenagers ___ (do) the washing-up every evening after dinner.", 
      correct: "infinitive_without_to", 
      example: "Sue makes her two teenagers do the washing-up every evening after dinner." 
    },
    { 
      base: "may", 
      fillBlank: "There's a lot of traffic today, so we may ___ (be) a bit late.", 
      correct: "infinitive_without_to", 
      example: "There's a lot of traffic today, so we may be a bit late." 
    },
    { 
      base: "might", 
      fillBlank: "It might ___ (rain) tomorrow, so please bring an umbrella or a raincoat.", 
      correct: "infinitive_without_to", 
      example: "It might rain tomorrow, so please bring an umbrella or a raincoat." 
    },
    { 
      base: "must", 
      fillBlank: "I must ___ (remember) to phone Harry - It's his birthday today.", 
      correct: "infinitive_without_to", 
      example: "I must remember to phone Harry - It's his birthday today." 
    },
    { 
      base: "should", 
      fillBlank: "Should we ___ (book) a table for tomorrow night? It's a very popular restaurant.", 
      correct: "infinitive_without_to", 
      example: "Should we book a table for tomorrow night? It's a very popular restaurant." 
    },
    { 
      base: "would rather", 
      fillBlank: "You look tired. Would you rather ___ (stay) this evening and watch a film?", 
      correct: "infinitive_without_to", 
      example: "You look tired. Would you rather stay this evening and watch a film?" 
    },
  ];
  export default  originalVerbsList