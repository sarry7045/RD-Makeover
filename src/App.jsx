import React from "react";
const Main = React.lazy(() => import("./Components/Main.jsx"));

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
