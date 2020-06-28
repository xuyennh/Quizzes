import { ROOT } from "../../constants";
import styles from "./styles.scss";

/**
 *
 * @param {{
 *  visible: boolean,
 *  children: string,
 *  overlayColor: string,
 *  contentClassName: string,
 *  containerClassName: string
 *  }} props
 */

function ModalBase({
  visible = false,
  children,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  contentClassName = "",
  containerClassName = "",
}) {
  const content = /*html*/ `
    <div class="${styles.container} ${containerClassName}">
      <div class="${styles.overlay}" style="background-color: ${overlayColor}"></div>
      <div class="${styles.content} ${contentClassName}">${children}</div>
    </div>
  `;
  if (children && visible) {
    ROOT.insertAdjacentHTML("afterend", content);
  }
}

export default ModalBase;
