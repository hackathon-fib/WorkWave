import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification,   defaultTheme } from "react-admin";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./login.scss";

const CLASS_NAME = "login-page";

const Login = ({ theme }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const BASE_URI = process.env.REACT_APP_SERVER_URL;
  const submit = (e: any) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid username or password")
    );
  };

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={`${CLASS_NAME}`} style={{backgroundColor: "#EDF0EE"}}>
        <div className={`${CLASS_NAME}__wrapper`}>

          <div className={`${CLASS_NAME}__box`} style={{backgroundColor: "#EDF0EE"}}>
            <img
                style={{height:"100px", width:"300px"}}
              src="/img/logo-transparent-svg.svg"
              alt="React-Admin"
            />
            <h2 style={{color: "#00493A"}}>Login</h2>
            <div className={`${CLASS_NAME}__box__message`}>

            </div>
            <form onSubmit={submit}>
              <label>
                <span>Username</span>

                <input
                  name="username"
                  type="textbox"
                  value={username}
                  style={{backgroundColor: "#606462"}}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <span>Password</span>

                <input
                  name="password"
                  type="password"
                  value={password}
                  style={{backgroundColor: "#606462"}}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <Button type="submit" variant="contained" color="primary"  style={{backgroundColor: "#00493A"}}>
                Log in
              </Button>
            </form>
          </div>


          <Notification />
        </div>
        <div className={`${CLASS_NAME}__read-more`}>

        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
