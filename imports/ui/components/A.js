import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: 'darkkhaki'
};

export default function A(props) {
  return <div {...props} style={style} />;
}
