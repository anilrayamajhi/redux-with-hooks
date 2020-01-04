import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/url_config";
import { useStore } from "./app-state";

const useFetch = ({ initialUrl, method }) => {
  const [url] = useState(initialUrl),
    type = `${method}_${initialUrl.split("/")[0]}`.toUpperCase();
  const { dispatch } = useStore();

  useEffect(() => {
    let isCurrent = true;

    const fetchData = async () => {
      dispatch({ type: "INIT" });

      try {
        let res = await fetch(`${API_BASE_URL}/${url}`, {
          headers: {
            Accept: "application/json"
          },
          method,
          timeout: 2000
        });
        if (isCurrent)
          res
            .clone()
            .json()
            .then(json =>
              dispatch({
                status: "SUCCESS",
                type,
                payload: json
              })
            );
      } catch (err) {
        if (isCurrent)
          dispatch({
            status: "FAILURE",
            type,
            payload: err
          });
      }
    };
    fetchData();
    // clean up when component un-mounts
    return () => (isCurrent = false);
  }, [url]);
};

export { useFetch };
