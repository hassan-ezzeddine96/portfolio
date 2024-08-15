import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQG9oUF_lLSU4g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673820336394?e=1729123200&v=beta&t=77B5aoOtVIxijQdkYWmKe2tvRhymfxFJsNW9JAy7rkc" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hassan-ezzeddine96" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hassan-ezzeddine-b01963171/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hassan Ezzeddine</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hassan-ezzeddine96" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hassan-ezzeddine-b01963171/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;