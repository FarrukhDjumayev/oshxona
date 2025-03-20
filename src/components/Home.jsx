import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Xush kelibsiz!</h1>
      <p>Bu sayt sizga ajoyib xizmatlarni taqdim etadi.</p>
      <Link to="/login">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Login qilish
        </button>
      </Link>
    </div>
  );
};

export default Home;
