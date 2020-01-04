import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { useFetch, useStore } from "../../hooks/index";
import { puke } from "../../utility";

function Introduction() {
  useFetch({ initialUrl: "cms/5df401ecacdf522d94a5f73c", method: "GET" });
  const { state } = useStore(),
    { cms } = state;

  return (
    <div>
      Introduction
      {!!cms.isLoading && <h1>Loading ...</h1>}
      {!cms.isLoading && cms.data && puke(cms.data)}
      <Link to="/qr/q/1">
        <Button color="primary"> Get Started </Button>
      </Link>
    </div>
  );
}

export default Introduction;
