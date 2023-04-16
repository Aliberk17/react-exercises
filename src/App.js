import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name={"Ali"} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
