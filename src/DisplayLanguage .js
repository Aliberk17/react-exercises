import { useContext } from "react";
import { LanguageContext } from "./DisplayLanguageWrapper";

export default function DisplayLanguage() {
  const languageContext = useContext(LanguageContext);

  return <h1>{languageContext}</h1>;
}
