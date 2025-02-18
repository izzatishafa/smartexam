import { create } from "zustand";
import questionData from "../dummy/questionData";
import { useRouter } from "next/navigation";
import { Modal } from "antd";


const useExamStore = create((set, get) => ({
  // Menambahkan state yang dibutuhkan layout
  collapsed: false,
  isModalOpen: false,
  isLoading: true,
  // Menambahkan actions untuk layout
  setCollapsed: (value) => set({ collapsed: value }),

  // State
  isLoading: true,
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

  // Actions
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),

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

  initializeExam: async (examType, subtestCode) => {
    const examData = questionData[examType].subtests.find((subtest) => subtest.code === subtestCode);
    console.log("Exam Data Loaded:", examData);
    set({
      currentExamType: examType,
      currentSubtest: subtestCode,
      answers: {},
      currentQuestion: 1,
      timeRemaining: examData.timeLimit,
      isLoading: false,
    });
  },

  getCurrentQuestionData: () => {
    const { currentExamType, currentSubtest } = get();
    const examData = questionData[currentExamType];
    const subtest = examData.subtests.find((subtest) => subtest.code === currentSubtest);
    return subtest ? subtest.questions : [];
  },

  //Reset State
  resetState: () => {
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
    });
  },

  goToQuestion: (questionId) => {
    set({ currentQuestion: questionId });
  },

  // Tambahkan getter untuk subtestInfo
  getCurrentSubtestInfo: () => {
    const { currentExamType, currentSubtest } = get();
    const examData = questionData[currentExamType];
    return examData.subtests.find((subtest) => subtest.code === currentSubtest);
  },

  // Tambahkan getter untuk total subtests
  getTotalSubtests: () => {},

  getCurrentQuestion: () => {
    const { currentQuestion } = get();
    const questions = get().getCurrentQuestionData();
    return questions.find((q) => q.id === currentQuestion);
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
    const answers = get().answers;
    const questionData = get().getCurrentQuestionData();
    const answered = Object.keys(answers).length;
    return Math.round((answered / questionData.length) * 100);
  },

  confirmSubmit: async () => {
    set({ isModalOpen: false });
    const subtestTotal = get().getTotalSubtests();
    const currentSubtest = get().currentSubtest;

    if (currentSubtest < subtestTotal) {
      set({
        answers: {},
        currentQuestion: 1,
        currentSubtest: currentSubtest + 1,
        isNavigate: true,
      });
    } else {
      set({ endStatus: "all-done" });
      // Handle routing harus dilakukan di component
    }
  },

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

  // Handle submit dengan parameter onNavigate untuk navigasi
  handleSubmit: (onNavigate) => {
    const currentQuestionData = get().getCurrentQuestionData();
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

    // Tampilkan modal konfirmasi
    Modal.confirm({
      title: "Apakah Anda yakin?",
      content: "Jawaban Anda akan dikirim dan tidak dapat diubah.",
      centered: true,
      onOk() {
        if (onNavigate) {
          onNavigate("/"); // Gunakan fungsi navigasi yang diterima dari komponen
        }
      },
    });
  },

  // Tambahkan actions lainnya sesuai kebutuhan
}));

export default useExamStore;
