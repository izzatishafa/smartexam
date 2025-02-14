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
      instructions: "Instruksi untuk GTA subtest 1",
    },
    subtest2: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question:
            "John lebih lamban daripada Dani, John lebih cepat dari pada Roy, Siapa yang terlamban?;Roy, John, Dani",
          code: "gti_penalaran",
        },
        {
          id: 2,
          type: "GTI",
          question:
            "Rani Lebih pendek daripada Susi,Rani lebih tinggi daripada Rita,Siapa yang tertinggi?;Rani,Susi,Rita",
          code: "gti_penalaran",
        },
        {
          id: 3,
          type: "GTI",
          question:
            "Laras lebih cerdas daripada Lina,Laras lebih bodoh daripada Mona,Siapa yang tercerdas? ;Lina,Laras,Mona",
          code: "gti_penalaran",
        },
        {
          id: 4,
          type: "GTI",
          question:
            "Laras lebih cerdas daripada Lina,Laras lebih bodoh daripada Mona,Siapa yang tercerdas? ;Lina,Laras,Mona",
          code: "gti_penalaran",
        },
      ],
      totalQuestions: 4,
      timeLimit: 300,
      instructions: "Instruksi untuk GTA subtest 2",
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
      timeLimit: 300,
      instructions: "Instruksi untuk GTA subtest 3",
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
      timeLimit: 300,
      instructions: "Instruksi untuk GTA subtest 4",
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
      timeLimit: 300,
      instructions: "Instruksi untuk GTA subtest 5",
    },
    totalSubtests: 5,
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
  multiplechoice: {
    english: {
      questions: [
        {
          id: 1,
          type: "english",
          question:
            "Have you discussed _________ together with design department on this project?",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "it",
            },
            {
              choice: "B",
              label: "them",
            },
            {
              choice: "C",
              label: "this",
            },
            {
              choice: "D",
              label: "that",
            },
          ],
        },
        {
          id: 2,
          type: "english",
          question:
            "If the internet connection is in trouble, we ______ send emails to our clients.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "could",
            },
            {
              choice: "B",
              label: "can",
            },
            {
              choice: "C",
              label: "may",
            },
            {
              choice: "D",
              label: "will not",
            },
          ],
        },
        {
          id: 3,
          type: "english",
          question:
            "If she _________ the promotion offer from her company, she would have become a head of Bandung branch.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "accepted",
            },
            {
              choice: "B",
              label: "had accepted",
            },
            {
              choice: "C",
              label: "accepts",
            },
            {
              choice: "D",
              label: "has accepted",
            },
          ],
        },
        {
          id: 4,
          type: "english",
          question:
            "They have been unable to settle the dispute ________ working conditions.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "By",
            },
            {
              choice: "B",
              label: "With",
            },
            {
              choice: "C",
              label: "For",
            },
            {
              choice: "D",
              label: "Over",
            },
          ],
        },
        {
          id: 5,
          type: "english",
          question:
            "The negotiation between Sumantri Ltd. and ABC Insurance Inc. related to the __________ dispute will be started at 8 a.m.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "Previous",
            },
            {
              choice: "B",
              label: "Previously",
            },
            {
              choice: "C",
              label: "Prevision",
            },
            {
              choice: "D",
              label: "Prevalence",
            },
          ],
        },
        {
          id: 6,
          type: "english",
          question:
            "The person________ wrote this letter was very upset with the poor service she received.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "who",
            },
            {
              choice: "B",
              label: "whom",
            },
            {
              choice: "C",
              label: "which",
            },
            {
              choice: "D",
              label: "that",
            },
          ],
        },
        {
          id: 7,
          type: "english",
          question:
            "Mrs. Tini, the manager of sales department, wants our company's clients _________ with our products.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "satisfaction",
            },
            {
              choice: "B",
              label: "satisfied",
            },
            {
              choice: "C",
              label: "satisfying",
            },
            {
              choice: "D",
              label: "satisfy",
            },
          ],
        },
        {
          id: 8,
          type: "english",
          question:
            "She likes working in her new office _____ all of her officemates are very friendly.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "because",
            },
            {
              choice: "B",
              label: "so",
            },
            {
              choice: "C",
              label: "but",
            },
            {
              choice: "D",
              label: "although",
            },
          ],
        },
        {
          id: 9,
          type: "english",
          question:
            "My old friend, _________ office is across this building, will be promoted soon.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "whose",
            },
            {
              choice: "B",
              label: "whom",
            },
            {
              choice: "C",
              label: "which",
            },
            {
              choice: "D",
              label: "who",
            },
          ],
        },
        {
          id: 10,
          type: "english",
          question:
            "What this country needs _______ a long-term policy for investment in science and technology.",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "is",
            },
            {
              choice: "B",
              label: "are",
            },
            {
              choice: "C",
              label: "was",
            },
            {
              choice: "D",
              label: "were",
            },
          ],
        },
      ],
      totalQuestions: 10,
      timeLimit: 600,
      instructions: "Instruksi untuk English Story Test",
    },
    accounting_junior: {
      questions: [
        {
          question:
            '<p style="text-align:justify">Berikut beberapa hal terkait persediaan:</p>\r\n\r\n<ol style="list-style-type:upper-roman">\r\n\t<li style="text-align:justify">Jumlah persediaan yang diakui sebagai beban selama periode berjalan</li>\r\n\t<li style="text-align:justify">Kebijakan akuntansi yang digunakan dalam pengukuran persediaan</li>\r\n\t<li style="text-align:justify">Jumlah tercatat persediaan dan jumlah nilai tercatat menurut klasifikasi persediaan</li>\r\n\t<li style="text-align:justify">Penyebab penurunan nilai persediaan</li>\r\n</ol>\r\n\r\n<p style="text-align:justify">Yang perlu diungkapkan dalam laporan keuangan mengenai akun persediaan adalah:</p>\r\n',
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "i, ii, iii, dan iv",
            },
            {
              choice: "B",
              label: "i, ii, dan iii",
            },
            {
              choice: "C",
              label: "i saja",
            },
            {
              choice: "D",
              label: "i dan ii saja",
            },
            {
              choice: "E",
              label: "i, ii, dan iv",
            },
          ],
        },
        {
          question:
            '<p style="margin-left:19px; text-align:justify">\r\n\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">PT Merah Delima menggunakan sistem pencatatan persediaan secara periodik dan menggunakan metode rata-rata untuk penghitungan biaya persediaannya. Data berikut ini terkait dengan transaksi PT Merah Delima selama tahun 2016:</span></span></p>\r\n<table align="center" cellspacing="0" class="Table" style="border-collapse:collapse; border:none">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:85px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t&nbsp;</p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:136px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Persediaan awal</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:197px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">2.500 unit @ Rp 3.500 </span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; vertical-align:top; width:85px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Februari</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:136px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Pembelian</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:197px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">3.000 unit @ Rp 3.900</span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; vertical-align:top; width:85px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Juli</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:136px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Pembelian</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:197px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">4.500 unit @ Rp 3.700</span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; vertical-align:top; width:85px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Oktober</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:136px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Pembelian</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:197px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">1.000 unit @ Rp 3.500</span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; vertical-align:top; width:85px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Desember</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:136px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">Persediaan akhir</span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:197px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-family:Calibri,sans-serif"><span new="" style="font-family:" times="">1.500 unit</span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p style="margin-left:19px; text-align:justify">\r\n\t<span new="" style="font-family:" times="">Hitunglah harga pokok penjualannya</span></p>\r\n',
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "<p>\r\n\tRp 35.250.000</p>\r\n",
            },
            {
              choice: "B",
              label: "<p>\r\n\tRp 34.897.737,37</p>\r\n",
            },
            {
              choice: "C",
              label: "<p>\r\n\tRp 33.750.000</p>\r\n",
            },
            {
              choice: "D",
              label: "<p>\r\n\tRp 34.984.090</p>\r\n",
            },
            {
              choice: "E",
              label: "<p>\r\n\tRp 35.063.636,4</p>\r\n",
            },
          ],
        },
        {
          question:
            "<p>\r\n\tAkun berikut ini yang <strong>tidak</strong> akan ditutup ke akun ikhtisar laba rugi adalah:</p>\r\n",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "Penjualan",
            },
            {
              choice: "B",
              label: "Akumulasi Penyusutan",
            },
            {
              choice: "C",
              label: "Beban Penyusutan",
            },
            {
              choice: "D",
              label: "Beban Listrik",
            },
            {
              choice: "E",
              label: "Beban Telepon",
            },
          ],
        },
        {
          question:
            "PT Sehat membayar sewa gedung kantor di tanggal 1 Desember 2017 sebesar Rp 36.000.000 untuk periode 6 bulan dan telah dicatat sebagai Sewa Gedung Dibayar Dimuka. Jurnal penyesuaian yang perlu dicatat pada tanggal 31 Desember 2017 adalah:",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label:
                "<p>\r\n\tDr. Beban Sewa Gedung&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rp 36.000.000</p>\r\n<p>\r\n\tCr. Sewa Gedung Dibayar Dimuka&nbsp; &nbsp; Rp 36.000.000</p>\r\n",
            },
            {
              choice: "B",
              label:
                "<p>\r\n\tDr. Sewa Gedung Dibayar Dimuka&nbsp; &nbsp;Rp 6.000.000</p>\r\n<p>\r\n\tCr. Beban Sewa Gedung&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rp 6.000.000</p>\r\n",
            },
            {
              choice: "C",
              label:
                "<p>\r\n\tDr. Beban Sewa Gedung&nbsp; &nbsp;Rp 6.000.000</p>\r\n<p>\r\n\tCr. Kas&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rp 6.000.000</p>\r\n",
            },
            {
              choice: "D",
              label:
                "<p>\r\n\tDr. Beban Sewa Gedung&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rp 6.000.000</p>\r\n<p>\r\n\tCr. Sewa Gedung Dibayar Dimuka&nbsp; Rp 6.000.000</p>\r\n",
            },
            {
              choice: "E",
              label: "Dr. Sewa Gedung Dibayar Dimuka Rp 36.000.000",
            },
          ],
        },
        {
          question:
            '<p style="margin-left:14.2pt;">\r\n\tInformasi berikut ini digunakan dalam menyusun rekonsiliasi bank PT ABC untuk bulan Desember 2016.</p>\r\n<table border="0" cellpadding="0" cellspacing="0" style="width:437px;" width="437">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td nowrap="nowrap" style="width:302px;height:20px;">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tSaldo menurut bank</p>\r\n\t\t\t</td>\r\n\t\t\t<td nowrap="nowrap" style="width:135px;height:20px;">\r\n\t\t\t\t<p align="right">\r\n\t\t\t\t\tRp 200.000.000</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td nowrap="nowrap" style="width:302px;height:20px;">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tDeposit dalam perjalanan (<em>deposit in transit</em>)</p>\r\n\t\t\t</td>\r\n\t\t\t<td nowrap="nowrap" style="width:135px;height:20px;">\r\n\t\t\t\t<p align="right">\r\n\t\t\t\t\t15.130.000</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td nowrap="nowrap" style="width:302px;height:20px;">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tCek kosong (<em>NSF check</em>)</p>\r\n\t\t\t</td>\r\n\t\t\t<td nowrap="nowrap" style="width:135px;height:20px;">\r\n\t\t\t\t<p align="right">\r\n\t\t\t\t\t5.000.000</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td nowrap="nowrap" style="width:302px;height:20px;">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tCek yang masih beredar <em>(outstanding checks</em>)</p>\r\n\t\t\t</td>\r\n\t\t\t<td nowrap="nowrap" style="width:135px;height:20px;">\r\n\t\t\t\t<p align="right">\r\n\t\t\t\t\t23.890.000</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td nowrap="nowrap" style="width:302px;height:20px;">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tBiaya administrasi bank</p>\r\n\t\t\t</td>\r\n\t\t\t<td nowrap="nowrap" style="width:135px;height:20px;">\r\n\t\t\t\t<p align="right">\r\n\t\t\t\t\t500.000</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p style="margin-left:14.2pt;">\r\n\tBerdasarkan data di atas, saldo kas setelah rekonsiliasi adalah sebesar &hellip;</p>\r\n',
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "<p>\r\n\tRp 215.130.000</p>\r\n",
            },
            {
              choice: "B",
              label: "<p>\r\n\tRp 194.500.000</p>\r\n",
            },
            {
              choice: "C",
              label: "<p>\r\n\tRp 210.130.000</p>\r\n",
            },
            {
              choice: "D",
              label: "<p>\r\n\tRp 185.740.000</p>\r\n",
            },
            {
              choice: "E",
              label: "<p>\r\n\tRp 191.240.000</p>\r\n",
            },
          ],
        },
        {
          question:
            "<p>\r\n\tAkun-akun di bawah ini disajikan di Laporan Posisi Keuangan, <strong>kecuali</strong>:</p>\r\n",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "Aset Tetap",
            },
            {
              choice: "B",
              label: "Beban Dibayar Dimuka",
            },
            {
              choice: "C",
              label: "Utang Listrik",
            },
            {
              choice: "D",
              label: "Pendapatan Dividen",
            },
            {
              choice: "E",
              label: "Akumulasi Penyusutan",
            },
          ],
        },
        {
          question:
            "<p>PT. ABRA menerima wesel tagih (<i>notes receivable</i>) pada tanggal 1 Januari 2016 senilai Rp 27.000.000 dan memiliki tingkat bunga sebesar 11.5% dari pelanggan atas penjualan barang dagang. Wesel tersebut akan dilunasi pada tanggal 31 Maret 2016. Nilai jatuh tempo wesel tagih yang diterima PT. ABRA pada tanggal 31 Maret 2016 adalah</p>",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "<p>\r\n\tRp 27.776.250</p>\r\n",
            },
            {
              choice: "B",
              label: "<p>\r\n\tRp 776.250</p>\r\n",
            },
            {
              choice: "C",
              label: "<p>\r\n\tRp 27.000.000</p>\r\n",
            },
            {
              choice: "D",
              label: "<p>\r\n\tRp 30.105.000</p>\r\n",
            },
            {
              choice: "E",
              label: "<p>\r\n\tRp 3.105.000</p>\r\n",
            },
          ],
        },
        {
          question:
            '<p style="margin-left:19px; text-align:justify">\r\n\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Transaksi Kas PT DART pada bulan Juli 2017 adalah sebagai berikut:</span></span></span></p>\r\n<table cellspacing="0" class="MsoTableGrid" style="border-collapse:collapse; border:none; margin-left:28px">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style="vertical-align:top; width:49px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Juli</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:65px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">1</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:440px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Membentuk kas kecil dengan membuat cek Rp 4.000.000 dan mencairkan cek tersebut di hari yang sama.</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="vertical-align:top; width:49px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t&nbsp;</p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:65px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">31</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:440px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Saat mengecek box kas kecil ditemukan bukti pembayaran untuk biaya pengangkutan barang sebesar Rp 350.0000, biaya materai sebesar Rp 750.000, biaya hiburan sebesar Rp 1.170.000, biaya material pos sebesar Rp 785.300, biaya pengiriman sebesar Rp 630.400</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="vertical-align:top; width:49px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t&nbsp;</p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:65px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">31</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="vertical-align:top; width:440px">\r\n\t\t\t\t<p style="text-align:justify">\r\n\t\t\t\t\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Dana kas kecil diisi kembali</span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p style="margin-left:19px; text-align:justify">\r\n\t<span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">PT DART menggunakan metode</span><span style="font-family:&quot;Times New Roman&quot;,serif"> dana tetap</span> <span style="font-family:&quot;Times New Roman&quot;,serif">(</span><em><span style="font-family:&quot;Times New Roman&quot;,serif">imprest fund</span></em><span style="font-family:&quot;Times New Roman&quot;,serif">)</span><span style="font-family:&quot;Times New Roman&quot;,serif"> untuk penggunaan kas kecilnya. Besarnya dana kas kecil yang harus diisi kembali pada tanggal 31 Juli 2017 jika sisa uang yang ada seperti yang seharusnya adalah</span><span style="font-family:&quot;Times New Roman&quot;,serif">:</span></span></span></p>\r\n',
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "<p>\r\n\tRp 3.495.000</p>\r\n",
            },
            {
              choice: "B",
              label: "<p>\r\n\tRp 3.735.700</p>\r\n",
            },
            {
              choice: "C",
              label: "<p>\r\n\tRp 3.685.700</p>\r\n",
            },
            {
              choice: "D",
              label: "<p>\r\n\tRp 3.895.400</p>\r\n",
            },
            {
              choice: "E",
              label: "<p>\r\n\tRp 3.900.700</p>\r\n",
            },
          ],
        },
        {
          question:
            "Pada tanggal 28 Maret, PT Sejahtera menerima tagihan telepon untuk bulan Maret yang akan dibayar pada tanggal 5 April. Jurnal yang tepat yang harus dibuat oleh PT Sejahtera adalah:",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label:
                "<p>\r\n\tPada tanggal 28 Maret, mencatat beban telepon di debet dan utang telepon di kredit</p>\r\n",
            },
            {
              choice: "B",
              label:
                "Pada tanggal 5 April, mencatat beban telepon di debet dan kas di kredit",
            },
            {
              choice: "C",
              label:
                "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan kas di kredit.",
            },
            {
              choice: "D",
              label:
                "Pada tanggal 28 Maret, mencatat beban dibayar dimuka di debet dan beban telepon di kredit.",
            },
            {
              choice: "E",
              label:
                "<p>\r\n\tPada tanggal 5 April, mencatat beban dibayar dimuka di debet dan utang telepon di kredit.</p>\r\n",
            },
          ],
        },
        {
          question:
            "Pada periode kenaikan harga (inflasi), metode asumsi arus biaya persediaan yang mengakibatkan harga pokok penjualan terendah adalah:",
          type: "accounting-junior",
          answer_choices: [
            {
              choice: "A",
              label: "Rata-rata",
            },
            {
              choice: "B",
              label: "Identifikasi khusus",
            },
            {
              choice: "C",
              label: "FIFO",
            },
            {
              choice: "D",
              label: "Perpetual",
            },
            {
              choice: "E",
              label: "Periodik",
            },
          ],
        },
      ],
    },
  },
  disc: {
    disc: {
      questions: [
        {
          no: 1,
          type: "disc",
          statements: [
            {
              soal: "Mudah bergaul, menyenangkan",
              most: "S",
              least: "S",
            },
            {
              soal: "Suka berpetualangan, pengambil resiko",
              most: "B",
              least: "D",
            },
            {
              soal: "Penuh toleransi, menghormati orang lain",
              most: "C",
              least: "C",
            },
            {
              soal: "Mudah percaya kepada orang lain",
              most: "I",
              least: "I",
            },
          ],
        },
        {
          no: 2,
          type: "disc",
          statements: [
            {
              soal: "Mari lakukan bersama-sama",
              most: "B",
              least: "S",
            },
            {
              soal: "Lakukan dengan benar, ketepatan adalah penting",
              most: "C",
              least: "C",
            },
            {
              soal: "Buatlah sesuatu menjadi menyenangkan",
              most: "B",
              least: "I",
            },
            {
              soal: "Hasil adalah segalanya",
              most: "D",
              least: "D",
            },
          ],
        },
        {
          no: 3,
          type: "disc",
          statements: [
            {
              soal: "Bergaul, berkumpul dengan kelompok",
              most: "I",
              least: "B",
            },
            {
              soal: "Prestasi, penghargaan",
              most: "D",
              least: "D",
            },
            {
              soal: "Keselamatan, keamanan",
              most: "S",
              least: "S",
            },
            {
              soal: "Pendidikan, budaya",
              most: "B",
              least: "C",
            },
          ],
        },
        {
          no: 4,
          type: "disc",
          statements: [
            {
              soal: "Pusat perhatian, mudah bersosialisasi",
              most: "B",
              least: "I",
            },
            {
              soal: "Berbicara lembut, pendiam/penyendiri",
              most: "C",
              least: "B",
            },
            {
              soal: "Pendamai, pembawa keharmonisan",
              most: "S",
              least: "S",
            },
            {
              soal: "Optimis, berpikir positif, memiliki visi/tujuan",
              most: "D",
              least: "D",
            },
          ],
        },
      ],
    },
  },
};

export default questionData;
