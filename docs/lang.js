const LANGS = {
  zh: {
    title: "SlimeNRF 固件生成器",
    board: "開發板",
    iface: "通訊介面",
    clk: "外部時鐘",
    sleep: "睡眠模式",
    sw0: "開關按鍵 (SW0)",
    mag: "磁力計",
    filename: "輸出檔名",
    build: "生成固件",
    building: "🚀 正在觸發構建中…",
    success: "✅ 構建已啟動，請稍候查看 Release！",
    failed: "❌ 觸發失敗",
    selectBoard: "請先選擇開發板",
    loginStart: "🔐 正在登入 GitHub…",
    loginSuccess: "✅ 登入成功，正在觸發構建…",
    loginFail: "❌ 登入失敗："
  },
  en: {
    title: "SlimeNRF Firmware Builder",
    board: "Board",
    iface: "Interface",
    clk: "Clock",
    sleep: "Sleep Mode",
    sw0: "Switch Button (SW0)",
    mag: "Magnetometer",
    filename: "Output Filename",
    build: "Build Firmware",
    building: "🚀 Triggering build...",
    success: "✅ Build started! Check Releases soon.",
    failed: "❌ Build trigger failed",
    selectBoard: "Please select a board first",
    loginStart: "🔐 Logging in to GitHub…",
    loginSuccess: "✅ Login successful. Triggering build…",
    loginFail: "❌ Login failed:"
  },
  ja: {
    title: "SlimeNRF ファームウェアビルダー",
    board: "開発ボード",
    iface: "通信インターフェース",
    clk: "外部クロック",
    sleep: "スリープモード",
    sw0: "スイッチボタン (SW0)",
    mag: "磁力計",
    filename: "出力ファイル名",
    build: "ファームウェアを生成",
    building: "🚀 ビルドを開始中…",
    success: "✅ ビルドが開始されました。数分後にReleasesを確認してください。",
    failed: "❌ ビルドの起動に失敗",
    selectBoard: "ボードを選択してください",
    loginStart: "🔐 GitHub にログイン中…",
    loginSuccess: "✅ ログインに成功しました。ビルドを開始します…",
    loginFail: "❌ ログインに失敗："
  }
};

if (!window.userLang) {
  const sys = navigator.language.toLowerCase();
  window.userLang = sys.includes("zh") ? "zh" :
                    sys.includes("ja") ? "ja" : "en";
}

function t(key, lang) {
  const active = lang || window.userLang || "en";
  return (LANGS[active] && LANGS[active][key]) || LANGS.en[key] || key;
}

function getLangTexts(lang) {
  return LANGS[lang] || LANGS.en;
}

function setLanguage(lang) {
  window.userLang = lang;
  const L = getLangTexts(lang);
  const mapping = {
    "title": "title",
    "lbl-board": "board",
    "lbl-iface": "iface",
    "lbl-clk": "clk",
    "lbl-sleep": "sleep",
    "lbl-sw0": "sw0",
    "lbl-mag": "mag",
    "lbl-filename": "filename",
    "btn-build": "build"
  };
  for (const [id, key] of Object.entries(mapping)) {
    const el = document.getElementById(id);
    if (el) el.textContent = L[key];
  }
}
