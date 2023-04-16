import { useState } from "react";
import { Link } from "react-router-dom";

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
      <p>Add a user and select it</p>
      <ul>
        {usernameList.map((username) => (
          <li key={username}>
            <Link to={username}>{username}</Link>
          </li>
        ))}
      </ul>
      <input value={username} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
