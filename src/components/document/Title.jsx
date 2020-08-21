import React from "react";

const Title = ({ text }) => {
  React.useEffect(() => {
    document.title = text;
  }, [text]);
  return null;
};

export default Title;
