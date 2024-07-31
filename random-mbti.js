const MBTI_BUTTON = document.getElementById('create-mbti');
MBTI_BUTTON.addEventListener('click', () => {
    //mbtiコードと対応する日本語名称
    var mbti_code = ["ENTP", "INTP", "INTJ", "ENTJ", "ENFP", "INFP", "INFJ", "ENFJ", "ESTJ", "ISTJ", "ISFJ", "ESFJ", "ESTP", "ISTP", "ISFP", "ESFP"];
    let mbti_janame = ["討論者", "論理学者", "建築家", "指揮官", "運動家", "仲介者", "提唱者", "主人公", "幹部", "管理者", "擁護者", "執事", "起業家", "巨匠", "冒険家", "エンターテイナー"];
    //ランダムなmbtiコードの割当
    let your_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    var your_mbti_number = mbti_code.indexOf(your_mbti);
    let your_mbti_name = mbti_janame[your_mbti_number];
    let result = "あなたは" + your_mbti + "(" + your_mbti_name + ")です．";
    //配列から割り当てられたmbtiを削除
    mbti_code.splice(your_mbti_number, 1);
    mbti_janame.splice(your_mbti_number, 1);
    //相性の良いmbti割当
    let good_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    let your_good_mbti_number = mbti_code.indexOf(good_mbti);
    let good_mbti_janame = mbti_janame[your_good_mbti_number];
    //相性の悪いmbti割当
    //さらに削除
    mbti_code.splice(your_good_mbti_number, 1);
    mbti_janame.splice(your_good_mbti_number, 1);
    //悪いの割当
    let bad_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    let your_bad_mbti_number = mbti_code.indexOf(bad_mbti);
    let bad_mbti_janame = mbti_janame[your_bad_mbti_number];
    //htmlに反映
    let goodresult = "相性が良いのは" + good_mbti + "(" + good_mbti_janame + ")，悪いのは" + bad_mbti + "(" + bad_mbti_janame + ")です．";
    document.getElementById("your").innerHTML = result;
    document.getElementById("aisho").innerHTML = goodresult;
    document.getElementById("create-mbti").innerHTML = "もう一度診断";
});
