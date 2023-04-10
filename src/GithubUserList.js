import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [username, setUsername] = useState("");
  const [usernameList, setUsernameList] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAdd = (event) => {
    const newUsernameList = usernameList;
    newUsernameList.push(username);
    setUsername("");
    setUsernameList(newUsernameList);
  };

  return (
    <div>
      <ul>
        {usernameList.map((username) => (
          <li key={username}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
      <input value={username} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
