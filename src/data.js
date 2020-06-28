const data = [
  {
    id: 1,
    quizze: {
      question: "Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?",
      answer: [
        { id: 1, name: "A: Hà Nội và Long An", value: "a", isCorreect: false },
        {
          id: 2,
          name: "B: Hà nội và Quảng Ninh",
          value: "b",
          isCorreect: false,
        },
        {
          id: 3,
          name: "C: Thăng Long và Hạ Long",
          value: "c",
          isCorreect: true,
        },
        {
          id: 4,
          name: "D: Quảng Ninh và Long An",
          value: "d",
          isCorreect: false,
        },
      ],
      score: 100,
    },
  },
  {
    id: 2,
    quizze: {
      question: "Người đẹp Monalisa không có thứ gì?",
      answer: [
        { id: 1, name: "A: Tiền", value: "a", isCorreect: false },
        { id: 2, name: "B: Lông Chân", value: "b", isCorreect: false },
        { id: 3, name: "C: Lông Mày", value: "c", isCorreect: false },
        { id: 4, name: "D: Chồng", value: "d", isCorreect: true },
      ],
      score: 300,
    },
  },
  {
    id: 2,
    id: 3,
    quizze: {
      question: "Bệnh gì bác sỹ bó tay?",
      answer: [
        { id: 1, name: "A: Gãy tay", value: "a", isCorreect: true },
        { id: 2, name: "B: Siđa", value: "b", isCorreect: false },
        { id: 3, name: "C: Bệnh sĩ", value: "c", isCorreect: false },
        { id: 4, name: "D: HIV", value: "d", isCorreect: false },
      ],
      score: 500,
    },
  },
  {
    id: 4,
    quizze: {
      question: "Sở thú bị cháy, con gì chạy ra đầu tiên?",
      answer: [
        { id: 1, name: "A: Con chim", value: "a", isCorreect: false },
        { id: 2, name: "B: Con Người", value: "c", isCorreect: true },
        { id: 3, name: "C: Con rắn", value: "b", isCorreect: false },
        { id: 4, name: "D: Con Tê Giác", value: "d", isCorreect: false },
      ],
      score: 1000,
    },
  },
];

export default data;
