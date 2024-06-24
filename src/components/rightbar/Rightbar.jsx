import './rightbar.css'

//Compenents------------ 
import Message from '../message/Message'
import FirendReqe from '../firendReqe/FirendReqe'

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightBar-container">
        <Message />
        <FirendReqe />
      </div>
    </div>
  )
}
