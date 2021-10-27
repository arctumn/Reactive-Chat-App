import React, { useState } from 'react';
import './App.css';
import { Message, MessageBoard, User } from './Message';


const pedro:User = {
  nickname: "Pedro"
}
const carlos:User = {
  nickname: "Carlos"
}
const joao:User = {
  nickname: "Carlos"
}
const first_test:Message = {
  from_user:pedro,
  private_message:false,
  message:"Hello World!"
}
const second:Message = {
  from_user:carlos,
  private_message:false,
  message:"Goodbye World!"
}
const third:Message = {
  from_user:carlos,
  private_message:true,
  to_user: joao,
  message:"Não curto do Pedro!"
}


const App = () => {
  const [visable_messages] = useState([first_test,second,third])
  return (
    <div className="App">
      <MessageBoard {...{message_list: visable_messages, this_user:pedro}} />
    </div>
  );
}

export default App;
