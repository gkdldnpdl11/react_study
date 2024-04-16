import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './step01_jsx/Library';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcome';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';



const root = ReactDOM.createRoot(document.getElementById('root'));

// UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.rander로 전달하는 것임
// 1초마다 한번씩 생성, 시계할때만 사용함
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );  
// }, 1000);

// component 합성 
// root.render(
//   <React.StrictMode>
//     <Welcome name="Sara" />
//     <Welcome name="Cahal" />
//     <Welcome name="Edite" />
//   </React.StrictMode>
// );  

root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
