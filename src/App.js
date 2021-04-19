import { ChatEngine } from "react-chat-engine";
import Modal from "./component/loginform";
import ChatFeed from "./component/ChatFeed";
import "./App.css";

const projectID = "0f9aea98-2639-43b4-85f3-46589f741c41";

const App = () => {
  if (!localStorage.getItem("username")) return <Modal />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;

// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';
// import { render } from 'react-dom';
// import ChatFeed from './component/ChatFeed'
// import './App.css';
// import LoginForm from './component/loginform'
// function App() {
// if(!localStorage.getItem('userName'))
// 	return <LoginForm/>
//     return (
// 		<ChatEngine
// 			height='100vh'
// 			userName={localStorage.getItem('userName')}
// 			userSecret={localStorage.getItem('password')}
// 			projectID='0f9aea98-2639-43b4-85f3-46589f741c41'
//             renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
//         />
// 	);

// }

// export default App;
