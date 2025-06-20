import  { useState} from "react";
import { useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Button } from "antd";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("invalid username or password");
    }
  };

  //prevent login users

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Register form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-between">
            <Link to="/login">Already Registerd ? click here to login</Link>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
