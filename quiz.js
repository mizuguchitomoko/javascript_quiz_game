const question = "ゲーム市場、最も売れたゲームは次のうちどれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];
const correct = "ニンテンドーDS";
const $button = document.getElementsByTagName("button");
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  //htmlのオブジェクトをとってくる場合変数の前に$を入れる
  let buttonIndex = 0;
  let buttonLength = $button.length;
  //while文で繰り返し処理
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
};

//ボタンをクリックしたら正誤判定

$button[0].addEventListener("click", (e) => {
  clickHandler(e);
});
$button[1].addEventListener("click", (e) => {
  clickHandler(e);
});
$button[2].addEventListener("click", (e) => {
  clickHandler(e);
});
$button[3].addEventListener("click", (e) => {
  clickHandler(e);
});
