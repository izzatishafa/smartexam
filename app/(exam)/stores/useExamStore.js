import { create } from "zustand";
import questionData from "../dummy/questionData";
import { fetchHexacoQuestions } from "../services/examService";
import { Modal } from "antd";

const useExamStore = create((set, get) => ({
  // Menambahkan state yang dibutuhkan layout
  collapsed: false,
  isModalOpen: false,
  isLoading: false,
  setCollapsed: (value) => set({ collapsed: value }),
  answers: {},
  currentQuestion: 1,
  currentExamType: "",
  currentSubtest: "",
  questions: [],
  error: null,
  timeRemaining: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  timerId: null,
  endStatus: "",
  isUsingAPI: false, // Flag untuk menandai apakah menggunakan API atau dummy data

  // Actions
  setAnswer: (questionId, answer) => {
    const { isUsingAPI, currentQuestion } = get();

    // Jika menggunakan API, gunakan kombinasi currentQuestion sebagai kunci
    // Karena mungkin API tidak memiliki ID unik untuk tiap pertanyaan
    const uniqueId = isUsingAPI ? `api_${currentQuestion}` : questionId;
    console.log("Unique ID:", uniqueId);

    set((state) => ({
      answers: {
        ...state.answers,
        [uniqueId]: answer,
      },
    }));
  },

  // Method untuk memulai timer
  startTimer: () => {
    const timerId = setInterval(() => {
      const store = get();
      const { currentExamType } = get();
      const { hours, minutes, seconds } = store.timeRemaining;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        // Waktu habis
        clearInterval(store.timerId);
        // set({ endStatus: "time-up" }); // Set status jadi time-up

        // Arahkan ke halaman end
        if (typeof window !== "undefined") {
          if (currentExamType === "gti") {
            window.location.href = "/exam/end/time-up-subtest";
          } else {
            window.location.href = "/exam/end/time-up"; // Gunakan direct redirect
          }
        }

        return;
      }

      if (seconds > 0) {
        set({
          timeRemaining: {
            hours,
            minutes,
            seconds: seconds - 1,
          },
        });
      } else if (minutes > 0) {
        set({
          timeRemaining: {
            hours,
            minutes: minutes - 1,
            seconds: 59,
          },
        });
      } else if (hours > 0) {
        set({
          timeRemaining: {
            hours: hours - 1,
            minutes: 59,
            seconds: 59,
          },
        });
      }
    }, 1000);

    set({ timerId });
  },

  // Method untuk menghentikan timer
  stopTimer: () => {
    const { timerId } = get();
    if (timerId) {
      clearInterval(timerId);
      set({ timerId: null });
    }
  },

  // Method untuk set waktu awal
  setInitialTime: (timeLimit) => {
    set({
      timeRemaining: {
        hours: timeLimit.hours || 0,
        minutes: timeLimit.minutes || 0,
        seconds: timeLimit.seconds || 0,
      },
    });
  },

  // Khusus untuk HEXACO
  getHexacoChoices: () => {
    return [
      { key: "1", label: "Sangat Tidak Setuju" },
      { key: "2", label: "Tidak Setuju" },
      { key: "3", label: "Netral" },
      { key: "4", label: "Setuju" },
      { key: "5", label: "Sangat Setuju" },
    ];
  },

  // Khusus untuk CTI
  getCTIChoices: () => {
    return [
      { key: "1", label: "Pasti Benar" },
      { key: "2", label: "Hampir/Banyak Benarnya" },
      { key: "3", label: "Ragu-ragu" },
      { key: "4", label: "Hampir/Banyak Salahnya" },
      { key: "5", label: "Pasti Salah" },
    ];
  },

  // Action untuk inisialisasi data dari API (Hexaco)
  initializeExamAPI: async (examType, subtestCode) => {
    try {
      set({
        isLoading: true,
        isUsingAPI: true,
      });

      const questions = await fetchHexacoQuestions();
      console.log("Questions from API:", questions);

      set({
        questions,
        isLoading: false,
        currentExamType: examType,
        currentSubtest: subtestCode,
        answers: {}, // Reset jawaban
        currentQuestion: 1,
      });
    } catch (error) {
      console.error("Error fetching API data:", error);
      // Fallback ke dummy data jika API gagal
      const dummyQuestions = get().getDummyQuestions(examType, subtestCode);

      set({
        questions: dummyQuestions,
        isLoading: false,
        currentExamType: examType,
        currentSubtest: subtestCode,
        answers: {},
        currentQuestion: 1,
        isUsingAPI: false,
        error: `API Error: ${error.message}. Fallback to dummy data.`,
      });
    }
  },

  // Mendapatkan dummy questions untuk fallback
  getDummyQuestions: (examType, subtestCode) => {
    const examData = questionData[examType]?.subtests?.find((subtest) => subtest.code === subtestCode);
    return examData?.questions || [];
  },

  // Getter untuk pertanyaan saat ini (API)
  getCurrentQuestionAPI: () => {
    const { currentQuestion, questions, isUsingAPI } = get();

    if (isUsingAPI) {
      return questions[currentQuestion - 1] || null;
    } else {
      return get().getCurrentQuestion();
    }
  },

  // Modifikasi initializeExam untuk memulai timer (dummy data)
  initializeExam: async (examType, subtestCode) => {
    set({
      isLoading: true,
      isUsingAPI: false,
    });

    const examData = questionData[examType]?.subtests?.find((subtest) => subtest.code === subtestCode);

    // Stop timer yang sedang berjalan (jika ada)
    get().stopTimer();

    // Set state awal
    set({
      currentExamType: examType,
      currentSubtest: subtestCode,
      answers: {},
      currentQuestion: 1,
      endStatus: "",
      questions: examData?.questions || [], // Set questions untuk konsistensi dengan API
    });

    // Set dan mulai timer baru
    if (examData?.timeLimit) {
      get().setInitialTime(examData.timeLimit);
      get().startTimer();
    }

    set({ isLoading: false });
  },

  // Mendapatkan pertanyaan dari dummy data
  getCurrentQuestionData: () => {
    const { currentExamType, currentSubtest, isUsingAPI, questions } = get();

    // Jika menggunakan API, gunakan state questions
    if (isUsingAPI) {
      return questions || [];
    }

    // Jika menggunakan dummy data
    const examData = questionData[currentExamType];
    if (!examData || !examData.subtests) return [];
    const subtest = examData.subtests.find((subtest) => subtest.code === currentSubtest);
    return subtest?.questions || [];
  },

  // Fungsi reset untuk perpindahan antar subtest
  resetSubtestState: () => {
    set((state) => ({
      answers: {},
      currentQuestion: 1,
      timeRemaining: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      // Tetap pertahankan currentExamType karena masih dalam GTI
      currentSubtest: "",
    }));
  },

  // Fungsi reset total untuk akhir test
  resetFullState: () => {
    const store = get();
    store.stopTimer();
    set({
      answers: {},
      currentQuestion: 1,
      currentExamType: "",
      currentSubtest: "",
      timeRemaining: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      endStatus: "",
      timerId: null,
      questions: [],
      isUsingAPI: false,
    });
  },

  goToQuestion: (questionId) => {
    set({ currentQuestion: questionId });
  },

  // Tambahkan getter untuk subtestInfo
  getCurrentSubtestInfo: () => {
    const { currentExamType, currentSubtest, isUsingAPI } = get();

    // Jika menggunakan API dan currentSubtest adalah "hexaco"
    if (isUsingAPI && currentSubtest === "hexaco") {
      // Return custom object untuk Hexaco yang diambil dari API
      return {
        code: "hexaco",
        title: "HEXACO Personality Test",
        timeLimit: { hours: 0, minutes: 30, seconds: 0 },
        // Tambahkan properti lain yang diperlukan
      };
    }

    // Jika menggunakan dummy data
    const examData = questionData[currentExamType];
    if (!examData?.subtests) return null;
    return examData.subtests.find((subtest) => subtest.code === currentSubtest) || null;
  },

  // Tambahkan getter untuk total subtests
  getTotalSubtests: () => {
    const { currentExamType } = get();
    return questionData[currentExamType]?.subtests?.length || 0;
  },

  // Mendapatkan pertanyaan saat ini (unified untuk API dan dummy)
  getCurrentQuestion: () => {
    const { currentQuestion, isUsingAPI, questions } = get();

    if (isUsingAPI) {
      return questions[currentQuestion - 1] || null;
    } else {
      const questions = get().getCurrentQuestionData();
      if (!questions.length) return null;
      return questions.find((q) => q.id === currentQuestion) || null;
    }
  },

  goToNext: () => {
    const { isUsingAPI, questions } = get();

    if (isUsingAPI) {
      set((state) => ({
        currentQuestion: Math.min(state.currentQuestion + 1, questions.length),
      }));
    } else {
      const questions = get().getCurrentQuestionData();
      set((state) => ({
        currentQuestion: Math.min(state.currentQuestion + 1, questions.length),
      }));
    }
  },

  goToPrevious: () => {
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 1),
    }));
  },

  // Perbaikan untuk getProgress - memeriksa jawaban berdasarkan ID yang digunakan
  getProgress: () => {
    const { currentSubtest, answers, questions, isUsingAPI } = get();

    if (isUsingAPI || currentSubtest === "hexaco") {
      const totalQuestions = questions?.length || 0;
      if (!totalQuestions) return 0;

      // Hitung jumlah pertanyaan dari API yang sudah dijawab
      let answered = 0;
      for (let i = 1; i <= totalQuestions; i++) {
        if (answers[`api_${i}`] !== undefined) {
          answered++;
        }
      }

      return Math.round((answered / totalQuestions) * 100);
    }

    const questionData = get().getCurrentQuestionData();
    if (!questionData.length) return 0;
    const answered = Object.keys(answers || {}).length;
    return Math.round((answered / questionData.length) * 100);
  },

  // Method untuk header
  isTutorialPage: (pathname) => {
    return pathname?.includes("/tutorial"); // Gunakan optional chaining untuk menghindari error
  },

  // Fungsi untuk footer (perbaikan untuk menghitung jawaban)
  getAnsweredCount: () => {
    const { answers, isUsingAPI, questions } = get();

    if (isUsingAPI) {
      // Hitung jawaban dari API berdasarkan kunci api_X
      let count = 0;
      const totalQuestions = questions?.length || 0;

      for (let i = 1; i <= totalQuestions; i++) {
        if (answers[`api_${i}`] !== undefined) {
          count++;
        }
      }

      return count;
    }

    return Object.keys(answers).length;
  },

  getNotAnsweredCount: () => {
    const { isUsingAPI, questions, currentSubtest } = get();

    let totalQuestions = 0;
    if (isUsingAPI || currentSubtest === "hexaco") {
      totalQuestions = questions?.length || 0;
    } else {
      totalQuestions = get().getCurrentQuestionData().length;
    }

    const answeredCount = get().getAnsweredCount();
    return totalQuestions - answeredCount;
  },

  // Mendapatkan jawaban untuk pertanyaan saat ini
  getCurrentAnswer: () => {
    const { answers, currentQuestion, isUsingAPI } = get();

    if (isUsingAPI) {
      return answers[`api_${currentQuestion}`];
    }

    return answers[currentQuestion];
  },

  // Menambahkan fungsi untuk mendapatkan rute tutorial berikutnya
  getNextGTITutorialRoute: (currentSubtest) => {
    const gtiSubtestOrder = {
      gti_pci: "subtest2",
      gti_penalaran: "subtest3",
      gti_jh: "subtest4",
      gti_kka: "subtest5",
      gti_orientasi: "end",
    };

    const nextSubtest = gtiSubtestOrder[currentSubtest];
    if (nextSubtest === "end") return "/";
    return `/exam/gti/${nextSubtest}/tutorial-intro`;
  },

  getSubtestMap: (currentSubtest) => {
    const gtiSubtestOrdermap = {
      gti_pci: "gti_penalaran",
      gti_penalaran: "gti_jh",
      gti_jh: "gti_kka",
      gti_kka: "gti_orientasi",
      gti_orientasi: "end",
    };
    const nextSubtestMap = gtiSubtestOrdermap[currentSubtest];
    if (nextSubtestMap === "end") return "/";
    return `/exam/gti/${nextSubtestMap}/tutorial-intro`;
  },

  // Handle submit dengan parameter onNavigate untuk navigasi
  handleSubmit: (onNavigate) => {
    const { currentExamType, currentSubtest, isUsingAPI } = get();

    let currentQuestionData;
    let totalQuestions;

    if (isUsingAPI || currentSubtest === "hexaco") {
      currentQuestionData = get().questions;
      totalQuestions = currentQuestionData?.length || 0;
    } else {
      currentQuestionData = get().getCurrentQuestionData();
      totalQuestions = currentQuestionData.length;
    }

    // Periksa apakah semua pertanyaan sudah dijawab
    const answeredQuestions = get().getAnsweredCount();

    if (answeredQuestions < totalQuestions) {
      Modal.warning({
        title: "Harap isi semua jawaban!",
        centered: true,
      });
      return;
    }

    Modal.confirm({
      title: "Apakah Anda yakin?",
      content: "Jawaban Anda akan dikirim dan tidak dapat diubah.",
      centered: true,
      onOk() {
        if (currentExamType === "gti") {
          const nextRoute = get().getNextGTITutorialRoute(currentSubtest);
          const nextSubtestGti = get().getSubtestMap(currentSubtest);

          if (nextRoute === "/") {
            // Jika ini adalah subtest terakhir (orientasi)
            get().resetFullState();
            onNavigate("/");
          } else {
            // Tentukan metode inisialisasi berdasarkan status API
            if (isUsingAPI) {
              get().initializeExamAPI(currentExamType, nextSubtestGti.split("/")[3]);
            } else {
              get().initializeExam(currentExamType, nextSubtestGti.split("/")[3]);
            }
            onNavigate(nextRoute);
          }
        } else {
          // Handling untuk jenis ujian lain tetap sama
          get().resetFullState();
          onNavigate("/");
        }
      },
    });
  },
}));

export default useExamStore;
