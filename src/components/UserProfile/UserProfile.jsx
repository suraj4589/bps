import React, { useState } from 'react';
import './UserProfile.css';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchResult(`Search result for "${searchQuery}"`);
  };

  const handleVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setSearchResult(`Search result for "${transcript}"`);
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition:', event.error);
    };
  };

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <nav className="profile-nav">
        <ul className="nav-list">
          <li>
            <div className="dropdown">
              <button className="profile-button">
                <img
                  src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                  alt="Profile"
                  className="profile-photo"
                />
              </button>
              <div className="dropdown-content">
                <a href="#">View profile</a>
                <a href="#">Account</a>
                <a href="#">Discover</a>
              </div>
            </div>
          </li>
          <span className="profile-name">Username</span>
          <li>
            <button className="nav-button">Booking</button>
          </li>
          <li>
            <button className="nav-button">Status</button>
          </li>
          <li>
            <button className="nav-button">Help</button>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <main className="profile-main">
        <h2>User Profile</h2>
        <p>Welcome to the user profile page!</p>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
          <button type="button" className="voice-button" onClick={handleVoiceSearch}>
            Voice Search
          </button>
        </form>
        {searchResult && <p className="search-result">{searchResult}</p>}
      </main>
    </div>
  );
};

export default UserProfile;
