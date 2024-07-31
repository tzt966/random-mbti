const MBTI_BUTTON = document.getElementById('create-mbti');
MBTI_BUTTON.addEventListener('click', () => {
    //mbtiコードと対応する日本語名称
    let mbti_code = ["ENTP", "INTP", "INTJ", "ENTJ", "ENFP", "INFP", "INFJ", "ENFJ", "ESTJ", "ISTJ", "ISFJ", "ESFJ", "ESTP", "ISTP", "ISFP", "ESFP"];
    let mbti_janame = ["討論者", "論理学者", "建築家", "指揮官", "運動家", "仲介者", "提唱者", "主人公", "幹部", "管理者", "擁護者", "執事", "起業家", "巨匠", "冒険家", "エンターテイナー"];
    //ランダムなmbtiコードの割当
    let your_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    let your_mbti_name = mbti_janame[mbti_code.indexOf(your_mbti)];
    let result = "あなたは" + your_mbti + "(" + your_mbti_name + ")です．";
    //htmlに反映
    document.getElementById("your").innerHTML = result;
    document.getElementById("create-mbti").innerHTML = "もう一度診断";
});
