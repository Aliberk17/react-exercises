import { useRef, useEffect } from "react";

export default function CarDetails(props) {
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    resetInputs();
  }, []);

  const resetInputs = () => {
    modelRef.current.value = props.initialData.model;
    yearRef.current.value = props.initialData.year;
    colorRef.current.value = props.initialData.color;
  };

  return (
    <form>
      <br />
      <label>model: </label>
      <input ref={modelRef} />
      <br />
      <label>year: </label>
      <input ref={yearRef} />
      <br />
      <label>color: </label>
      <input ref={colorRef} />
    </form>
  );
}
