import React from "react";

class Car extends React.Component {
    constructor(proop) {
      super(proop);
      this.state = 25;
    }
    render(){
      return (
        <p>hello class {this.state} {this.prop.brand}</p>
        );
    
  }
  }

  export default Car;