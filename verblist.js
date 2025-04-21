const   originalVerbsList= [
    // Verbos seguidos por gerund (-ing)
    {
      base: "admit",
      correct: "gerund",
      example: "In court the accused admitted (to) stealing the documents.",
    },
    {
      base: "avoid",
      correct: "gerund",
      example: "She avoids driving late at night.",
    },
    {
      base: "be worth",
      correct: "gerund",
      example: "This book is worth reading.",
    },
    {
      base: "can't help",
      correct: "gerund",
      example: "I can't help laughing at his jokes.",
    },
    {
      base: "can't stand",
      correct: "gerund",
      example: "He can't stand waiting in lines.",
    },
    {
      base: "carry on",
      correct: "gerund",
      example: "They carried on talking until 2:00 in the morning.",
    },
    {
      base: "deny",
      correct: "gerund",
      example: "She denied breaking the vase.",
    },
    {
      base: "enjoy",
      correct: "gerund",
      example: "We enjoy hiking on weekends.",
    },
    {
      base: "fancy",
      correct: "gerund",
      example: "Do you fancy going out tonight?",
    },
    {
      base: "feel like",
      correct: "gerund",
      example: "I feel like having a cup of tea.",
    },
    {
      base: "finish",
      correct: "gerund",
      example: "He finished writing the report.",
    },
    {
      base: "give up",
      correct: "gerund",
      example: "She gave up smoking last year.",
    },
    {
      base: "imagine",
      correct: "gerund",
      example: "Can you imagine living in Paris?",
    },
    {
      base: "involve",
      correct: "gerund",
      example: "The job involves travelling abroad.",
    },
    {
      base: "keep (on)",
      correct: "gerund",
      example: "They keep (on) talking during the movie.",
    },
    {
      base: "look forward to",
      correct: "gerund",
      example: "I'm looking forward to meeting you.",
    },
    {
      base: "mind",
      correct: "gerund",
      example: "Would you mind closing the window?",
    },
    {
      base: "miss",
      correct: "gerund",
      example: "He misses playing with his friends.",
    },
    {
      base: "postpone",
      correct: "gerund",
      example: "They postponed going on vacation.",
    },
    {
      base: "practice",
      correct: "gerund",
      example: "The more she practices playing the piano the better she gets.",
    },
    {
      base: "recommend",
      correct: "gerund",
      example: "I recommend trying the new restaurant.",
    },
    {
      base: "regret",
      correct: "gerund",
      example: "I regret telling you the secret.",
    },
    {
      base: "risk",
      correct: "gerund",
      example: "He risked losing his job.",
    },
    {
      base: "spend",
      correct: "gerund",
      example: "They spend hours watching TV.",
    },
    {
      base: "stop",
      correct: "gerund",
      example: "She stopped smoking last year.",
    },
    {
      base: "suggest",
      correct: "gerund",
      example: "I suggest going to the museum.",
    },

    // Verbos seguidos por infinitive (to + verbo)
    {
      base: "afford",
      correct: "infinitive",
      example: "We can't afford to buy a new car.",
    },
    {
      base: "agree",
      correct: "infinitive",
      example: "They agreed to meet at noon.",
    },
    {
      base: "appear",
      correct: "infinitive",
      example: "He appears to be tired.",
    },
    {
      base: "arrange",
      correct: "infinitive",
      example: "She arranged to meet him at the café.",
    },
    {
      base: "be able",
      correct: "infinitive",
      example: "He is able to solve the problem.",
    },
    {
      base: "can't wait",
      correct: "infinitive",
      example: "I can't wait to see the movie.",
    },
    {
      base: "choose",
      correct: "infinitive",
      example: "They chose to stay home.",
    },
    {
      base: "decide",
      correct: "infinitive",
      example: "She decided to study abroad.",
    },
    {
      base: "deserve",
      correct: "infinitive",
      example: "He deserves to win the prize.",
    },
    {
      base: "expect",
      correct: "infinitive",
      example: "We expect to arrive early.",
    },
    {
      base: "happen",
      correct: "infinitive",
      example: "I happened to see her at the store.",
    },
    {
      base: "help",
      correct: "infinitive",
      example: "She helped me to carry the bags.",
    },
    {
      base: "hesitate",
      correct: "infinitive",
      example: "Don't hesitate to ask questions.",
    },
    {
      base: "hope",
      correct: "infinitive",
      example: "I hope to visit London next year.",
    },
    {
      base: "learn",
      correct: "infinitive",
      example: "He learned to play the guitar.",
    },
    {
      base: "manage",
      correct: "infinitive",
      example: "They managed to finish on time.",
    },
    {
      base: "offer",
      correct: "infinitive",
      example: "She offered to help with the cleaning.",
    },
    {
      base: "plan",
      correct: "infinitive",
      example: "We plan to travel this summer.",
    },
    {
      base: "pretend",
      correct: "infinitive",
      example: "He pretended to be asleep.",
    },
    {
      base: "promise",
      correct: "infinitive",
      example: "They promised to call later.",
    },
    {
      base: "refuse",
      correct: "infinitive",
      example: "She refused to answer the question.",
    },
    {
      base: "seem",
      correct: "infinitive",
      example: "It seems to be raining.",
    },
    {
      base: "teach",
      correct: "infinitive",
      example: "He taught me to swim.",
    },
    {
      base: "tend",
      correct: "infinitive",
      example: "Cats tend to sleep a lot.",
    },
    {
      base: "threaten",
      correct: "infinitive",
      example: "He threatened to leave.",
    },
    {
      base: "want",
      correct: "infinitive",
      example: "I want to learn Spanish.",
    },
    {
      base: "would like",
      correct: "infinitive",
      example: "She would like to visit Paris.",
    },

    // Verbos modales seguidos por verbo en forma base
    { base: "can", correct: "infinitive_without_to", example: "Can you help me carry these suitcases?" },
    { base: "had better", correct: "infinitive_without_to", example: "You'd better leave now if you want to catch the train" },
    { base: "let", correct: "infinitive_without_to", example: "Let me pay for coffe - it must be my turn." },
    { base: "make", correct: "infinitive_without_to", example: "Sue make her two teenagers do the washing-up every evening afeter dinner" },
    { base: "may", correct: "infinitive_without_to", example: "There's a lot of traffic today, so we may be a bit late" },
    { base: "might", correct: "infinitive_without_to", example: "It might rain tomorrow, so please bring an umbrella or a raincoat" },
    { base: "must", correct: "infinitive_without_to", example: "I must remember to phone Harry - It's his birthday today" },
    { base: "should", correct: "infinitive_without_to", example: "Should we book a table for tomorrow night? It's a very popular restaurant." },
    { base: "would rather", correct: "infinitive_without_to", example: "You look tired. Would you rather stay this evening and watch a film?" },
  ];
  export default  originalVerbsList