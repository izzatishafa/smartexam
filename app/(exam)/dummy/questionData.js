const questionData = {
  gti: {
    subtest1: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "qpdtQPDT",
          code: "gti_pci",
        },
        {
          id: 2,
          type: "GTI",
          question: "mnfqKNFQ",
          code: "gti_pci",
        },
        {
          id: 3,
          type: "GTI",
          question: "RWMQjwkh",
          code: "gti_pci",
        },
      ],
      totalQuestions: 3,
      timeLimit: 300, // dalam detik
      instructions: "Instruksi untuk GTI subtest 1",
    },
    subtest2: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "John lebih lamban daripada Dani, John lebih cepat dari pada Roy, Siapa yang terlamban?;Roy, John, Dani",
          code: "gti_penalaran",
        },
        {
          id: 2,
          type: "GTI",
          question: "Rani Lebih pendek daripada Susi,Rani lebih tinggi daripada Rita,Siapa yang tertinggi?;Rani,Susi,Rita",
          code: "gti_penalaran",
        },
        {
          id: 3,
          type: "GTI",
          question: "Laras lebih cerdas daripada Lina,Laras lebih bodoh daripada Mona,Siapa yang tercerdas? ;Lina,Laras,Mona",
          code: "gti_penalaran",
        },
        {
          id: 4,
          type: "GTI",
          question: "Laras lebih cerdas daripada Lina,Laras lebih bodoh daripada Mona,Siapa yang tercerdas? ;Lina,Laras,Mona",
          code: "gti_penalaran",
        },
      ],
      totalQuestions: 4,
      timeLimit: 300,
      instructions: "Instruksi untuk GTI subtest 2",
    },
    subtest3: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "Pilih jawaban dari teka-teki dengan tepat!",
          letters: ["H", "E", "T"],
          options: ["H", "E", "T"],
          correctAnswer: "H",
        },
        {
          id: 2,
          type: "GTI",
          question: "Pilih jawaban dari teka-teki dengan tepat!",
          letters: ["A", "B", "O"],
          options: ["A", "B", "O"],
          correctAnswer: "A",
        },
      ],
      totalQuestions: 2,
      timeLimit: 300,
      instructions: "Instruksi untuk GTI subtest 3",
    },
    subtest4: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "Pilih jawaban dari teka-teki dengan tepat!",
          letters: [21, 29, 17],
          options: ["A", "B", "C"],
          correctAnswer: "B",
        },
        {
          id: 2,
          type: "GTI",
          question: "Pilih jawaban dari teka-teki dengan tepat!",
          letters: [7, 1, 3],
          options: ["A", "B", "C"],
          correctAnswer: "A",
        },
      ],
      totalQuestions: 2,
      timeLimit: 300,
      instructions: "Instruksi untuk GTI subtest 4",
    },
    totalSubtests: 4,
  },
  wpt: {
    subtest1: {
      questions: [
        // soal-soal WPT
      ],
      totalQuestions: 10,
      timeLimit: 600,
      instructions: "Instruksi untuk WPT subtest 1",
    },
    totalSubtests: 1,
  },
  // Bisa ditambahkan jenis tes lainnya
};

export default questionData;
