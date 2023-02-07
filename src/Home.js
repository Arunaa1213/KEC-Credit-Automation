import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>home</div>

      <Link to="/studentLogin">Student Login</Link>
      <Link to="/staffLogin">Staff Login</Link>
    </div>
  );
}

export default Home;
