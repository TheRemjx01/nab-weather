import React from 'react';

const Title = ({text}) => {
 React.useEffect(() => {
  document.title = text
 }, [text])
 return (
  <></>
 );
};

export default Title;