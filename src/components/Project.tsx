import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import AndroidOutlined from '@mui/icons-material/AndroidOutlined';
import Public from '@mui/icons-material/Public';
import mock01 from '../assets/images/sokoban.png';
import mock02 from '../assets/images/compiler.png';
import mock03 from '../assets/images/learning.png';
import mock04 from '../assets/images/myshop.png';
import mock05 from '../assets/images/myshopMobile.png';
import mock06 from '../assets/images/nam.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                <a href="https://www.nam-co.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <h2>NAM</h2>
                    <a href="https://www.nam-co.com/" className="public" target="_blank" rel="noreferrer"><Public /></a>
                    <p>The Next Advanced Methods (NAM) website is a published construction company platform built with React.js. It showcases services, projects, and contact details in a sleek, responsive design, reflecting NAM's innovative approach to construction.</p>
                </div>
                <div className="project">
                    <div style={{ textAlign: 'center' }}>
                        <img src={mock05} className="zoom" alt="thumbnail" width="52%" />
                    </div>
                    <h2>My shop Mobile App</h2>
                    <a href="https://drive.google.com/uc?export=download&id=1Uebs33TJel67pYRzcEodo1yWC4lFE9To" className="android-icon" target="_blank" rel="noreferrer"><AndroidOutlined /></a>
                    <p>MyShop is a sleek, user-friendly mobile e-commerce app built with Flutter and Firebase to deliver a seamless shopping experience. Users can explore a wide range of products, securely pay with PayPal, and receive real-time updates on availability and prices. The app supports personalized accounts with a tailored browsing experience.</p>
                </div>
                <div className="project">
                    <a href="https://hassan-ezzeddine96.github.io/shop/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://hassan-ezzeddine96.github.io/shop/" target="_blank" rel="noreferrer"><h2>My shop</h2></a>
                    <a href="https://github.com/hassan-ezzeddine96/shop" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <p>MyShop is a comprehensive online e-commerce platform developed with Django, Python, and PostgreSQL, offering a streamlined shopping experience with PayPal for secure payments. Designed with HTML5, CSS, and Bootstrap, MyShop provides a clean, responsive user interface, ensuring smooth navigation and accessibility across devices.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/hassan-ezzeddine96/Learning" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/hassan-ezzeddine96/Learning" target="_blank" rel="noreferrer"><h2>Learning</h2></a>
                    <a href="https://github.com/hassan-ezzeddine96/Learning" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <p>Developed Learning Website App, using Laravel, ReactJs and Firebase .</p>
                </div>
                <div className="project">
                    <a href="https://github.com/hassan-ezzeddine96/Compiler-CtoVB" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/hassan-ezzeddine96/Compiler-CtoVB" target="_blank" rel="noreferrer"><h2>Compiler</h2></a>
                    <a href="https://github.com/hassan-ezzeddine96/Compiler-CtoVB" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <p>Creating a Compiler that Transform a Programming C code into VB code, using Flex and Bison .</p>
                </div>
                <div className="project">
                    <a href="https://hassan-ezzeddine96.github.io/sokoban/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://hassan-ezzeddine96.github.io/sokoban/" target="_blank" rel="noreferrer"><h2>Sokoban</h2></a>
                    <a href="https://github.com/hassan-ezzeddine96/sokoban" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <p>This is a puzzle video game in which the player pushes boxes around in a warehouse, trying to get them to storage locations, An Old Pc Game.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;