import React from "react";

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = 25;
    }
    render(){
      return (
        <p>
          hello class {this.state} {this.props.brand}
          </p>
        );
    
  }
  }

  export default Car;