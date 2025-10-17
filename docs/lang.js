// lang.js
function getLangTexts(lang) {
  const L = {
    zh: {
      title: "SlimeNRF 固件建構器",
      board: "選擇開發板",
      iface: "感測器介面",
      clk: "外部時鐘",
      sleep: "睡眠模式",
      sw0: "按鍵 (SW0)",
      mag: "磁力計",
      filename: "生成的檔名",
      build: "開始編譯",
      selectBoard: "請先選擇開發板。",
      loginStart: "🔐 正在登入 GitHub…",
      loginSuccess: "✅ 登入成功，開始觸發編譯！",
      loginFail: "❌ 登入失敗：",
      building: "🚀 正在觸發 GitHub Actions 編譯…",
      success: "✅ 已成功觸發 GitHub Actions 編譯流程！",
      failed: "❌ 觸發失敗："
    },
    en: {
      title: "SlimeNRF Firmware Builder",
      board: "Select Board",
      iface: "Sensor Interface",
      clk: "External Clock",
      sleep: "Sleep Mode",
      sw0: "Button (SW0)",
      mag: "Magnetometer",
      filename: "Generated Filename",
      build: "Build Firmware",
      selectBoard: "Please select a board first.",
      loginStart: "🔐 Logging into GitHub…",
      loginSuccess: "✅ Logged in successfully! Starting build…",
      loginFail: "❌ Login failed:",
      building: "🚀 Triggering GitHub Actions build…",
      success: "✅ Successfully triggered GitHub Actions build!",
      failed: "❌ Build trigger failed:"
    },
    ja: {
      title: "SlimeNRF ファームウェアビルダー",
      board: "ボードを選択",
      iface: "センサーインターフェース",
      clk: "外部クロック",
      sleep: "スリープモード",
      sw0: "スイッチボタン (SW0)",
      mag: "磁力計",
      filename: "生成されたファイル名",
      build: "ビルド開始",
      selectBoard: "ボードを選択してください。",
      loginStart: "🔐 GitHub にログイン中…",
      loginSuccess: "✅ ログイン成功。ビルドを開始します！",
      loginFail: "❌ ログイン失敗：",
      building: "🚀 GitHub Actions ビルドを開始しています…",
      success: "✅ GitHub Actions ビルドを正常にトリガーしました！",
      failed: "❌ トリガー失敗："
    }
  };
  return L[lang] || L.en;
}
