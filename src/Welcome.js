import Age from "./Age";

function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome {props.name || "Default name"}!</p>
      {props.age > 18 ? <Age age={props.age} /> : <p>You are very young!</p>}
    </div>
  );
}

export default Welcome;
