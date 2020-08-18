import React, {useEffect} from 'react';

const Title = ({text}) => {
 useEffect(() => {
  document.title = text
 }, [text])
 return (
  <></>
 );
};

export default Title;