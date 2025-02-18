const questionData = {
  personal: {
    subtests: [
      {
        code: "hexaco",
        type: "Hexaco",
        instructions: "Instruksi untuk Hexaco",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          { id: 1, question: "Selama ini saya mendapatkan fasilitas kerja sesuai dengan jabatan saya", options: null },
          { id: 2, question: "Ketika merasa tidak enak badan saya langsung mengambil jatah cuti karena saya takut penyakitnya semakin parah.", options: null },
          { id: 3, question: "Setiap sakit saya harus memeriksakan ke berbagai dokter spesialis untuk mendapatkan kepastian mengenai penyakit saya.", options: null },
        ],
      },
      {
        code: "cti",
        type: "CTI",
        instructions: "Instruksi untuk CTI",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [{ id: 1, question: "qpdtQPDT", options: null, options: ["Kamera", "Lensa", "Kertas", "Warna"] }],
      },
    ],
  },

  multipleChoice: {
    subtests: [
      {
        code: "wpt_taxand",
        type: "WPT",
        instructions: "Instruksi untuk WPT subtest 1",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          { id: 1, question: "Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal <br> Oven : Roti = … : Foto", options: ["motor", "roda", "kolak", "nobita"] },
          { id: 2, question: "Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal <br> Jala : Nelayan = … : Dokter", options: ["Kamera", "Lensa", "Kertas", "Warna"] },
        ],
      },
      {
        code: "accounting_staf_level_junior",
        type: "Accounting",
        instructions: "Instruksi untuk Accounting Staff Junior",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "Pada tanggal 28 Maret, PT Sejahtera menerima tagihan telepon untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan beban telepon di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang telepon di kredit.",
            ],
          },
        ],
      },
    ],
  },
  // Bisa ditambahkan jenis tes lainnya
};

export default questionData;
