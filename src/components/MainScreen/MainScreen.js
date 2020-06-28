import showBoard from "../Board/Board";
import styles from "./main.scss";

/**
 *
 * @param {{
 *  question: string,
 * id: number,
 * answer: [],
 * name: string,
 * score: number
 * }} props
 */

function MainScreen(props) {
  return /*html*/ `
        <div class="${styles.main}">
            <div class="${styles.game}">
                <h2 class="${styles.question}">${props.question}</h2>
                <div class="${styles.questionnumber}">Câu số: ${props.id}</div>
                <div class="${styles.listanswer}">${props.answer}</div>
                <div class="${styles.name}">${props.name}</div>
                <div id="help5050" class="${styles.showhelp}"></div>
                <button id="btn-choose" class="${styles.btn}">Chọn</button>
            </div>
            <div class="${styles.showscore}">
            <div>${showBoard()}</div> 
            <div id="clock" class="${styles.countdown}"></div>
            <div class="${styles.score}">Score:</div>
            <div class="${styles.scorequestion}">${props.score}</div>
            <button id="btn-stop" class="${
              styles.btnstop
            }">Dừng Cuộc Chơi</button>
            </div>
        </div>
      `;
}

export default MainScreen;
