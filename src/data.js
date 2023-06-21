const data = [
  {
    questionID: 1,
    question: "What sigma notation denotes ?",
    answers: ["Integration", "Progression","Differentiation","Summation" ],
    correctAnswer: function() {
      return 3
    }
  },

  {
    questionID: 2,
    question: "Keynesian economists argue that...",
    answers: ["The invisible hand will always ensure the efficient allocation of resources",
    "Only central planned economy ensures the efficient allocation of resources",
    "The invisible hand works, but not always, thus, intervention sometimes is essential",
    "The invisible hand does not work at all"
  ],
    correctAnswer: function() {
      return 2
  }
  },

  {
    questionID: 3,
    question: "What is most likely to happen, when the rate of interest is increased ?",
    answers: ["A rise in inflation","A fall in unemployment", "A rise in imports and fall in exports","Depreciation of the domestic currency"  ],
     correctAnswer: function() {
      return 2
    }
  }
];



export default data;