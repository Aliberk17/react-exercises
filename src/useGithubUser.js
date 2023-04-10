import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(`https:api.github.com/users/${username}`)
      .then((e) => e.json())
      .then((response) => setResponse(response));
  }, []);

  return [response];
}
