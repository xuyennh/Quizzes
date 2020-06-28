import styles from "./answer.scss";

/**
 *
 * @param {{
 *  id: number,
 *  value: string,
 *  name: string
 * }} props
 */

function showAnswer(props) {
  return /*html*/ `
    <label class="${styles.answer}">
        <input type="radio" id="input" class="${styles.input}" name="${props.id}" value="${props.value}">
        <span class="${styles.item}">${props.name}</span>
    </label>
  `;
}

export default showAnswer;
