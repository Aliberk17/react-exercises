import { useEffect } from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const [response, loading, error, fetchGithubUser] = useGithubUser(
    props.username
  );

  useEffect(() => {
    fetchGithubUser();
  }, []);

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderError = () => {
    return <p>Error!</p>;
  };

  const renderGithubUser = () => {
    return (
      <ul>
        <li>login: {response.login}</li>
        <li>id: {response.id}</li>
        <li>node_id: {response.node_id}</li>
        <li>avatar_url: {response.avatar_url}</li>
      </ul>
    );
  };

  return loading ? renderLoading() : error ? renderError() : renderGithubUser();
}
