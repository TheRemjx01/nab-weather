import React from "react";
import PropTypes from "prop-types";

const Title = ({ text }) => {
  React.useEffect(() => {
    document.title = text;
  }, [text]);
  return null;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
