const MBTI_BUTTON = document.getElementById('create-mbti');
MBTI_BUTTON.addEventListener('click', () => {
    let mbti_1 = ["E", "I"];
    let mbti_2 = ["S", "N"];
    let mbti_3 = ["T", "F"];
    let mbti_4 = ["J", "P"];
    let E_or_I = mbti_1[Math.floor(Math.random() * mbti_1.length)];
    let S_or_N = mbti_2[Math.floor(Math.random() * mbti_2.length)];
    let T_or_F = mbti_3[Math.floor(Math.random() * mbti_3.length)];
    let J_or_P = mbti_4[Math.floor(Math.random() * mbti_4.length)];
    let result = "あなたは" + E_or_I + S_or_N + T_or_F + J_or_P + "です．";
    document.getElementById("your").innerHTML = result;
    document.getElementById("create-mbti").innerHTML = "もう一度診断";
});