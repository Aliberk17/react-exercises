import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Welcome</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/users/aliberk17">ShowGithubUser</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Ali"} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/users">
          <Route index element={<GithubUserList />} ></Route>
          <Route path=":username" element={<ShowGithubUser />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
