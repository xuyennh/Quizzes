import ModalBase from "../ModalBase/ModalBase";
import styles from "./modal.scss";

/**
 *
 * @param {{
 *  name: string,
 *  children: string,
 *  onOk: (event: MouseEvent) => void,
 *  onCancel: (onClose: () => void, event: MouseEvent) => void,
 *  onClose: (onClose: () => void, event: MouseEvent) => void,
 *  textOk?: string,
 *  textCancel?: string
 * }} props
 */
function Modal({
  name,
  children,
  onOk = () => {},
  onCancel = () => {},
  textOk = "Ok",
  textCancel = "Cancel",
  onClose = () => {},
  ...rest
}) {
  const header = /*html*/ `
    <div class="${styles.header}">
      <div>Xin Chào: ${name}</div>
      <div id="close" class=${styles.close}>&times;</div>
    </div>
  `;
  const content = /*html*/ `
    <div class="${styles.content}">${children}</div>
  `;
  const footer = /*html*/ `
    <div>
      <button id="modal_ok">${textOk}</button>
      <button id="modal_cancel">${textCancel}</button>
    </div>
  `;

  ModalBase({
    children: header + content + footer,
    contentClassName: styles.modal,
    containerClassName: "js-modal",
    ...rest,
  });
  const modal = document.querySelector(".js-modal");
  const modalOk = document.getElementById("modal_ok");
  modalOk && modalOk.addEventListener("click", onOk);
  const modalCancel = document.getElementById("modal_cancel");
  const handleClose = () => {
    modal.remove();
  };
  modalCancel &&
    modalCancel.addEventListener("click", (event) => {
      onCancel(handleClose, event);
    });
  const closeModal = document.getElementById("close");
  closeModal &&
    closeModal.addEventListener("click", (event) => {
      onClose(handleClose, event);
    });
}

export default Modal;
