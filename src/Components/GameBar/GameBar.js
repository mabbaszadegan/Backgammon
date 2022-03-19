import "./GameBar.css";

const GameBar = (props) => {
  const classes = "bar " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default GameBar;
