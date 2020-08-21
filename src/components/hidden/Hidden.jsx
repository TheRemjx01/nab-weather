const Hidden = ({ when, children }) => {
  if (when) {
    return null;
  }

  return children;
};

export default Hidden;
