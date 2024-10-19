import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Second } from "./Second"

let arr = [
  {
    name: "Arun P",
    des: "Developer",
    message: "Hello guys!",
    time: "11:34am"
  },
  {
    name: "Ravi",
    des: "Sales",
    message: "Hello guys!",
    time: "11:56am"
  }
]
let resarr = [
  {
    message: "Hello guys!",
    time: "11:34am"
  },
  {
    message: "Hello guys!",
    time: "11:56am"
  }
]
function App() {
  let [value,setValue] = useState(resarr)
 
  const bdyarea = document.querySelector('.bdy')
  // const msg_tip = document.querySelector('.msg_tip')
  const store_value = (event) => {
    const inputarea = document.querySelector('.typing')
    setValue([...value,{
      message: inputarea.value,
      time: "11:56am"
    }])
    
  }
  return (
    <>
      <div class='chat_container'>
        <header class='head'></header>
        <div class='bdy'>
          {/* <div class='msg_tip' ></div> */}
          <Message sender={arr} res={value}></Message>
        </div>
        <footer class='footer'>
          <i id='smil_emj' class="fa-solid fa-face-grin"></i>
          <input class='typing' type='text'  placeholder='Start typing...'></input>
          <i class="fa-solid fa-at"></i><i onClick={store_value} class="fa-regular fa-paper-plane"></i>
        </footer>
      </div>

     
    </>
  );

}
function Message(props) {
  console.log(props.res.length)
  return (
    <div>


      {props.sender.length > 0 ?
        props.sender.map((value) => {
          return (
            <div className='sender'>
              <div className='message mes-sender'>
                <div className='use-case'>
                  <div className='user-name'>
                    {value.name}
                  </div>
                  <div className='des'>{value.des}</div>
                </div>
                {value.message}
                <div className='tip right'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                    <path d="M9 0C9 0 3.26206 0 1.8 0C0.33795 0 3.14713e-05 1.5 1.35003 3C2.70003 4.5 8.50063 9.5 9 11C9.49936 12.5 9 0 9 0Z" fill="#F2F2F7" />
                    <rect width="6" height="12" transform="matrix(-1 0 0 1 15 0)" fill="#F2F2F7" />
                  </svg>
                </div>
                <div className='time'>
                  {value.time}
                </div>
              </div>

            </div>
          )
        })
        : ""}
      <div className='res-cont'>
        {props.res.length > 0 ?
          props.res.map((value) => {
            return (<div className='recive'>
              <div className='message'>
                {value.message}
                <div className='tip'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                    <path d="M6 0C6 0 11.7379 0 13.2 0C14.6621 0 15 1.5 13.65 3C12.3 4.5 6.49937 9.5 6 11C5.50064 12.5 6 0 6 0Z" fill="#007AFF" />
                    <rect width="6" height="12" fill="#007AFF" />
                  </svg>
                </div>
                <div className='time'>
                  {value.time}
                </div>
              </div>

            </div>)

          })
          : ""}
      </div>
    </div >
  )
}



export default App;
