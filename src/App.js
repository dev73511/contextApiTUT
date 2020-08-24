import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Agent = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
          <div>
            <h1>Agent Information</h1>
            <p>Mission Name: {context.data.mission_name}</p>
            <p>Mission Status: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Accept</button>
          </div>
        )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agent />
      </Provider>
    </div>
  );
};

export default App;
