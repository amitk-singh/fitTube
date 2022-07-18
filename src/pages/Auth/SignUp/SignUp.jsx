
import './SignUp.css';
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();
    const { signupHandler, token } = useAuth();
    const [signUpDetails, setSignUpDetails] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });

    useEffect(() => {
        if (token) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      }, [token]);

    return (
        <>
            <section className='signup-page-container'>
              
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                signupHandler(
                  signUpDetails.email,
                  signUpDetails.password,
                  signUpDetails.firstname,
                  signUpDetails.lastname
                );
              }}
            >
              <div className="input">
                <label htmlFor="signup-email">Email</label>
                <input
                  required={true}
                  id="signup-email"
                  value={signUpDetails.email}
                  placeholder="user@gmail.com"
                  className="input-txt"
                  type="email"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="signup-first">First name</label>
                <input
                  id="signup-first"
                  value={signUpDetails.firstname}
                  placeholder="Sumit"
                  className="input-txt"
                  type="text"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      firstname: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input">
                <label htmlFor="signup-last">Last Name</label>
                <input
                  id="signup-last"
                  value={signUpDetails.lastname}
                  placeholder="Singh"
                  className="input-txt"
                  type="text"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="signup-password">Password</label>
                <input
                  required={true}
                  id="signup-password"
                  value={signUpDetails.password}
                  placeholder="********"
                  className="input-txt"
                  type="password"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="conf-password">Confirm Password</label>
                <input
                  id="conf-password"
                  value={signUpDetails.confirmpassword}
                  placeholder="********"
                  className="input-txt"
                  type="password"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      confirmpassword: e.target.value,
                    })
                  }
                />
              </div>

              <div >
                <div >
                  <input id="item-1" type="checkbox" name="checkbox-input" />
                  <label for="item-1">I accept all terms and conditions</label>
                </div>
              </div>

              <div >
                <button style={{cursor:"pointer"}} type="submit" className="primary-button">
                  Create Account
                </button>
              </div>

              <div >
                <a style={{cursor:"pointer"}} onClick={() => navigate("/login")}>Already a user? Login</a>
              </div>
            </form>

            </section>
        </>
    )
}

export default SignUp;
