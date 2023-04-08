function Sum(props) {
  return (
    <h1>{props.numbers ? props.numbers.reduce((a, b) => a + b, 0) : 0}</h1>
  );
}

export default Sum;
