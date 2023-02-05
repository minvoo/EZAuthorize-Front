import { Link } from "react-router-dom";
import { LoginForm } from "../LoginPage/components/LoginForm";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="background">
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}>
            <LoginForm />
        </div>
      </div>
    </div>
  );
};
