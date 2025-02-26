const questionData = {
  gti: {
    subtests: [
      {
        code: "gti_pci",
        type: "GTI",
        instructions: "Instruksi untuk GTI subtest 1",
        timeLimit: { hours: 0, minutes: 0, seconds: 15 },
        questions: [
          { id: 1, question: "qpdtQPDT" },
          { id: 2, question: "mnfqKNFQ" },
          // { id: 3, question: "RWMQjwkh" },
        ],
      },
      {
        code: "gti_penalaran",
        type: "GTI",
        instructions: "Instruksi untuk GTI subtest 2",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question:
              "John lebih lamban daripada Dani, John lebih cepat dari pada Roy, Siapa yang terlamban?;Roy, John, Dani",
          },
          {
            id: 2,
            question:
              "Rani Lebih pendek daripada Susi,Rani lebih tinggi daripada Rita,Siapa yang tertinggi?;Rani,Susi,Rita",
          },
          {
            id: 3,
            question:
              "Laras lebih cerdas daripada Lina,Laras lebih bodoh daripada Mona,Siapa yang tercerdas? ;Lina,Laras,Mona",
          },
        ],
      },
      {
        code: "gti_jh",
        type: "GTI",
        instructions: "Instruksi untuk GTI subtest 3",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          { id: 1, question: "KNP" },
          { id: 2, question: "GKN" },
          { id: 3, question: "QVY" },
          { id: 4, question: "QVY" },
        ],
      },
      {
        code: "gti_kka",
        type: "GTI",
        instructions: "Instruksi untuk GTI subtest 4",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          { id: 1, question: "6,11,17" },
          // { id: 2, question: "15,1,7" },
        ],
      },
      {
        code: "gti_orientasi",
        type: "GTI",
        instructions: "Instruksi untuk GTI subtest 5",
        timeLimit: { hours: 0, minutes: 0, seconds: 20 },
        questions: [
          { id: 1, question: "3,8|2,8|8,3" },
          // { id: 2, question: "6,7|8,7|2,5" },
        ],
      },
    ],
  },
  personal: {
    subtests: [
      {
        code: "hexaco",
        type: "Hexaco",
        instructions: "Instruksi untuk Hexaco",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question:
              "Selama ini saya mendapatkan fasilitas kerja sesuai dengan jabatan saya",
            options: null,
          },
          {
            id: 2,
            question:
              "Ketika merasa tidak enak badan saya langsung mengambil jatah cuti karena saya takut penyakitnya semakin parah.",
            options: null,
          },
          {
            id: 3,
            question:
              "Setiap sakit saya harus memeriksakan ke berbagai dokter spesialis untuk mendapatkan kepastian mengenai penyakit saya.",
            options: null,
          },
        ],
      },
      {
        code: "work_personality_p1",
        type: "Work Personality Part 1",
        instructions: "Instruksi untuk Work Personality Part 1",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question:
              "Saya membuat rencana dan jadwal untuk menyelesaikan tugas tepat waktu.",
            options: null,
          },
          {
            id: 2,
            question:
              "Saya menyelesaikan tugas dengan cara yang berbeda dari yang telah ditentukan.",
            options: null,
          },
          {
            id: 3,
            question:
              "Saya meminta bantuan dari rekan kerja untuk menyelesaikan tugas yang sulit.",
            options: null,
          },
          {
            id: 4,
            question:
              "Saya selalu meminta pendapat rekan kerja sebelum membuat keputusan.",
            options: null,
          },
          {
            id: 5,
            question:
              "Saya merasa tidak nyaman jika harus bekerja dengan orang yang tidak saya kenal.",
            options: null,
          },
        ],
      },
      {
        code: "cti",
        type: "CTI",
        instructions: "Instruksi untuk CTI",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "Bertanya kepada rekan kerja yang lebih berpengalaman.",
            options: null,
          },
          {
            id: 2,
            question:
              "Mengikuti pelatihan yang diselenggarakan oleh perusahaan.",
            options: null,
          },
          {
            id: 3,
            question:
              "Membaca buku atau artikel yang berkaitan dengan pekerjaan.",
            options: null,
          },
          {
            id: 4,
            question:
              "Mengikuti kursus atau pelatihan yang diselenggarakan oleh pihak ketiga.",
            options: null,
          },
          {
            id: 5,
            question:
              "Mengikuti seminar atau workshop yang diselenggarakan oleh perusahaan.",
            options: null,
          },
        ],
      },
      {
        code: "d3ad",
        type: "D3AD",
        instructions: "Instruksi untuk D3AD",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question:
              "Anda diminta untuk meningkatkan efisiensi di tempat kerja. Apa yang akan Anda lakukan?",
            options: [
              "Mengusulkan alat atau sistem baru yang lebih cepat.",
              "Menganalisis proses yang ada dan menghilangkan langkah yang tidak perlu.",
            ],
          },
          {
            id: 2,
            question:
              "Anda memiliki ide yang bagus untuk meningkatkan kinerja tim. Apa yang Anda lakukan?",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
            ],
          },
          {
            id: 3,
            question:
              "Anda dan rekan kerja memiliki pendapat berbeda tentang cara menyelesaikan proyek. Apa yang Anda lakukan?",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
            ],
          },
          {
            id: 4,
            question:
              "Anda memiliki ide yang bagus untuk meningkatkan kinerja tim. Apa yang Anda lakukan?",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
            ],
          },
          {
            id: 5,
            question:
              "Anda dan rekan kerja memiliki pendapat berbeda tentang cara menyelesaikan proyek. Apa yang Anda lakukan?",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
            ],
          },
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
            question:
              "Pada tanggal 28 Maret, PT Sejahtera menerima tagihan telepon untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan beban telepon di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang telepon di kredit.",
            ],
          },
          {
            id: 2,
            question:
              "Pada tanggal 31 Maret, PT Sejahtera menerima tagihan listrik untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 31 Maret, mencatat beban listrik di debet dan utang listrik di kredit",
              "Pada tanggal 5 April, mencatat beban listrik di debet dan kas di kredit",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan beban listrik di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang listrik di kredit.",
            ],
          },
          {
            id: 3,
            question:
              "Pada tanggal 31 Maret, PT Sejahtera menerima tagihan air untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 31 Maret, mencatat beban air di debet dan utang air di kredit",
              "Pada tanggal 5 April, mencatat beban air di debet dan kas di kredit",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan beban air di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang air di kredit.",
            ],
          },
        ],
      },
      {
        code: "d3ad",
        type: "D3AD",
        instructions: "Instruksi untuk D3AD",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },

        questions: [
          {
            id: 1,
            question:
              "Anda diminta untuk meningkatkan efisiensi di tempat kerja. Apa yang akan Anda lakukan?",
            options: [
              "Mengusulkan alat atau sistem baru yang lebih cepat.",
              "Menganalisis proses yang ada dan menghilangkan langkah yang tidak perlu.",
            ],
          },
          {
            id: 2,
            question:
              "Rekan kerja Anda mengalami kesulitan dalam memahami tugas yang diberikan. Bagaimana Anda membantu?",
            options: [
              "Memberikan panduan langkah demi langkah dan memastikan mereka memahaminya.",
              "Menyarankan mereka untuk mencari solusi sendiri agar lebih mandiri.",
            ],
          },
          {
            id: 3,
            question:
              "Ketika menghadapi tantangan baru di tempat kerja, bagaimana reaksi Anda?",
            options: [
              "Mencari informasi dan beradaptasi dengan cepat untuk menyelesaikan tantangan.",
              "Mengandalkan metode lama yang sudah terbukti berhasil.",
            ],
          },
          {
            id: 4,
            question:
              "Anda diberikan proyek dengan tenggat waktu yang sangat singkat. Apa yang Anda lakukan?",
            options: [
              "Membuat daftar prioritas dan bekerja secara efisien untuk menyelesaikan tugas tepat waktu.",
              "Bekerja tanpa rencana dan menyesuaikan dengan situasi yang berkembang.",
            ],
          },
          {
            id: 5,
            question:
              "Bagaimana Anda menangani konflik dengan rekan kerja terkait perbedaan cara kerja?",
            options: [
              "Mendiskusikan perbedaan dengan terbuka dan mencari solusi bersama.",
              "Tetap pada cara kerja sendiri tanpa memperdulikan pendapat mereka.",
            ],
          },
        ],
      },
      {
        code: "socdes",
        type: "Social Description (SOCDES)",
        instructions: "Instruksi untuk Social Description (SOCDES)",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "Bertanya kepada rekan kerja yang lebih berpengalaman.",
            options: null,
          },
          {
            id: 2,
            question:
              "Mengikuti pelatihan yang diselenggarakan oleh perusahaan.",
            options: null,
          },
          {
            id: 3,
            question:
              "Membaca buku atau artikel yang berkaitan dengan pekerjaan.",
            options: null,
          },
          {
            id: 4,
            question:
              "Mengikuti kursus atau pelatihan yang diselenggarakan oleh pihak ketiga.",
            options: null,
          },
          {
            id: 5,
            question:
              "Mengikuti seminar atau workshop yang diselenggarakan oleh perusahaan.",
            options: null,
          },
        ],
      },
    ],
  },

  multipleChoice: {
    subtests: [
      {
        code: "wpt_taxand",
        type: "WPT",
        instructions: "Instruksi untuk WPT subtest 1",
        timeLimit: { hours: 0, minutes: 0, seconds: 15 },
        questions: [
          {
            id: 1,
            question:
              "Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal <br> Oven : Roti = … : Foto",
            options: ["motor", "roda", "kolak", "nobita"],
          },
          {
            id: 2,
            question:
              "Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal <br> Jala : Nelayan = … : Dokter",
            options: ["Kamera", "Lensa", "Kertas", "Warna"],
          },
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
            question:
              "Pada tanggal 28 Maret, PT Sejahtera menerima tagihan telepon untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit,Pada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit",
              "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan beban telepon di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang telepon di kredit.",
            ],
          },
          {
            id: 2,
            question:
              "Pada tanggal 31 Maret, PT Sejahtera menerima tagihan listrik untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 31 Maret, mencatat beban listrik di debet dan utang listrik di kredit",
              "Pada tanggal 5 April, mencatat beban listrik di debet dan kas di kredit",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan beban listrik di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang listrik di kredit.",
            ],
          },
          {
            id: 3,
            question:
              "Pada tanggal 31 Maret, PT Sejahtera menerima tagihan air untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
            options: [
              "Pada tanggal 31 Maret, mencatat beban air di debet dan utang air di kredit",
              "Pada tanggal 5 April, mencatat beban air di debet dan kas di kredit",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
              "Pada tanggal 31 Maret, mencatat beban dibayar dimuka di debet dan beban air di kredit.",
              "Pada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang air di kredit.",
            ],
          },
        ],
      },
      {
        code: "accounting_staf_level_senior",
        type: "Accounting Senior",
        instructions: "Instruksi untuk Accounting Staff Senior",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question:
              "<p>PT A melakukan perjanjian dengan PT B untuk menjual Mesin atas nama PT B. Skema pembayaran dan penerimaan kas dalam perjanjian tersebut adalah sebagai berikut:</p> <ul><li>Pelanggan akhir membayar Rp 1 juta ke PT A untuk tiap unit Mesin.</li><li>PT A menyerahkan Rp 900 ribu ke PT B untuk tiap unit mesin yang dijual (menahan Rp 100 ribu sebagai komisi penjualan).</li><li>PT A memberi insentif sebesar Rp 5 ribu ke pelanggan akhir sebagai insentif untuk membeli mesin.</li></ul><p>Berdasarkan transaksi di atas, bagaimana PT A harus mencatat jurnal akuntansinya?</p>",
            options: [
              "Mencatat pendapatan Rp 1 juta dan beban insentif Rp 5 ribu.",
              "Mencatat pendapatan komisi Rp 100 ribu dan beban insentif Rp 5 ribu.",
              "Mencatat pendapatan komisi Rp 100 ribu dan piutang usaha Rp 900 ribu.",
              "Mencatat kas masuk Rp 1 juta dan kas keluar Rp 900 ribu sebagai kewajiban.",
            ],
          },
          {
            id: 2,
            question:
              "<p>PT C adalah perusahaan yang menerapkan metode pencatatan <i>accrual basis</i>. Pada tanggal 28 Februari, PT C menerima tagihan listrik untuk bulan Februari sebesar Rp 5 juta, tetapi pembayaran akan dilakukan pada tanggal 10 Maret.</p><p>Bagaimana PT C seharusnya mencatat transaksi ini?</p>",
            options: [
              "Mencatat beban listrik sebesar Rp 5 juta dan utang usaha Rp 5 juta pada 28 Februari.",
              "Mencatat beban listrik sebesar Rp 5 juta dan kas keluar Rp 5 juta pada 28 Februari.",
              "Mencatat beban listrik sebesar Rp 5 juta dan kas keluar Rp 5 juta pada 10 Maret.",
              "Tidak mencatat apapun hingga pembayaran dilakukan.",
            ],
          },
          {
            id: 3,
            question:
              "<p>PT D menerima pembayaran uang muka sebesar Rp 50 juta dari pelanggan untuk proyek jasa yang akan dikerjakan dalam 3 bulan ke depan.</p><p>Bagaimana jurnal yang benar untuk mencatat penerimaan uang muka ini?</p>",
            options: [
              "Mencatat pendapatan jasa sebesar Rp 50 juta.",
              "Mencatat kas masuk Rp 50 juta dan liabilitas pendapatan diterima di muka Rp 50 juta.",
              "Mencatat kas masuk Rp 50 juta dan piutang usaha Rp 50 juta.",
              "Mencatat kas masuk Rp 50 juta dan beban jasa Rp 50 juta.",
            ],
          },
          {
            id: 4,
            question:
              "<p>PT E membeli kendaraan operasional seharga Rp 200 juta dengan pembayaran secara cicilan selama 5 tahun.</p><p>Bagaimana pencatatan jurnal pada saat kendaraan diterima?</p>",
            options: [
              "Mencatat aset kendaraan Rp 200 juta dan utang jangka panjang Rp 200 juta.",
              "Mencatat beban kendaraan Rp 200 juta dan kas keluar Rp 200 juta.",
              "Mencatat kas masuk Rp 200 juta dan beban kendaraan Rp 200 juta.",
              "Tidak mencatat apapun hingga cicilan pertama dibayarkan.",
            ],
          },
          {
            id: 5,
            question:
              "<p>PT F memiliki persediaan barang dagangan senilai Rp 150 juta. Setelah dilakukan audit, ditemukan adanya penyusutan nilai sebesar Rp 20 juta karena barang usang.</p><p>Bagaimana PT F seharusnya mencatat penyusutan nilai ini?</p>",
            options: [
              "Mencatat beban penyusutan persediaan Rp 20 juta dan pengurangan nilai persediaan Rp 20 juta.",
              "Mencatat kas keluar Rp 20 juta dan beban penyusutan Rp 20 juta.",
              "Mencatat utang usaha Rp 20 juta dan pengurangan nilai persediaan Rp 20 juta.",
              "Tidak mencatat apapun hingga barang dijual.",
            ],
          },
        ],
      },
    ],
  },
  // Bisa ditambahkan jenis tes lainnya

  ist: {
    subtests: [
      {
        code: "ist_fa",
        type: "IST FA",
        instructions: "Instruksi untuk IST FA",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "Buku : Membaca <br/> Pensil : ?",
            options: ["Kertas", "Menulis", "Penghapus", "Pena"],
          },
          {
            id: 2,
            question: "Ikan : Berenang <br/> Burung : ?",
            options: ["Terbang", "Laut", "Sarang", "Air"],
          },
          {
            id: 3,
            question: "Matahari : Cahaya <br/> Lampu : ?",
            options: ["Panas", "Terang", "Malam", "Langit"],
          },
          {
            id: 4,
            question: "Dokter : Pasien <br/> Guru : ?",
            options: ["Sekolah", "Siswa", "Pelajaran", "Kelas"],
          },
          {
            id: 5,
            question: "Musik : Mendengar <br/> Lukisan : ?",
            options: ["Telinga", "Mata", "Warna", "Indah"],
          },
        ],
      },
      {
        code: "ist_wu",
        type: "IST WU",
        instructions: "Instruksi untuk IST WU",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "Sinonim kata dari “Ambisius” adalah?",
            options: ["Malas", "Berambisi", "Pesimis", "Acuh"],
          },
          {
            id: 2,
            question: "Antonim dari kata “Optimis” adalah?",
            options: ["Percaya Diri", "Pesimis", "Berharap", "Yakin"],
          },
          {
            id: 3,
            question: "Sinonim kata dari “Gigih” adalah?",
            options: ["Ulet", "Putus Asa", "Lemah", "Lamban"],
          },
          {
            id: 4,
            question: "Antonim dari kata “Dermawan” adalah?",
            options: ["Pelit", "Baik Hati", "Murah Hati", "Ramah"],
          },
          {
            id: 5,
            question: "Sinonim kata dari “Cerdas” adalah?",
            options: ["Bodoh", "Pandai", "Lemot", "Tumpul"],
          },
        ],
      },
      {
        code: "ist_zr",
        type: "IST ZR",
        instructions: "Instruksi untuk IST ZR",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            question: "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, …",
            options: ["21", "22", "23", "24"],
          },
          {
            id: 2,
            question: "2, 4, 8, 16, 32, 64, 128, …",
            options: ["256", "512", "1024", "2048"],
          },
          {
            id: 3,
            question: "1, 2, 4, 8, 16, 32, 64, 128, …",
            options: ["256", "512", "1024", "2048"],
          },
          {
            id: 4,
            question: "1, 1, 2, 3, 5, 8, 13, 21, 34, …",
            options: ["55", "89", "144", "233"],
          },
          {
            id: 5,
            question: "1, 4, 9, 16, 25, 36, 49, 64, …",
            options: ["81", "100", "121", "144"],
          },
        ],
      },
    ],
  },

  disc: {
    subtests: [
      {
        code: "disc_test",
        type: "DISC",
        instructions: "Pilihlah opsi yang sesuai dengan kriteria Anda!",
        timeLimit: { hours: 0, minutes: 3, seconds: 0 },
        questions: [
          {
            id: 1,
            pref: "D Mudah bergaul, menyenangkan",
            key: "D",
            most: null,
            least: null,
          },
          {
            id: 2,
            pref: "I Mudah percaya kepada orang lain",
            key: "I",
            most: null,
            least: null,
          },
          {
            id: 3,
            pref: "S Suka berpetualangan, pengambil Resiko",
            key: "S",
            most: null,
            least: null,
          },
          {
            id: 4,
            pref: "C Penuh toleransi, menghormati orang lain",
            key: "C",
            most: null,
            least: null,
          },
        ],
      },
    ],
  },
};

export default questionData;
