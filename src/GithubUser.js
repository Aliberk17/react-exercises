import React, { useEffect, useState } from "react";

export default function GithubUser(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(`https:api.github.com/users/${props.username}`)
      .then((e) => e.json())
      .then((response) => setResponse(response));
  }, []);

  return (
    <div>
      <ul>
        <li>login: {response.login}</li>
        <li>id: {response.id}</li>
        <li>node_id: {response.node_id}</li>
        <li>avatar_url: {response.avatar_url}</li>
      </ul>
    </div>
  );
}
