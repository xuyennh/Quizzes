import HomeScreen from "./components/HomeScreen/HomeScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import EndGame from "./components/EndGameScreen/EndGameScreen";
import showAnswer from "./components/Answer/Answer";
import Modal from "./components/Modal/Modal";
import counter from "./utils/counter";
import random from "./utils/random";
import WinGame from "./components/WinGameScreen/WinGameScreen";

function QuizzGame(quizzes) {
  this.quizzes = quizzes;
  this.index = 0;
  this.name = "John Doe";
  this.start = false;
  this.totalScore = 0;
  this.ramdomNumber = false;
  this.currentAnswer = null;
  this.helpCall = false;
  this.coundown = -1;
  this.answers = ["a", "b", "c", "d"];
  this.modalContent = "";
  this.modalVisible = false;
  this.$root = document.getElementById("root");
  this.handleName = this.handleName.bind(this);
  this.handleStart = this.handleStart.bind(this);
  this.handleInputSelected = this.handleInputSelected.bind(this);
  this.handleChooseAnswer = this.handleChooseAnswer.bind(this);
  this.handleRestart = this.handleRestart.bind(this);
  this.renderhelp5050 = this.renderhelp5050.bind(this);
  this.handleStopGame = this.handleStopGame.bind(this);
  this.handleHelpCallFriend = this.handleHelpCallFriend.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
  // this.renderRandomHelpCall = this.renderRandomHelpCall.bind(this);
}

