// 各言語のコンテンツをオブジェクトで定義
const contents = {
    ja: {
        about: "日本語の自己紹介コンテンツ",
        skills: "日本語のスキルコンテンツ",
        portfolio: "日本語の作品集コンテンツ",
        contact: "日本語の連絡先コンテンツ",
    },
    zh: {
        about: "繁体字の自己紹介コンテンツ",
        skills: "繁体字のスキルコンテンツ",
        portfolio: "繁体字の作品集コンテンツ",
        contact: "繁体字の連絡先コンテンツ",
    },
    en: {
        about: "English self-introduction content",
        skills: "English skills content",
        portfolio: "English portfolio content",
        contact: "English contact content",
    },
};

// 言語切り替えボタンを取得
const langBtns = document.querySelectorAll(".lang-btn");

// 言語切り替え関数
function changeLanguage(lang) {
    const translatableElements = document.querySelectorAll(".translatable");

    for (let element of translatableElements) {
        const sectionId = element.id;
        element.innerHTML = contents[lang][sectionId];
    }
}

// 言語切り替えボタンにイベントリスナーを追加
for (let btn of langBtns) {
    btn.addEventListener("click", () => {
        const lang = btn.id.split("-")[1];
        changeLanguage(lang);
    });
}

// ページ読み込み時にデフォルト言語を設定
changeLanguage("ja");
