function t(key, lang) {
  const L = {
    zh: {
      title: "SlimeNRF 固件生成器",
      board: "開發板",
      filename: "輸出檔名",
      clk: "外部時鐘",
      sleep: "睡眠模式",
      button: "生成固件",
      building: "🚀 正在觸發構建中…",
      success: "✅ 構建已啟動，請稍候查看 Release！",
      failed: "❌ 觸發失敗："
    },
    en: {
      title: "SlimeNRF Firmware Builder",
      board: "Board",
      filename: "Output Filename",
      clk: "Clock",
      sleep: "Sleep Mode",
      button: "Build Firmware",
      building: "🚀 Triggering build...",
      success: "✅ Build started! Check Releases soon.",
      failed: "❌ Build trigger failed:"
    },
    ja: {
      title: "SlimeNRF ファームウェアビルダー",
      board: "開発ボード",
      filename: "出力ファイル名",
      clk: "外部クロック",
      sleep: "スリープモード",
      button: "ファームウェアを生成",
      building: "🚀 ビルドを開始中…",
      success: "✅ ビルドが開始されました。数分後にReleasesを確認してください。",
      failed: "❌ ビルドの起動に失敗："
    }
  };
  return L[lang || userLang][key];
}

function setLanguage(lang) {
  document.getElementById("title").textContent = t("title", lang);
  document.getElementById("lbl-board").textContent = t("board", lang);
  document.getElementById("lbl-filename").textContent = t("filename", lang);
  document.getElementById("lbl-clk").textContent = t("clk", lang);
  document.getElementById("lbl-sleep").textContent = t("sleep", lang);
  document.getElementById("btn-build").textContent = t("button", lang);
}
