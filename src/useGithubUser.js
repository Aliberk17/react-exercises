import { useState } from "react";

export default function useGithubUser(username) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubUser = () => {
    try{
      fetch(`https:api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setResponse(json);
      });
    } catch (e){
      setError(e);
    }
  };

  return [response, loading, error, fetchGithubUser];
}
