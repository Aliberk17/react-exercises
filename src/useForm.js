import { useState } from "react";

export default function useForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (username) => {
    setUsername(username);
  };

  const updatePassword = (password) => {
    setPassword(password);
  };

  return [username, updateUsername, password, updatePassword];
}
