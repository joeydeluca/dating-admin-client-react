import React from "react";
import SignIn from "./SignIn";
import Spinner from "./Spinner";
import SnackbarWrapper from "./SnackbarWrapper";

const App = () => (
  <div>
    <Spinner />
    <SignIn />
    <SnackbarWrapper />
  </div>
);

export default App;