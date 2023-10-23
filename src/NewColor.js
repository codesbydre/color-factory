import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColor({ addColor }) {
  const [colorValue, setColorValue] = useState("#ffffff");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(colorValue);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="color">Choose a color:</label>
        <input
          type="color"
          id="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Color
      </button>
    </form>
  );
}

export default NewColor;
