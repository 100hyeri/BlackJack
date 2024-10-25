// 베팅 버튼 누르면 hit, bust, stand 버튼 나오게
function showGameButtons() {
    document.getElementById('gameButton_table').style.display = 'flex';
    document.getElementById('chip_table').style.display = 'none';
}

// 랜덤 금액 생성
function generatePlayerBalance() {
    const balance = Math.floor(Math.random() * 9000) + 1000; // 1000 ~ 10000 사이의 금액
    document.getElementById('player_money').textContent = `player money : $${balance}`;
}

// 페이지 로드 시 초기화
window.onload = function() {
    generatePlayerBalance();
};

