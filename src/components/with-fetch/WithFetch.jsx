import React, { useState } from "react";
import PropTypes from "prop-types";

const WithFetch = ({
  Component,
  ErrorComponent,
  LoadingComponent,
  url,
  options,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  React.useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => {
        res.json().then((jsonRes) => {
          setData(jsonRes);
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, options, Component, ErrorComponent, LoadingComponent]);

  if (error) {
    return React.cloneElement(ErrorComponent, {
      error,
    });
  }
  if (loading) {
    return LoadingComponent;
  }

  return React.cloneElement(Component, {
    data,
  });
};

WithFetch.propTypes = {
  Component: PropTypes.node.isRequired,
  ErrorComponent: PropTypes.node.isRequired,
  LoadingComponent: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default WithFetch;
