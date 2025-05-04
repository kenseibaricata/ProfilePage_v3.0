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
}); 