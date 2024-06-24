// import './Stories.css'


// //FackApis ...............
// import CurrentUserData from '../../FackApis/CurrentUserData'

// //FontAwesomeIcon ...............
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faAdd} from '@fortawesome/free-solid-svg-icons'


// export default function UserStories() {
//   return (
//     <div className='story userStory'>
//         <div className='user'>
//             <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
//         </div>
//         <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
// <label htmlFor='storyFiles'>
//     <FontAwesomeIcon icon={faAdd}/>
//     <input type='file' id='storiFiles' />
// </label>
// <h5>Add Story</h5>
//     </div>
//   )
// }

import React, { useState } from 'react';
import './Stories.css'; // Make sure your CSS file path is correct

// Fake data for demonstration
import CurrentUserData from '../../FackApis/CurrentUserData';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export default function UserStories() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className='story userStory'>
      {CurrentUserData.map(user => (
        <div key={user.id} className='user'>
          <img src={user.ProfieImage} alt={`Profile of ${user.name}`} />
        </div>
      ))}

      {CurrentUserData.map(user => (
        <img key={user.id} src={user.CoverPhoto} alt={`Cover of ${user.name}`} />
      ))}

      <label htmlFor='storyFiles'>
        <FontAwesomeIcon icon={faAdd} />
        <input
          type='file'
          id='storyFiles'
          onChange={handleFileChange}
          accept='image/*'
        />
      </label>

      <h5>Add Story</h5>
    </div>
  );
}