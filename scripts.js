// 1. スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

////////////////////////////////////////
// 2. ハンバーガーメニュー
////////////////////////////////////////
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburgerIcon.classList.toggle('active');
});

// このコードは、ハンバーガーメニューがクリックされたときに、ナビゲーションとハンバーガーアイコンにactiveクラスを追加/削除します。最後に、styles.cssファイルにactiveクラスに対応するスタイルを追加して、ナビゲーションが表示されるようにしましょう。

// ハンバーガーメニューの表示・非表示
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenuContent = document.querySelector(".hamburger-menu-content");

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerMenuContent.style.transform === "translateY(-100%)") {
    hamburgerMenuContent.style.transform = "translateY(0)";
  } else {
    hamburgerMenuContent.style.transform = "translateY(-100%)";
  }
});



// 3. 画像ギャラリー
// 画像ギャラリーの実装は、利用するライブラリやプラグインによって異なります。
// 一般的な方法は、JavaScriptプラグインを使用することです。
// 例: Lightbox (https://lokeshdhakar.com/projects/lightbox2/)

// 4. ダークモード切り替え
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 5. スクロールアニメーション
// スクロールアニメーションの実装は、AOS (https://michalsnik.github.io/aos/) などのライブラリを利用するのが一般的です。

// 6. 言語切り替え機能の実装
const languageSelector = document.querySelector('.language-selector');

languageSelector.addEventListener('change', (e) => {
    window.location.href = e.target.value;
});


// 言語選択プルダウン
document.getElementById("language-switcher").addEventListener("change", function () {
    window.location.href = this.value;
  });
  