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
      timeLimit: { hours: 0, minutes: 3, seconds: 0 }, // dalam detik
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
      timeLimit: { hours: 0, minutes: 4, seconds: 0 },
      instructions: "Instruksi untuk GTI subtest 2",
    },
    subtest3: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "KNP",
          code: "gti_jh",
        },
        {
          id: 2,
          type: "GTI",
          question: "GKN",
          code: "gti_jh",
        },
        {
          id: 3,
          type: "GTI",
          question: "QVY",
          code: "gti_jh",
        },
      ],
      totalQuestions: 3,
      timeLimit: { hours: 0, minutes: 4, seconds: 0 },
      instructions: "Instruksi untuk GTI subtest 3",
    },
    subtest4: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "6,11,17",
          code: "gti_kka",
        },
        {
          id: 2,
          type: "GTI",
          question: "15,1,7",
          code: "gti_kka",
        },
      ],
      totalQuestions: 2,
      timeLimit: { hours: 0, minutes: 4, seconds: 0 },
      instructions: "Instruksi untuk GTI subtest 4",
    },
    subtest5: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "3,8|2,8|8,3",
          code: "gti_orientasi",
        },
        {
          id: 2,
          type: "GTI",
          question: "6,7|8,7|2,5",
          code: "gti_orientasi",
        },
      ],
      totalQuestions: 2,
      timeLimit: { hours: 0, minutes: 5, seconds: 0 },
      instructions: "Instruksi untuk GTI subtest 5",
    },
    totalSubtests: 5,
  },
  mtpc: {
    testStory: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "qpdtQPDT",
          code: "gti_pci",
        },
      ],
      totalQuestions: 10,
      timeLimit: 600,
      instructions: "Instruksi untuk WPT subtest 1",
    },
    testIncomlete: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "qpdtQPDT",
          code: "gti_pci",
        },
      ],
      totalQuestions: 10,
      timeLimit: 600,
      instructions: "Instruksi untuk WPT subtest 1",
    },
    totalSubtests: 1,
  },
  personal: {
    hexaco: {
      questions: [
        {
          id: 1,
          type: "Hexaco",
          question: "Selama ini saya mendapatkan fasilitas kerja sesuai dengan jabatan saya",
          code: "hexaco",
        },
        {
          id: 2,
          type: "Hexaco",
          question: "Tuntutan pekerjaan yang baru membuat saya tertekan.",
          code: "hexaco",
        },
        {
          id: 3,
          type: "Hexaco",
          question: "Saya lebih nyaman apabila orang lain yang membuat keputusan",
          code: "hexaco",
        },
      ],
      totalQuestions: 3,
      timeLimit: 600,
      instructions: "Instruksi untuk WPT subtest 1",
    },
    cti: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "qpdtQPDT",
          code: "gti_pci",
        },
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
