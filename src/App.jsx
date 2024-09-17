import "./App.css";
import MagicShimmer from "./MagicShimmer";

function App() {
  return (
    <>
      <MagicShimmer
        layout={[
          { shape: "rectangle", width: "100%", height: "20px", margin:"10px" },
          { shape: "circle", width: "50px", height: "50px", margin:"10px"},
          { shape: "rectangle", width: "80%", height: "15px", margin:"10px"},
        ]}
      />
    </>
  );
}

export default App;
