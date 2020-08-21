import React from "react";
import PropTypes from "prop-types";

const Hidden = ({ when, children }) => {
  if (when) {
    return null;
  }

  return children;
};

Hidden.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Hidden;
