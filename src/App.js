import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name={"Ali"} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/users/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
