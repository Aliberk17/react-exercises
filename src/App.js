import "./App.css";

const renderName = (name) => {
  return <h1>Hello, {name}</h1>;
};

function App() {
  return <div className="App">{renderName("Ali")}</div>;
}

export default App;
