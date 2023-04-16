import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name={"Ali"} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
