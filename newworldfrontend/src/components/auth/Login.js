import React from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const username = React.createRef();
  const password = React.createRef();
  const invalidDialog = React.createRef();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("newworld_token", res.token);
        history.push("/");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>New World Market</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputUsername">User name </label>
            <input
              ref={username}
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset
            style={{
              textAlign: "center",
            }}
          >
            <button className="btn btn-1 btn-sep icon-send" type="submit">
              Sign In
            </button>
          </fieldset>
        </form>
      </section>

    </main>
  );
};