QuizzGame.prototype = {
  handleStart() {
    this.start = true;
    this.coundown = this.counter();
    this.update();
  },

  renderAnswer(arr, id) {
    return arr
      .map((item) => {
        return showAnswer({
          id: id,
          name: item.name,
          value: item.value,
        });
      })
      .join("");
  },
  // render ra màn hình giao diện bắt đầu game
  renderHomeScreen() {
    return (this.$root.innerHTML = HomeScreen());
  },
  // render ra mần hình giao diện kết thúc game
  renderRestart() {
    return (this.$root.innerHTML = EndGame({
      totalScore: this.totalScore,
    }));
  },

  ShowWinGame() {
    return (this.$root.innerHTML = WinGame({
      totalScore: this.totalScore,
    }));
  },

  renderWinGame() {
    this.ShowWinGame();
    this.handleDOM();
  },

  renderEndGame() {
    this.renderRestart();
    this.handleDOM();
  },
  // gán giá trị select với giá trị ở ô input
  handleInputSelected(event) {
    this.currentAnswer = event.target.value;
  },
  // xử lí chọn đáp án
  handleChooseAnswer() {
    var current = this.quizzes[this.index];
    var answer = current.quizze.answer;
    var score = current.quizze.score;
    const selectItem = answer.filter((item) => {
      return item.value === this.currentAnswer;
    })[0];
    if (this.currentAnswer === null) {
      return;
    }

    if (selectItem.isCorreect) {
      this.totalScore += score;
      if (this.index + 1 === this.quizzes.length) {
        this.coundown.clear();
        this.renderWinGame();
      } else {
        this.index++;
        this.coundown.clear();
        this.coundown = this.counter();
        this.update();
      }
    } else {
      this.renderEndGame();
      this.coundown.clear();
    }
    this.currentAnswer = null;
  },
  // xử lí nút chơi lại
  handleRestart() {
    this.index = 0;
    this.currentAnswer = null;
    this.totalScore = 0;
    this.ramdomNumber = false;
    this.helpCall = false;
    this.coundown = this.counter();
    this.update();
  },
  // xử lí random đáp án
  handleRandom() {
    var current = this.quizzes[this.index];
    var answer = current.quizze.answer;
    const itemCorrect = answer.filter((item) => {
      return item.isCorreect;
    })[0];
    const randomanswer = random.withArray(this.answers);
    if (randomanswer === itemCorrect.value) {
      return randomanswer;
    }
    const list = [
      ...itemCorrect.value,
      ...itemCorrect.value,
      ...itemCorrect.value,
      ...randomanswer,
    ];
    return {
      item: itemCorrect,
      answer: randomanswer,
      listrandom: list,
    };
  },

  // hiển thị kết quả hỗ trợ 50:50
  renderhelp5050() {
    const { item, answer } = this.handleRandom();
    if (this.ramdomNumber) {
      return;
    }
    var $help = document.querySelector("#help5050");
    $help.innerHTML = `Chúng tôi xin trợ giúp 50:50 là: ${item.value.toUpperCase()} hoặc ${answer.toUpperCase()}`;
    this.ramdomNumber = true;
  },
  // xử lí hỗ trợ gọi điện thoại cho người thân
  handleHelpCallFriend() {
    if (this.helpCall) {
      return;
    } else {
      this.modalVisible = true;
      this.modalContent =
        "Tôi xin trợ giúp đáp án câu này là: " + this.renderRandomHelpCall();
      this.update();
    }
    this.helpCall = true;
  },
  // xử lí random kết quả hỗ trợ gọi điện thoại cho người thân tỉ lệ 3:1
  renderRandomHelpCall() {
    const listrandom = this.handleRandom().listrandom;
    let randomAnswerCallHelp = random.withArray(listrandom);
    return randomAnswerCallHelp.toUpperCase();
  },
  // xử lí dừng cuộc chơi
  handleStopGame() {
    this.renderEndGame();
    this.coundown.clear();
  },

  // nhận giá trị tên nhập vào
  handleName(event) {
    this.name = event.target.value;
  },

  // xử lí thời gian câu hỏi
  counter() {
    return counter({
      from: 20,
      to: 0,
      onStart: () => {},
      onChange: (from) => {
        document.getElementById("clock").innerHTML = from;
      },
      onEnd: () => {
        this.renderEndGame();
      },
    });
  },

  // render Tổng
  render() {
    var current = this.quizzes[this.index];
    var question = current.quizze.question;
    var answer = current.quizze.answer;
    var score = current.quizze.score;
    var id = current.id;
    if (this.start) {
      this.$root.innerHTML = MainScreen({
        question: question,
        answer: this.renderAnswer(answer, id),
        name: this.name,
        score: score,
        id: id,
      });
    } else {
      this.$root.innerHTML = HomeScreen();
    }
  },
  // Xử lí tổng
  handleDOM() {
    var nameInput = document.querySelector("#inputname");
    var start = document.querySelector("#start");
    var inputs = Array.from(document.querySelectorAll("#input"));
    var choose = document.querySelector("#btn-choose");
    var restart = document.querySelector("#restart");
    var help = document.querySelector("#help-5050");
    var stopGame = document.querySelector("#btn-stop");
    var helpcallfriend = document.querySelector("#helpcall");
    // input tên người nhập
    nameInput && nameInput.addEventListener("keyup", this.handleName);
    // sự kiện bắt đầu trò chơi
    start && start.addEventListener("click", this.handleStart);
    // select đáp án
    for (var i = 0; i < inputs.length; i++) {
      let inputSelected = inputs[i];
      inputSelected.addEventListener("change", this.handleInputSelected);
    }
    // Xử Lí nút chọn đáp án
    choose && choose.addEventListener("click", this.handleChooseAnswer);
    // Xử lí chơi lại
    restart && restart.addEventListener("click", this.handleRestart);
    // Trợ Giúp 50:50
    help && help.addEventListener("click", this.renderhelp5050);
    // Dừng Cuộc choi
    stopGame && stopGame.addEventListener("click", this.handleStopGame);
    // Gọi điện thoại cho người thân
    helpcallfriend &&
      helpcallfriend.addEventListener("click", this.handleHelpCallFriend);
  },

  update() {
    this.create();
  },
  handleCloseModal(onClose) {
    this.modalVisible = false;
    onClose();
  },

  create() {
    this.render();
    this.handleDOM();
    Modal({
      name: this.name,
      visible: this.modalVisible,
      children: this.modalContent,
      onOk: () => {},
      onCancel: this.handleCloseModal,
      onClose: this.handleCloseModal,
    });
  },
};

export default QuizzGame;
