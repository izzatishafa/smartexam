import { create } from "zustand";
import questionData from "../dummy/questionData";
import { Modal } from "antd";

const useExamStore = create((set, get) => ({
  // Menambahkan state yang dibutuhkan layout
  collapsed: false,
  isModalOpen: false,
  isLoading: false,
  // Menambahkan actions untuk layout
  setCollapsed: (value) => set({ collapsed: value }),

  answers: {},
  currentQuestion: 1,
  currentExamType: "",
  currentSubtest: "",
  timeRemaining: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  timerId: null,
  endStatus: "",

  // Actions
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),

  // Method untuk memulai timer
  startTimer: () => {
    const timerId = setInterval(() => {
      const store = get();
      const { hours, minutes, seconds } = store.timeRemaining;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        // Waktu habis
        clearInterval(store.timerId);
        set({ endStatus: "time-up" }); // Set status jadi time-up
        // Arahkan ke halaman end
        if (typeof window !== "undefined") {
          window.location.href = "/exam/end"; // Gunakan direct redirect
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

  // Modifikasi initializeExam untuk memulai timer
  initializeExam: async (examType, subtestCode) => {
    set({ isLoading: true });
    const examData = questionData[examType].subtests.find((subtest) => subtest.code === subtestCode);

    // Stop timer yang sedang berjalan (jika ada)
    get().stopTimer();

    // Set state awal
    set({
      currentExamType: examType,
      currentSubtest: subtestCode,
      answers: {},
      currentQuestion: 1,
      endStatus: "",
    });

    // Set dan mulai timer baru
    if (examData?.timeLimit) {
      get().setInitialTime(examData.timeLimit);
      get().startTimer();
    }

    set({ isLoading: false });
  },

  getCurrentQuestionData: () => {
    const { currentExamType, currentSubtest } = get();
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
  // Modifikasi resetFullState
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
    });
  },

  goToQuestion: (questionId) => {
    set({ currentQuestion: questionId });
  },

  // Tambahkan getter untuk subtestInfo
  getCurrentSubtestInfo: () => {
    const { currentExamType, currentSubtest } = get();
    const examData = questionData[currentExamType];
    if (!examData?.subtests) return null;
    return examData.subtests.find((subtest) => subtest.code === currentSubtest) || null;
  },

  // Tambahkan getter untuk total subtests
  getTotalSubtests: () => {},

  getCurrentQuestion: () => {
    const { currentQuestion } = get();
    const questions = get().getCurrentQuestionData();
    if (!questions.length) return null;
    return questions.find((q) => q.id === currentQuestion) || null;
  },

  goToNext: () => {
    const questions = get().getCurrentQuestionData();
    set((state) => ({
      currentQuestion: Math.min(state.currentQuestion + 1, questions.length),
    }));
  },

  goToPrevious: () => {
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 1),
    }));
  },

  getProgress: () => {
    const answers = get().answers || {};
    const questionData = get().getCurrentQuestionData();
    if (!questionData.length) return 0;
    const answered = Object.keys(answers).length;
    return Math.round((answered / questionData.length) * 100);
  },

  // confirmSubmit: async () => {
  //   set({ isModalOpen: false });
  //   const subtestTotal = get().getTotalSubtests();
  //   const currentSubtest = get().currentSubtest;

  //   if (currentSubtest < subtestTotal) {
  //     set({
  //       answers: {},
  //       currentQuestion: 1,
  //       currentSubtest: currentSubtest + 1,
  //       isNavigate: true,
  //     });
  //   } else {
  //     set({ endStatus: "all-done" });
  //     // Handle routing harus dilakukan di component
  //   }
  // },

  // Method untuk header
  isTutorialPage: (pathname) => {
    return pathname?.includes("/tutorial"); // Gunakan optional chaining untuk menghindari error
  },

  // Fungsi untuk footer
  getAnsweredCount: () => {
    return Object.keys(get().answers).length;
  },

  getNotAnsweredCount: () => {
    const totalQuestions = get().getCurrentQuestionData().length;
    const answeredCount = Object.keys(get().answers).length;
    return totalQuestions - answeredCount;
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
  // Modifikasi handleSubmit untuk menangani flow GTI
  handleSubmit: (onNavigate) => {
    const currentQuestionData = get().getCurrentQuestionData();
    const currentExamType = get().currentExamType;
    const currentSubtest = get().currentSubtest;
    const answers = get().answers;
    const totalQuestions = currentQuestionData.length;
    const answeredQuestions = Object.keys(answers).length;

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
            get().initializeExam(currentExamType, nextSubtestGti.split("/")[3]);
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

  // Tambahkan actions lainnya sesuai kebutuhan
}));

export default useExamStore;
