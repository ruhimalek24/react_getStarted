import "./App.css";
import AddForm from "./components/AddForm";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="StringManipulator" />
      {/* <div className="container my-4">
        <TextForm heading="Enter the Text to Analyze" />
      </div> */}
      {/* <About /> */}
      <AddForm />
    </>
  );
}

export default App;
