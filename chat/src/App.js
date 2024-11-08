import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Second } from "./Second"

let sendarr = [
  {
    type: "sender",
    name: "Arun P",
    des: "Developer",
    message: "Hello guys!",
    time: "11:34am"
  },
  {
    type: "res",
    message: "Hello ",
    time: "11:34am"
  },
  {
    type: "sender",
    name: "Arun P",
    des: "Developer",
    message: "bye",
    time: "11:34am"
  },
  {
    type: "res",
    message: "Hello guys!",
    time: "11:34am"
  }

]
let resarr = []
function App() {
  // document.getElementById("usr_cir1").removeAttribute("aria-hidden");


  let [sendr_msg, setsendr_msg] = useState(sendarr)

  const bdyarea = document.querySelector('.bdy')
  // const msg_tip = document.querySelector('.msg_tip')

  let [isSenderTurn, setIsSenderTurn] = useState(true);
  const Store_value = (event) => {
    const t = new Date()
    const time = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const inputarea = document.querySelector('.typing')
    if (inputarea.value.trim() !== "") {
      if (isSenderTurn) {

        setsendr_msg([...sendr_msg, {
          type: "sender",
          name: "Arun P",
          des: "Developer",
          message: inputarea.value,
          time: time,

        }])
      }
      else {

        setsendr_msg([...sendr_msg, {
          type: "res  ",
          message: inputarea.value,
          time: time
        }])
      }
      setIsSenderTurn(!isSenderTurn)
    }

    return (
      <>
        <div class='chat_container'>
          <header class='head'>
            <div className='icon_contr'>
              <i id='usr_cir1 ' className='icon' class="fa-solid fa-circle-user"></i>
              <i id='usr_cir2 ' className='icon' class="fa-solid fa-circle-user"></i>
            </div>
            <div>
              <h4 className='title'>Team Unicorns</h4>
              <h6>last seen 45 minutes ago</h6>
            </div>
            <i id='menu_icon' class="fa-solid fa-ellipsis"></i>
          </header>
          <div class='bdy'>
            {/* <div class='msg_tip' ></div> */}
            <Message sender={sendr_msg} isSenderTurn={isSenderTurn}></Message>
          </div>
          <footer class='footer'>
            <i id='smil_emj' class="fa-solid fa-face-grin"></i>
            <input class='typing' type='text' placeholder='Start typing...'></input>
            <i class="fa-solid fa-at"></i><i onClick={Store_value} class="fa-regular fa-paper-plane"></i>
          </footer>

        </div>


      </>
    );

  }
  function Message(props) {
    // console.log(props.res.length)
    return (
      <div>


        {props.sender.length > 0 ?
          props.sender.map((value, index) => {

            return (
              <>
                {value.type == "sender" ? <div className='sender'>
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

                </div> : ""}
                {value.type == "res" ? <div className='res-cont'>

                  <div className='recive'>
                    <div className='message'>
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
                </div> : ""}
              </>
            )




          })
          : ""}

      </div >

    )

  }

}

export default App;
