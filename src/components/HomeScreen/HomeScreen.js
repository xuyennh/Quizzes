import styles from "./home.scss";

function HomeScreen() {
  return /*html*/ `
      <div class="${styles.container}">
            <form class="${styles.form}">
                <h1 class="${styles.title}">Ai Là Triệu Phú</h1>
                <div class="${styles.name}">Vui Lòng nhập tên của bạn</div>
                <input type="text" id="inputname" class="${styles.inputname}">
                <button id="start" class="${styles.btn}">Bắt đầu</button>
            
            </form>
      </div>
      `;
}

export default HomeScreen;
