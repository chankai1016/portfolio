// 言語切り替え機能
const languageSwitcher = document.createElement("div");
languageSwitcher.innerHTML = `
  <button class="lang-switcher" data-lang="ja">日本語</button>
  <button class="lang-switcher" data-lang="zh">中文</button>
  <button class="lang-switcher" data-lang="en">English</button>
`;
document.getElementById("about").appendChild(languageSwitcher);

// 言語切り替え用のデータ
const translations = {
    // 日本語
    ja: {
        about: "自己紹介",
        experience: "経歴",
        skills: "スキル",
        portfolio: "作品集",
        contact: "連絡先"
    },
    // 繁体字中国語
    zh: {
        about: "自我介绍",
        experience: "经历",
        skills: "技能",
        portfolio: "作品集",
        contact: "联系方式"
    },
    // 英語
    en: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact"
    }
};

// 言語切り替えのイベントリスナー
document.querySelectorAll(".lang-switcher").forEach((button) => {
    button.addEventListener("click", (e) => {
        const lang = e.target.dataset.lang;
        document.querySelector("#about a").textContent = translations[lang].about;
        document.querySelector("#experience a").textContent = translations[lang].experience;
        document.querySelector("#skills a").textContent = translations[lang].skills;
        document.querySelector("#portfolio a").textContent = translations[lang].portfolio;
        document.querySelector("#contact a").textContent = translations[lang].contact;
    });
});
