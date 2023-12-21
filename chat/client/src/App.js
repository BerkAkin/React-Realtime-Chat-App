import Container from "./components/Container";
import {ChatProvider} from "./context/ChatContext";
import React from "react";


function App() {

  return (


    <ChatProvider>
      <Container/>
    </ChatProvider>

  );
}

export default App;
