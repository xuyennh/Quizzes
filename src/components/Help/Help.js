import styles from "./help.scss";

function showHelp() {
  return /*html*/ `
      <div class="${styles.btn}">
          <button id="help-5050" class="${styles.inner}">50:50</button>
          <button id="helpcall" class="${styles.inner}"><i class="fa fa-users" aria-hidden="true"></i></button>
          <button class="${styles.inner}"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></button>
      </div>
    `;
}

export default showHelp;
