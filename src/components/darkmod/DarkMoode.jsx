import React from 'react';
import './darkmoode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function DarkMoode() {
    const DarkHandele = () => {
      document.querySelector('body').classList.toggle('darkmood')
        console.log('Dark mode toggled!');
    };

    return (
        <div className="dark-mood-icon">
            <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandele} />
        </div>
    );
}
