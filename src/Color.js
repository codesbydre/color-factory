import { useParams, Navigate, useNavigate } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();

  if (!colors.includes(color) && !colors.includes(`#${color}`))
    return <Navigate to="/colors" />;

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: colors.includes(color) ? color : `#${color}`,
      }}
    >
      <h2>This is {color}!</h2>
      <h2>Isn't it beautiful?</h2>
      <button onClick={() => navigate("/colors")} className="btn btn-light">
        Go to Home
      </button>
    </div>
  );
}

export default Color;
