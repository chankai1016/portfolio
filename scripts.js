// 1. スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. ハンバーガーメニュー
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
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
  