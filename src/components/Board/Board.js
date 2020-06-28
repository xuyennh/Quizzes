import showHelp from '../Help/Help';
function showBoard() {
    return /*html*/`
        <div>
            <div>${showHelp()}</div>
        </div>
    `
}

export default showBoard;