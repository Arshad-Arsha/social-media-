import './userProfile.css'

//Fake apis.........
import CurrentUserData from '../../FackApis/CurrentUserData'

//font Awesom..............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'


export default function UserProfile() {
  return (
<div className="userProfile">
    <div className="cover-photos">
        <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
    </div>
    <div className="profile-info">
    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />  
     <div className="user-name">
        <h3>{CurrentUserData.map(user=>(user.name))}</h3>
        <h5>{CurrentUserData.map(user=>(user.username))}</h5>
     </div>
     <div className="profile-button">
        <Link to="/chatbox/id" >
            <button className='btn btn-primary'>
                <FontAwesomeIcon icon={faMessage}/>
            </button>
        </Link>
        <button className='btn btn-primary'>
                <FontAwesomeIcon icon={faFeed}/> Follow Me
            </button>
            <button className='btn '>
                <FontAwesomeIcon icon={faLink}/> 
            </button>
        </div>
<p className="bio">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt, distinctio, iusto cupiditate fugit quia natus eaque veritatis a delectus corrupti illum corporis deserunt nam nisi voluptates, quam excepturi eos?
</p>
     </div>
</div>  )
}
