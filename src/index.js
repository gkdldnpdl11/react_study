import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex01 from './step09_list/Ex01';
import Ex02 from './step09_list/Ex02';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';


const root = ReactDOM.createRoot(document.getElementById('root'));

// UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render로 전달하는 것임
// 1초마다 한번씩 생성, 시계할때만 사용함
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );  
// }, 1000);

root.render(
    // <Counter />
    // <Counter2 />
    // <Counter3 />
    // <Counter4 />
    // <SmartHome />
    // <SmartHome2 />
    // <TextInput />
    // <VideoExam />
    // <Sample01 />
    // <Sample02 />
    // <Sample03 />
    // <Sample04 />
    // <Sample05 />

    // 여기에서부터
        // <Ex01 isLoggedIn="false" /> =>  이런식으로 사용하면 문자를 사용한것으로 인식하고, 문자는 무조건 true로 인식함
        // <Ex01 isLoggedIn="" /> => false
        // <Ex01 isLoggedIn="내용" /> => true
        // <Ex01 isLoggedIn={true} />
        // <Ex02 isLoggedIn={false} />
        // <Ex03 />
        // <Ex04 msg={[1,2]} />
        // <Ex05 />
        // <Ex06 />
        // <Ex07 />     
    // 여기까지 step08 폴더

    // <Ex01 list={[1,2,3,4,5]} />
    // <Ex02 />
    // <NameForm />
    <SelectForm />
    
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
