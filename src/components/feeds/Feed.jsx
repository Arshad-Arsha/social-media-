import './feeds.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Comments from '../comments/Comments';

export default function Feed({ fed }) {
  const [openCommet, setOpenCommet] = useState(false);

  const commentHandler = () => {
    setOpenCommet(!openCommet);
  };

  return (
    <div className='feed' key={fed.id}>
      <div className="top-content">
        <Link to='/profile/id'>
          <div className="user">
            <img src={fed.feedProfile} alt='' />
            <div>
              <h5>{fed.name}</h5>
              <small>1 Minutes Ago</small>
            </div>
          </div>
        </Link>
        <div className="icon-wrapper">
          <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt="" />
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <span><FontAwesomeIcon icon={faHeart} />14 Like</span>
        </div>
        <div className="action-item" onClick={commentHandler}>
          <span><FontAwesomeIcon icon={faComment} />2 Comment</span>
        </div>
        <div className="action-item">
          <span><FontAwesomeIcon icon={faShare} />1 Share</span>
        </div>
      </div>
      {openCommet && <Comments />}
    </div>
  );
}
