import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

export default function ShowGithubUser() {
  const params = useParams();

  return <GithubUser username={params.username} />;
}
