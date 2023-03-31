import "./App.css";

const renderSum = (a, b) => {
  return <h2>{a + b}</h2>;
};

function App() {
  return <div className="App">{renderSum(3, 5)}</div>;
}

export default App;
