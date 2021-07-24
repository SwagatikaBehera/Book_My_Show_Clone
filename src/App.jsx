import { Route } from "react-router-dom";

function Root() {
  return <h1>hello root</h1>;
}

function Movie() {
  return <h1>hello movie</h1>;
}

function App() {
  return (
    <>
      <Route path="/" exact component={Root} />
      <Route path="/movie" exact component={Movie} />
    </>
  );
}

export default App;
