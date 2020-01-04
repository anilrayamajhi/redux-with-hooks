import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import { Question } from "../components/question";
import { Header } from "../components/Header";
import { Result } from "../components/result";

function QuestionResult() {
  return (
    <div>
      <Header />
      {/* ROUTER IS HERE                 */}
      <Switch>
        <Route path="/qr/q/:id" exact component={Question}></Route>
        <Route
          path="/qr/r/:id"
          exact
          render={props => <Result {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

QuestionResult.propTypes = {
  classes: PropTypes.object.isRequired
};

export { QuestionResult };
