import React from 'react';
import '../userProfileCard.css';
import photo from '../images/photo.jpg';

export const UserProfileCard = () => {
  return React.createElement('div', { className: 'upc' }, 
    React.createElement('div', { className: 'gradient' }),
    React.createElement('div', { className: 'profile-down' },
      React.createElement('img', { src: photo, alt: 'Profile', className: 'profile-image' }),
      React.createElement('div', { className: 'profile-description' },
        React.createElement('h2', null, 'GOKUL K'), // Name
        React.createElement('p', null, 'I am a Student at Kongu Engineering College Erode.') // Description
      ),
      React.createElement('div', { className: 'profile-button' }, 
        React.createElement('a', { href: 'mailto:example@example.com' }, 'Contact')
      )
    )
  );
};

export default UserProfileCard;
