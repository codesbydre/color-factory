import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Colors from "./Colors";
import Color from "./Color";
import NewColor from "./NewColor";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColor addColor={addColor} />}
          />{" "}
          <Route path="/colors/:color" element={<Color colors={colors} />} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
