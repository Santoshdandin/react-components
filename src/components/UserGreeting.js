import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome Santosh</div>;

    //Third aproach
    // return (
    //   this.state.isLoggedIn?
    //   (<div>Welcome Santosh</div>) :
    //   (<div>Welcome Guest</div>)
    // )

    //Second aproach
    // let message
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome Santosh</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //first approach

    // if(this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Santosh
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Santosh</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
