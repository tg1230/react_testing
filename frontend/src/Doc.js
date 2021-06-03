
import React from 'react';

function Doc(props) {

  return (
    <div className="docs_col">
      <p>{props.source.name}</p>
      <img src={URL.createObjectURL(props.source)} className="image" id={props.source.name} alt="image not found"/>
    </div>
  );
};

export default Doc;