import { useState } from "react";

export default function useGithubUser(username) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubUser = () => {
    fetch(`https:api.github.com/users/${username}`)
      .then((e) => {
        setLoading(false);
        setError(e.json());
      })
      .then((response) => {
        setLoading(false);
        setResponse(response);
      });
  };

  return [response, loading, error, fetchGithubUser];
}
