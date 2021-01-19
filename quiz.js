const quiz = [
  {
    question: "ゲーム市場、最も売れたゲームは次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "知子の誕生日は何日？",
    answers: ["1/2", "4/20", "6/28", "9/15"],
    correct: "6/28",
  },
  {
    question: "エイトの好きなきのこは？",
    answers: ["椎茸", "舞茸", "松茸", "平茸"],
    correct: "舞茸",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  //htmlのオブジェクトをとってくる場合変数の前に$を入れる
  let buttonIndex = 0;
  let buttonLength = $button.length;
  //while文で繰り返し処理
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題がもうなければこちらを実行
    window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です！");
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
