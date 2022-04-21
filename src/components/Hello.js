import React from "react";

const Hello = (props) => {
  return (
    <div className="dummyClass">
      <h1>Hello Bujji</h1>
    </div>
  );
};

//Without jsx
// const Hello = () => {
//   return React.createElement('div', {id: 'hello', className:'dummyClass'}, React.createElement('h1',null, 'Hello Santu'))
// }

export default Hello;
