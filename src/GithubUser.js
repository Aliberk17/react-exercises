import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const [response] = useGithubUser(props.username);

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
