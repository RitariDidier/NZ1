import React from "react";
import Transition from "../Transition";

const LoginScreen = ({ history }) => {
  console.log("Rendered");

  function toggleForm() {
    var container = document.querySelector(".container");
    container.classList.toggle("active");
  }

  const handleClick = () => {
    console.log("Redirecting to Home");
    history.push("/home");
  };
  return (
    <Transition>
      <main className="loginScreenComponent">
        <section>
          <div className="bg"></div>

          <div className="container">
            <div className="user signinBx">
              <div className="imgBx">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 54"
                  // style="enable-background:new 0 0 255 54;"
                  xmlSpace="preserve"
                >
                  <style type="text/css">{/* .st0{fill:#272725;} */}</style>
                  <g>
                    <path
                      className="st0"
                      d="M58.1,7.4c4.1,0,7.5,3.1,7.9,7.2c0.2-0.1,0.4-0.1,0.6-0.1c1.1,0,2,0.7,2.4,1.7c0-0.3,0-0.6,0-0.8
		c0-6.1-4.9-11-10.9-11.1C52,4.3,47,9.2,47,15.3c0,6.1,4.9,11,10.9,11.1c4.7,0,9-3,10.5-7.5v-0.2c0-0.2,0-0.4,0-0.6
		c-0.1-1.2-1.1-2.1-2.3-2c-1,0.1-1.9,0.9-2,1.9v0.1c0,0.5,0.2,1,0.6,1.4c-2.3,3.8-7.2,5-11,2.8s-5-7.2-2.8-11c1.5-2.4,4.1-3.9,7-3.9
		 M57.9,0.4c8.3,0,15,6.7,15,15c0,8.3-6.7,15-15,15c-8.3,0-15-6.7-15-14.9C42.9,7.2,49.6,0.5,57.9,0.4 M57.9,27.5
		c6.6,0,12-5.3,12.1-11.9s-5.3-12-11.9-12.1c-6.6,0-11.9,5.2-12.1,11.7v0.1C46,22,51.4,27.4,57.9,27.5 M131.5,0.9h-4.3l-11.3,10.8
		V0.8h-3v17.8L131.5,0.9z M125,12.7l12.4-11.8h-4.3L121,12.4l13.3,17.5h3.8L125,12.7z M112.8,20.2v9.6h3v-8.4l4.1-3.9l9.3,12.2h3.8
		l-12.7-16.7L112.8,20.2z M108.7,29.8h3v-29h-2.9L108.7,29.8z M98.1,19.2c5-2.2,7.2-8.1,5-13.1c-1.6-3.6-5.2-5.9-9.1-5.9H76.2v29.6
		h3V3.3h14.9c3.8-0.1,7,2.8,7.2,6.6s-2.8,7-6.6,7.2H93l8.9,12.8h3.6L98.1,19.2z M91.6,17.1H80.2v12.8h3.1v-9.7h6.9l6.8,9.7h3.6
		L91.6,17.1z M83.3,13h10.9c1.6,0,2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8c0,0,0,0,0,0H83.3V13z M100,10.2c0,3.2-2.6,5.8-5.8,5.8
		c0,0,0,0,0,0H80.3V4.4h13.8c3.2,0,5.8,2.6,5.8,5.8 M39.5,0.8h-3.1L31,17.6L26.2,0.8H23l7.9,27.1L39.5,0.8z M14.5,29.8h3.1l4.8-16.4
		l4.8,16.4h3.1L22.4,2.8L14.5,29.8z M1,0.8l9.3,29h3.1l-9.3-29H1z M21.9,0.8h-3.1l-4.9,16.8L8.4,0.8H5.3L14,27.9L21.9,0.8z
		 M40.7,0.8h3.1l-9.3,29h-3.1L40.7,0.8z"
                    />
                    <path
                      className="st0"
                      d="M166,21.1c0-1.8-0.5-3.5-1.5-5c-0.9-1.3-2.2-2.2-3.6-2.9l0,0.1c-2.5-0.9-5.1-1.5-7.8-1.6
		c-1.9-0.1-3.8-0.5-5.6-1.1c-0.9-0.4-0.9-0.6-0.9-1.2c0-0.3,0-0.6,0.7-1c1.6-0.7,3.3-1,5-0.9c2.6,0,5.5,0.4,7.3,3.4l2.5-1.6
		c-2-3.2-5.1-4.8-9.9-4.8c-7.5,0-8.7,3.1-8.7,4.9c-0.1,1.7,1,3.3,2.7,3.9c2.1,0.7,4.3,1.2,6.5,1.3c2.4,0.2,4.7,0.6,6.9,1.5
		c2,0.8,3.3,2.8,3.3,5c0.1,1.9-1,3.8-2.7,4.7c-2.4,1.2-5.2,1.8-7.9,1.6c-5.9,0-9.7-2-11.8-6.2l-2.7,1.3c1.1,2.4,3,4.4,5.4,5.8
		c2.8,1.5,6,2.2,9.2,2.1c3.3,0.2,6.6-0.5,9.5-2.1C164.4,26.8,166,24.1,166,21.1z"
                    />
                    <polygon
                      className="st0"
                      points="226.6,7.8 226.6,4.9 206.4,4.9 206.4,14.8 224,14.8 224,11.8 209.4,11.8 209.4,7.8 	"
                    />
                    <path
                      className="st0"
                      d="M191.5,20.8l-8.7-18.7l-8.6,18.7H191.5z M182.9,9.2l3.9,8.5H179L182.9,9.2z"
                    />
                    <polygon
                      className="st0"
                      points="205.3,29.9 205.3,3.8 226.6,3.8 226.6,0.8 202.3,0.8 202.3,29.9 	"
                    />
                    <polygon
                      className="st0"
                      points="168.9,29.8 182.2,0.8 179,0.8 165.6,29.8 	"
                    />
                    <path
                      className="st0"
                      d="M144.6,17c2.4,0.9,5,1.4,7.6,1.6c1.9,0.1,3.9,0.5,5.7,1.1c1,0.4,1,0.7,1,1.4c0.1,0.5-0.2,1-0.7,1.2
		c-1.8,0.8-3.8,1.2-5.8,1c-5.5,0-7.2-2.1-8.1-3.9l-2.7,1.3c1.8,3.8,5.3,5.6,10.8,5.6l-0.1,0c2.5,0.2,5.1-0.3,7.3-1.5
		c1.4-0.8,2.2-2.2,2.1-3.8c0.1-1.8-1.1-3.5-2.8-4c-2.1-0.7-4.3-1.2-6.5-1.4c-2.3-0.2-4.6-0.6-6.8-1.4c-1.1-0.4-2.1-1.3-2.7-2.4
		c-1.4-2.5-0.4-5.7,2.1-7.1c2.2-1.1,4.6-1.6,7-1.5c5.1,0,8.6,1.7,10.8,5.3l2.5-1.6c-1.3-2.1-3-3.7-5.2-4.9c-5.3-2.5-11.4-2.5-16.7,0
		c-1.6,0.9-2.9,2.4-3.6,4.1C138.4,10.5,140.4,15.3,144.6,17z"
                    />
                    <polygon
                      className="st0"
                      points="224,15.9 206.4,15.9 206.4,29.9 209.4,29.9 209.4,18.9 224,18.9 	"
                    />
                    <polygon
                      className="st0"
                      points="236.5,22.8 236.5,18.8 251,18.8 251,15.8 233.5,15.9 233.5,25.8 254,25.8 254,22.8 	"
                    />
                    <polygon
                      className="st0"
                      points="253.7,7.9 253.7,4.9 233.5,4.9 233.5,14.8 251.1,14.8 251.1,11.8 236.5,11.8 236.5,7.9 	"
                    />
                    <polygon
                      className="st0"
                      points="232.5,3.8 253.8,3.8 253.8,0.8 229.4,0.8 229.4,29.8 254,29.8 254,26.8 232.5,26.8 	"
                    />
                    <polygon
                      className="st0"
                      points="195.5,29.8 191.9,21.8 173.8,21.9 170.1,29.9 173.4,29.9 175.7,24.8 190,24.8 192.3,29.8 	"
                    />
                    <polygon
                      className="st0"
                      points="183.6,0.8 196.8,29.8 200,29.8 186.8,0.8 	"
                    />
                  </g>
                </svg>

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
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 54"
                  // style="enable-background:new 0 0 255 54;"
                  xmlSpace="preserve"
                >
                  <style type="text/css">{/* .st0{fill:#272725;} */}</style>
                  <g>
                    <path
                      className="st0"
                      d="M58.1,7.4c4.1,0,7.5,3.1,7.9,7.2c0.2-0.1,0.4-0.1,0.6-0.1c1.1,0,2,0.7,2.4,1.7c0-0.3,0-0.6,0-0.8
		c0-6.1-4.9-11-10.9-11.1C52,4.3,47,9.2,47,15.3c0,6.1,4.9,11,10.9,11.1c4.7,0,9-3,10.5-7.5v-0.2c0-0.2,0-0.4,0-0.6
		c-0.1-1.2-1.1-2.1-2.3-2c-1,0.1-1.9,0.9-2,1.9v0.1c0,0.5,0.2,1,0.6,1.4c-2.3,3.8-7.2,5-11,2.8s-5-7.2-2.8-11c1.5-2.4,4.1-3.9,7-3.9
		 M57.9,0.4c8.3,0,15,6.7,15,15c0,8.3-6.7,15-15,15c-8.3,0-15-6.7-15-14.9C42.9,7.2,49.6,0.5,57.9,0.4 M57.9,27.5
		c6.6,0,12-5.3,12.1-11.9s-5.3-12-11.9-12.1c-6.6,0-11.9,5.2-12.1,11.7v0.1C46,22,51.4,27.4,57.9,27.5 M131.5,0.9h-4.3l-11.3,10.8
		V0.8h-3v17.8L131.5,0.9z M125,12.7l12.4-11.8h-4.3L121,12.4l13.3,17.5h3.8L125,12.7z M112.8,20.2v9.6h3v-8.4l4.1-3.9l9.3,12.2h3.8
		l-12.7-16.7L112.8,20.2z M108.7,29.8h3v-29h-2.9L108.7,29.8z M98.1,19.2c5-2.2,7.2-8.1,5-13.1c-1.6-3.6-5.2-5.9-9.1-5.9H76.2v29.6
		h3V3.3h14.9c3.8-0.1,7,2.8,7.2,6.6s-2.8,7-6.6,7.2H93l8.9,12.8h3.6L98.1,19.2z M91.6,17.1H80.2v12.8h3.1v-9.7h6.9l6.8,9.7h3.6
		L91.6,17.1z M83.3,13h10.9c1.6,0,2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8c0,0,0,0,0,0H83.3V13z M100,10.2c0,3.2-2.6,5.8-5.8,5.8
		c0,0,0,0,0,0H80.3V4.4h13.8c3.2,0,5.8,2.6,5.8,5.8 M39.5,0.8h-3.1L31,17.6L26.2,0.8H23l7.9,27.1L39.5,0.8z M14.5,29.8h3.1l4.8-16.4
		l4.8,16.4h3.1L22.4,2.8L14.5,29.8z M1,0.8l9.3,29h3.1l-9.3-29H1z M21.9,0.8h-3.1l-4.9,16.8L8.4,0.8H5.3L14,27.9L21.9,0.8z
		 M40.7,0.8h3.1l-9.3,29h-3.1L40.7,0.8z"
                    />
                    <path
                      className="st0"
                      d="M166,21.1c0-1.8-0.5-3.5-1.5-5c-0.9-1.3-2.2-2.2-3.6-2.9l0,0.1c-2.5-0.9-5.1-1.5-7.8-1.6
		c-1.9-0.1-3.8-0.5-5.6-1.1c-0.9-0.4-0.9-0.6-0.9-1.2c0-0.3,0-0.6,0.7-1c1.6-0.7,3.3-1,5-0.9c2.6,0,5.5,0.4,7.3,3.4l2.5-1.6
		c-2-3.2-5.1-4.8-9.9-4.8c-7.5,0-8.7,3.1-8.7,4.9c-0.1,1.7,1,3.3,2.7,3.9c2.1,0.7,4.3,1.2,6.5,1.3c2.4,0.2,4.7,0.6,6.9,1.5
		c2,0.8,3.3,2.8,3.3,5c0.1,1.9-1,3.8-2.7,4.7c-2.4,1.2-5.2,1.8-7.9,1.6c-5.9,0-9.7-2-11.8-6.2l-2.7,1.3c1.1,2.4,3,4.4,5.4,5.8
		c2.8,1.5,6,2.2,9.2,2.1c3.3,0.2,6.6-0.5,9.5-2.1C164.4,26.8,166,24.1,166,21.1z"
                    />
                    <polygon
                      className="st0"
                      points="226.6,7.8 226.6,4.9 206.4,4.9 206.4,14.8 224,14.8 224,11.8 209.4,11.8 209.4,7.8 	"
                    />
                    <path
                      className="st0"
                      d="M191.5,20.8l-8.7-18.7l-8.6,18.7H191.5z M182.9,9.2l3.9,8.5H179L182.9,9.2z"
                    />
                    <polygon
                      className="st0"
                      points="205.3,29.9 205.3,3.8 226.6,3.8 226.6,0.8 202.3,0.8 202.3,29.9 	"
                    />
                    <polygon
                      className="st0"
                      points="168.9,29.8 182.2,0.8 179,0.8 165.6,29.8 	"
                    />
                    <path
                      className="st0"
                      d="M144.6,17c2.4,0.9,5,1.4,7.6,1.6c1.9,0.1,3.9,0.5,5.7,1.1c1,0.4,1,0.7,1,1.4c0.1,0.5-0.2,1-0.7,1.2
		c-1.8,0.8-3.8,1.2-5.8,1c-5.5,0-7.2-2.1-8.1-3.9l-2.7,1.3c1.8,3.8,5.3,5.6,10.8,5.6l-0.1,0c2.5,0.2,5.1-0.3,7.3-1.5
		c1.4-0.8,2.2-2.2,2.1-3.8c0.1-1.8-1.1-3.5-2.8-4c-2.1-0.7-4.3-1.2-6.5-1.4c-2.3-0.2-4.6-0.6-6.8-1.4c-1.1-0.4-2.1-1.3-2.7-2.4
		c-1.4-2.5-0.4-5.7,2.1-7.1c2.2-1.1,4.6-1.6,7-1.5c5.1,0,8.6,1.7,10.8,5.3l2.5-1.6c-1.3-2.1-3-3.7-5.2-4.9c-5.3-2.5-11.4-2.5-16.7,0
		c-1.6,0.9-2.9,2.4-3.6,4.1C138.4,10.5,140.4,15.3,144.6,17z"
                    />
                    <polygon
                      className="st0"
                      points="224,15.9 206.4,15.9 206.4,29.9 209.4,29.9 209.4,18.9 224,18.9 	"
                    />
                    <polygon
                      className="st0"
                      points="236.5,22.8 236.5,18.8 251,18.8 251,15.8 233.5,15.9 233.5,25.8 254,25.8 254,22.8 	"
                    />
                    <polygon
                      className="st0"
                      points="253.7,7.9 253.7,4.9 233.5,4.9 233.5,14.8 251.1,14.8 251.1,11.8 236.5,11.8 236.5,7.9 	"
                    />
                    <polygon
                      className="st0"
                      points="232.5,3.8 253.8,3.8 253.8,0.8 229.4,0.8 229.4,29.8 254,29.8 254,26.8 232.5,26.8 	"
                    />
                    <polygon
                      className="st0"
                      points="195.5,29.8 191.9,21.8 173.8,21.9 170.1,29.9 173.4,29.9 175.7,24.8 190,24.8 192.3,29.8 	"
                    />
                    <polygon
                      className="st0"
                      points="183.6,0.8 196.8,29.8 200,29.8 186.8,0.8 	"
                    />
                  </g>
                </svg>
                <h3>The Inspectorate Game</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
};

export default LoginScreen;
