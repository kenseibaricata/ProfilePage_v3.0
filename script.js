document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('toggle-theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // テーマの配列
    const themes = [
        { name: 'light', class: '', text: '🌙 ダークモード' },
        { name: 'dark', class: 'dark-theme', text: '☀️ ライトモード' },
        { name: 'red', class: 'red-theme', text: '🔴 レッドモード' },
        { name: 'blue', class: 'blue-theme', text: '🔵 ブルーモード' },
        { name: 'yellow', class: 'yellow-theme', text: '💛 イエローモード' }
    ];

    // 現在のテーマのインデックスを保持
    let currentThemeIndex = 0;

    // システムの設定に基づいて初期テーマを設定
    if (prefersDarkScheme.matches) {
        currentThemeIndex = 1; // ダークモード
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ ライトモード';
    } else {
        currentThemeIndex = 0; // ライトモード
        document.body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙 ダークモード';
    }

    // ランダムなテーマに切り替える関数
    function switchToRandomTheme() {
        // 現在のテーマを削除
        themes.forEach(theme => {
            if (theme.class) {
                document.body.classList.remove(theme.class);
            }
        });
        
        // ランダムなインデックスを生成（現在のテーマ以外）
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * themes.length);
        } while (newIndex === currentThemeIndex);
        
        currentThemeIndex = newIndex;
        const newTheme = themes[newIndex];
        
        // 新しいテーマを適用
        if (newTheme.class) {
            document.body.classList.add(newTheme.class);
        }
        themeToggle.textContent = newTheme.text;

        // デバッグ用のログ
        console.log('現在のテーマ:', newTheme.name);
        console.log('適用されたクラス:', document.body.classList);
    }

    // テーマ切替ボタンのクリックイベント
    themeToggle.addEventListener('click', switchToRandomTheme);

    // システムのテーマ設定変更を監視
    prefersDarkScheme.addEventListener('change', (e) => {
        if (e.matches) {
            currentThemeIndex = 1;
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ ライトモード';
        } else {
            currentThemeIndex = 0;
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