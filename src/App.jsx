import "./App.css";
import Discover from "../src/pages/discover/Discover.jsx";
import Button from "./components/button/button.jsx";

function App() {
  return (
    <>
      <Discover />
      <Button size="small" type={onclick} />
      <Button size="big" type={SubmitEvent} />
    </>
  );
}

export default App;
