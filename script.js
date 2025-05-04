document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('toggle-theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // システムの設定に基づいて初期テーマを設定
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ ライトモード';
    }

    // テーマ切替ボタンのクリックイベント
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDarkMode = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDarkMode ? '☀️ ライトモード' : '🌙 ダークモード';
    });

    // システムのテーマ設定変更を監視
    prefersDarkScheme.addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ ライトモード';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.textContent = '🌙 ダークモード';
        }
    });

    // アコーディオン機能
    const aboutTitle = document.getElementById('about-title');
    const skillsTitle = document.getElementById('skills-title');
    const aboutSection = document.getElementById('about-section');
    const skillsSection = document.getElementById('skills-section');

    aboutTitle.addEventListener('click', () => {
        aboutSection.classList.toggle('active');
        document.body.style.backgroundColor = aboutSection.classList.contains('active') ? '#0a3d62' : '';
    });

    skillsTitle.addEventListener('click', () => {
        skillsSection.classList.toggle('active');
        document.body.style.backgroundColor = skillsSection.classList.contains('active') ? '#fff8b5' : '';
    });

    // ポップアップと花火機能
    const siteTitle = document.getElementById('site-title');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const fireworksContainer = document.getElementById('fireworks-container');

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function showFireworks() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createFirework(x, y);
            }, i * 100);
        }
    }

    siteTitle.addEventListener('click', () => {
        popup.classList.add('active');
        showFireworks();
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // ポップアップを自動で閉じる
    setTimeout(() => {
        popup.classList.remove('active');
    }, 5000);
}); 