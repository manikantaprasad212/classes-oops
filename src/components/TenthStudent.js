import React from 'react'

function TenthStudent(props) {
    console.log("Hey")
  console.log(props);
  return (<div>
    <h1>{props.name}</h1>
  </div>
  );
}

export default TenthStudent