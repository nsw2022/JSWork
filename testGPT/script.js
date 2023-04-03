// 랜덤한 4자리 숫자 생성
let answer = '';
while (answer.length < 4) {
    let digit = Math.floor(Math.random() * 10);
    if (!answer.includes(digit.toString())) {
        answer += digit;
    }
}

let attempts = 0;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit-button');
const outputContainer = document.getElementById('output-container');

submitButton.addEventListener('click', function() {
    const guess = guessInput.value;
    if (!/^\d{4}$/.test(guess)) {
        alert('숫자 4자리를 입력하세요.');
        return;
    }
    
    attempts++;
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < guess.length; i++) {
        const digit = guess.charAt(i);
        if (answer.includes(digit)) {
            if (answer.charAt(i) === digit) {
                strike++;
            } else {
                ball++;
            }
        }
    }
    
    if (strike === 4) {
        outputContainer.innerText = `축하합니다! ${attempts}번만에 정답을 맞췄습니다.`;
        guessInput.disabled = true;
        submitButton.disabled = true;
    } else {
        outputContainer.innerText = `${strike}스트라이크 ${ball}볼`;
    }
    
    guessInput.value = '';
});
