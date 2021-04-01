import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import loading from "./components/Loading/Loading";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <Switch>
      <Route path={"/test"} exact={true}>
        <Suspense fallback={loading}>
          <Header />
        </Suspense>
      </Route>
      <Route path={"*"}>
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
