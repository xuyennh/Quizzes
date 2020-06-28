import styles from "../HomeScreen/home.scss";

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function EndGame(props) {
  return /*html*/ `
    <div class="${styles.container}">
      <div class="${styles.form}">
        <h2>Chúc Mừng Bạn, Trò Chơi Đã Kết Thúc!</h2>
        <div>Tổng số điểm bạn đạt được là: ${props.totalScore}</div>
        <button id="restart" class="${styles.btn}">Chơi Lại</button>
      </div>
    </div>
  `;
}

export default EndGame;