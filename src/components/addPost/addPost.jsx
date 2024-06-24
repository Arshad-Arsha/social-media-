import './addPost.css'




// fake api....
import CurrentUserData from '../../FackApis/CurrentUserData.js'

// font Awsome icon .............
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTag, faVideo } from '@fortawesome/free-solid-svg-icons'


export default function addPost() {
  return (
    <form className='postForm'>
        <div className="user form-top">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            <input type="text" placeholder="What's on your mind ?" />
            <button type='submit' className='btn btn-primary'>Post</button>
        </div>
        <div className="post-categories">
            <label htmlFor="file">
                <input type="file" id='file'/>
                <span><FontAwesomeIcon icon={faImage}/> Photos</span>
            </label>
            <label htmlFor="file">
                <input type="file" id='file'/>
                <span><FontAwesomeIcon icon={faVideo}/> Videos</span>
            </label>
            <span><FontAwesomeIcon icon={faTag}/> Tag</span>
            <span><FontAwesomeIcon icon={faSmile}/> Feelings</span>

        </div>
    </form>
  )
}
