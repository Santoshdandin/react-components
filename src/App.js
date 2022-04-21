import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import "./styles.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children pr</p>
      </Greet>
      <Greet name="clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}

        {/* <Greet name="Diana" heroName="Wonder woman" /> */}

        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder woman" /> */}
      </div>
    );
  }
}

export default App;
