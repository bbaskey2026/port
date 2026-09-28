import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "tanstack-language";
const supportedLanguages = ["en", "bn", "or"];

const translations = {
  en: {
    appTitle: "My App",
    language: "Language",
    languages: {
      en: "English",
      bn: "বাংলা",
      or: "ଓଡ଼ିଆ",
    },
    upload: {
      heading: "Upload a file",
      chooseFile: "Choose a file to upload",
      ready: "{{fileName}} is ready to upload",
      uploading: "Uploading...",
      complete: "Upload complete",
      cancelled: "Upload cancelled",
      failed: "Upload failed. Check the server and try again.",
      upload: "Upload",
      cancel: "Cancel",
      timeRemaining: "Estimated time remaining: {{seconds}} seconds",
    },
    users: {
      byId: "User by ID",
      userId: "User ID",
      load: "Load user",
      loadingUser: "Loading user...",
      notFound: "No user found with ID {{id}}.",
      heading: "Users",
      loading: "Loading users...",
      error: "Error: {{message}}",
    },
    timer: {
      heading: "Timer",
      elapsed: "Running for {{seconds}} seconds",
      cleanup: "Hide this component to stop the timer.",
      show: "Show timer",
      hide: "Hide timer",
    },
  },
  bn: {
    appTitle: "আমার অ্যাপ",
    language: "ভাষা",
    languages: {
      en: "English",
      bn: "বাংলা",
    },
    upload: {
      heading: "ফাইল আপলোড করুন",
      chooseFile: "আপলোড করার জন্য একটি ফাইল বেছে নিন",
      ready: "{{fileName}} আপলোডের জন্য প্রস্তুত",
      uploading: "আপলোড হচ্ছে...",
      complete: "আপলোড সম্পন্ন হয়েছে",
      cancelled: "আপলোড বাতিল করা হয়েছে",
      failed: "আপলোড ব্যর্থ হয়েছে। সার্ভার পরীক্ষা করে আবার চেষ্টা করুন।",
      upload: "আপলোড",
      cancel: "বাতিল",
      timeRemaining: "আনুমানিক বাকি সময়: {{seconds}} সেকেন্ড",
    },
    users: {
      byId: "আইডি অনুযায়ী ব্যবহারকারী",
      userId: "ব্যবহারকারীর আইডি",
      load: "ব্যবহারকারী লোড করুন",
      loadingUser: "ব্যবহারকারী লোড হচ্ছে...",
      notFound: "{{id}} আইডির কোনো ব্যবহারকারী পাওয়া যায়নি।",
      heading: "ব্যবহারকারীরা",
      loading: "ব্যবহারকারীদের তালিকা লোড হচ্ছে...",
      error: "ত্রুটি: {{message}}",
    },
    timer: {
      heading: "টাইমার",
      elapsed: "{{seconds}} সেকেন্ড ধরে চলছে",
      cleanup: "টাইমার বন্ধ করতে এই কম্পোনেন্টটি লুকান।",
      show: "টাইমার দেখান",
      hide: "টাইমার লুকান",
    },
  },
  or: {
    appTitle: "ମୋର ଆପ୍",
    language: "ଭାଷା",
    languages: {
      en: "English",
      bn: "বাংলা",
      or: "ଓଡ଼ିଆ",
    },
    upload: {
      heading: "ଫାଇଲ୍ ଅପଲୋଡ୍ କରନ୍ତୁ",
      chooseFile: "ଅପଲୋଡ୍ କରିବା ପାଇଁ ଏକ ଫାଇଲ୍ ବାଛନ୍ତୁ",
      ready: "{{fileName}} ଅପଲୋଡ୍ ପାଇଁ ପ୍ରସ୍ତୁତ",
      uploading: "ଅପଲୋଡ୍ ହେଉଛି...",
      complete: "ଅପଲୋଡ୍ ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଛି",
      cancelled: "ଅପଲୋଡ୍ ବାତିଲ୍ କରାଯାଇଛି",
      failed: "ଅପଲୋଡ୍ ବିଫଳ ହୋଇଛି। ସର୍ଭର୍ ଯାଞ୍ଚ କରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
      upload: "ଅପଲୋଡ୍",
      cancel: "ବାତିଲ୍",
      timeRemaining: "ଆନୁମାନିକ ବାକି ସମୟ: {{seconds}} ସେକେଣ୍ଡ୍",
    },
    users: {
      byId: "ଆଇଡି ଅନୁଯାୟୀ ବ୍ୟବହାରକାରୀ",
      userId: "ବ୍ୟବହାରକାରୀ ଆଇଡି",
      load: "ବ୍ୟବହାରକାରୀ ଲୋଡ୍ କରନ୍ତୁ",
      loadingUser: "ବ୍ୟବହାରକାରୀ ଲୋଡ୍ ହେଉଛି...",
      notFound: "{{id}} ଆଇଡି ସହିତ କୌଣସି ବ୍ୟବହାରକାରୀ ମିଳିଲା ନାହିଁ।",
      heading: "ବ୍ୟବହାରକାରୀମାନେ",
      loading: "ବ୍ୟବହାରକାରୀମାନଙ୍କ ତାଲିକା ଲୋଡ୍ ହେଉଛି...",
      error: "ତ୍ରୁଟି: {{message}}",
    },
    timer: {
      heading: "ଟାଇମର୍",
      elapsed: "{{seconds}} ସେକେଣ୍ଡ୍ ଧରି ଚାଲୁଛି",
      cleanup: "ଟାଇମର୍ ବନ୍ଦ କରିବା ପାଇଁ ଏହି କମ୍ପୋନେଣ୍ଟକୁ ଲୁଚାନ୍ତୁ।",
      show: "ଟାଇମର୍ ଦେଖାନ୍ତୁ",
      hide: "ଟାଇମର୍ ଲୁଚାନ୍ତୁ",
    },
  },
};

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("bn")) {
    return "bn";
  }
  if (browserLanguage.startsWith("or")) {
    return "or";
  }

  return "en";
}

function getTranslation(locale, key, variables = {}) {
  const value = key.split(".").reduce((result, part) => result?.[part], translations[locale]);
  if (typeof value !== "string") {
    return key;
  }

  return value.replace(/{{(\w+)}}/g, (_, variable) => String(variables[variable] ?? ""));
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: (key, variables) => getTranslation(language, key, variables),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
}