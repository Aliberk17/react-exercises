import Age from "./Age";

function Welcome() {
  return (
    <div className="welcome">
      <p>Welcome {this.props.name || "Default name"}!</p>
      {this.props.age > 18 ? (
        <Age age={this.props.age} />
      ) : (
        <p>You are very young!</p>
      )}
    </div>
  );
}

export default Welcome;
