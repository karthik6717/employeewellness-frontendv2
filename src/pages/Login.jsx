// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// //import axios from "axios";
// import { setCookie } from "../utils/common";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../contexts/UserContext";
// import { login } from "../services/loginService";
// import Tablet_login from "../assets/Tablet_login.gif";

// const Login = () => {
//  // const { refreshUser } = useUser();
//   const navigate = useNavigate();
//  const { userInfo, setUserInfo } = useUser();

//   //const { setUserInfo } = useUser();

//   //state to manage password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   const [error, setError] = useState(false);

//   const [isLoading, setLoading] = useState(false);
//   const [validated, setValidated] = useState(false);



//   useEffect(() => {
//     if (userInfo) navigate("/dashboard");
//   }, [userInfo]);
  



//   //State to hold form data
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   //Fuction to handle change in form fields
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // update formdata state with new values
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   //fuction to handle form submission
//   const handleSubmit = async (event) => {
//     setError(false);
//     setLoading(true);
//     const form = event.currentTarget;
//     event.preventDefault();
//     //check if the form is valid
//     if (form.checkValidity() === false) 
//     {
//       event.stopPropagation();
//       setLoading(false)
//       setValidated(true)
//       return;
//     } 
  
//        try{

//        const res = await login(formData);
//           if (res.status === 200) 
//             {
//             setCookie("_USER_AUTH_", JSON.stringify(res.data));
//             setUserInfo(res.data);
//             window.dispatchEvent(new Event("storage"));
           
//             navigate("/dashboard");
//           }
//         }
//         catch(error)
//         {
//           setError(true);
//           console.error("Login failed:",error);
//         }finally{
//           setLoading(false);
//         }
//         setValidated(true);
  
     
//     };
   

//   return (
//     <div className="login-section align-content-center">
//       <Container>
//         <Row className="justify-content-center">
//           <Col xl={4} lg={5} md={7} xs={12}>
//             <div className="login-box rounded p-4 shadow-sm bg-light">
      
//             <img src={Tablet_login} className="float-start" alt="loading..." />

//               <h3 className="mb-4"> Sign In </h3>
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     name="email"
//                     placeholder="Enter email"
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid email.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group
//                   className="mb-3 position-relative"
//                   controlId="formBasicPassword"
//                 >
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     name="password"
//                     placeholder="Password"
//                     required
//                   />

//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid password.
//                   </Form.Control.Feedback>
//                   <span
//                     className="position-absolute top-50 end-0 me-2"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? "hide" : "show"}
//                   </span>
//                 </Form.Group>
//                 {error ? <p className="text-danger">User email or password is incorrect</p> : ""}


//                 <Button variant="primary" type="submit" disabled={isLoading}>
//                   {isLoading ? "loading..." : "Submit"}
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { setCookie } from "../utils/common";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { login } from "../services/loginService";
import Tablet_login from "../assets/Tablet_login.gif";

const Login = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUser();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (userInfo) navigate("/dashboard");
  }, [userInfo]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    setError(false);
    setLoading(true);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setLoading(false);
      setValidated(true);
      return;
    }

    try {
      const res = await login(formData);
      if (res.status === 200) {
        setCookie("_USER_AUTH_", JSON.stringify(res.data));
        setUserInfo(res.data);
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard");
      }
    } catch (error) {
      setError(true);
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
    setValidated(true);
  };

  return (
    <div className="login-section align-content-center">
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          {/* Left Column (Image) */}
          <Col lg={6} md={6} xs={12} className="text-center">
            <img
              src={Tablet_login}
              className="img-fluid"
              alt="Tablet Login"
              style={{ maxWidth: "80%", height: "auto" }} // Ensures responsiveness
            />
          </Col>

          {/* Right Column (Login Form) */}
          <Col lg={4} md={6} xs={12}>
            <div className="login-box rounded p-4 shadow-sm bg-light">
              <h3 className="mb-4 text-center">Sign In</h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                  </Form.Control.Feedback>
                  <span
                    className="position-absolute top-50 end-0 me-2"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? "hide" : "show"}
                  </span>
                </Form.Group>

                {error && <p className="text-danger">User email or password is incorrect</p>}

                <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

