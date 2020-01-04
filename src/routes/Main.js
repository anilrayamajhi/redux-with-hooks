import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Introduction } from "../components/introduction";
import { QuestionResult } from "./QuestionResult";
import Footer from "../components/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route path="/qr" component={QuestionResult} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
