import "./styles/styles.scss";
import QuizzGame from "./App";
import data from "./data";

var newGame = new QuizzGame(data);

newGame.create();
