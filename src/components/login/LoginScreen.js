import React from "react";

const LoginScreen = ({ history }) => {
  console.log("Rendered");

  function toggleForm() {
    var container = document.querySelector(".container");
    container.classList.toggle("active");
  }

  const handleClick = () => {
    console.log("Redirecting to Home");
    history.push("/");
  };
  return (
    <section>
      <div className="bg"></div>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            {/* <img src="./" alt="" /> */}
            <h3>The Inspectorate Game</h3>
          </div>
          <div className="formBx">
            <form>
              <h2>Sign In</h2>
              <div className="inputBox">
                <input required="required" type="text" name="" />
                <span>Name</span>
              </div>
              <div className="inputBox">
                <input required="required" type="password" name="" />
                <span>Password</span>
              </div>

              <input
                onClick={handleClick}
                type="submit"
                name=""
                value="login"
              />
              <p className="signup">
                Don't have an account?
                <a onClick={toggleForm}> Sign Up</a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBX">
          <div className="formBx">
            <form>
              <h2>Create an Account</h2>
              <div className="inputBox">
                <input required="required" type="text" name="" />
                <span>Name</span>
              </div>
              <div className="inputBox">
                <input required="required" type="email" name="" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input required="required" type="password" name="" />
                <span>Create Password</span>
              </div>
              <div className="inputBox">
                <input required="required" type="password" name="" />
                <span>Confirm Password</span>
              </div>

              <input type="submit" name="" value="Sign up" />
              <p className="signup">
                Already have an account?
                <a onClick={toggleForm}> Sign in</a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            {/* <img src="../../../public/assets/images/WSlogo.svg" alt="" /> */}
            <h3>The Inspectorate Game</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
