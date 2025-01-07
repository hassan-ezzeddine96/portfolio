import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import LinkRounded from '@mui/icons-material/LinkRounded';
import '../assets/styles/Certificate.scss';

const labels1 = [
    "ReactJS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "SQL",
    "Postman",
    "Laravel",
    "Firebase",
    "PHP",
];

const labels2 = [
    "Databases",
    "Programming Languages",
];

const labels3 = [
    "Databases",
    "Programming Languages",
];
const labels4 = [
    "Flutter",
    "Dart",
    "Android Studio",
    "kotlin",
    "Firebase",
];
const labels5 = [
    "Django",
    "Django REST Framework",
    "python",
];
const labels6 = [
    "Git",
    "GitHub",
];
const labels7 = [
    "Django",
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "jQuery",
    "Amazon Web Services (AWS)",
    "Payments",
    "PostgreSQL",
];
const labels8 = [
    "Figma",
    "Web Design",
    "Logo Design",
    "User Interface (UI)",
    "User Experience (UX)",
    "Product Design",
];
const labels9 = [
    "ReactJs",
    "ReduxJs",
    "TypeScript",
    "Front-End Development",
];
const labels10 = [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Docker",
    "Git",
    "GitHub",
    "Unit Testing",
    "Amazon Web Services (AWS)",
    "Swagger API",
    "Serialization",
];

function Certificate() {
    return (
        <div className="container" id="certifications">
            <div className="certifications-container">
                <h1>Licences & Certifications</h1>
                <div className="certifications-grid">
                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-fc7bc423-9d07-46ed-8f0a-3fde98ea35b6/" target="_blank" rel="noreferrer">
                                        Backend REST API with Python & Django <LinkRounded /></a>
                                </h3>
                                <p>Issued Jan 2025</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels10.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-484f5dcd-aa54-4977-a27c-f4611f4c7f75/" target="_blank" rel="noreferrer">
                                        Modern React with Redux <LinkRounded /></a>
                                </h3>
                                <p>Issued Dec 2024</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels9.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-2d93d189-b1c9-42c8-8af0-6445122ef2ef/" target="_blank" rel="noreferrer">
                                        Complete Web & Mobile Designer: UI/UX, Figma <LinkRounded /></a>
                                </h3>
                                <p>Issued Nov 2024</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels8.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-09aee74f-2222-4c2e-8087-aef6a3999e2f/" target="_blank" rel="noreferrer">
                                        Python Django Ecommerce Web App <LinkRounded /></a>
                                </h3>
                                <p>Issued Aug 2024</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels7.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-114157dd-c0f2-4d48-b231-bbf43947166b/" target="_blank" rel="noreferrer">
                                        Git & GitHub Actions Bootcamp <LinkRounded /></a>
                                </h3>
                                <p>Issued Jul 2024</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels6.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-27204ede-af05-4a7c-8146-9c818099e4f8/" target="_blank" rel="noreferrer">
                                        Python and Django Full Stack Web Developer <LinkRounded /></a>
                                </h3>
                                <p>Issued Jul 2024</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels5.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1744243200&v=beta&t=X3NYspcK-elDnIoOmg7DTYpOvlyiuql3ds4KeaMcc98"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://www.udemy.com/certificate/UC-3ad3fdf2-48b2-4ccb-8193-f14e4e6e34fc/" target="_blank" rel="noreferrer">
                                        Flutter & Dart Mobile App Development <LinkRounded /></a>
                                </h3>
                                <p>Issued Feb 2023</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels4.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/C560BAQE7SEkY882aSg/company-logo_100_100/company-logo_100_100/0/1656114632675/esri_logo?e=1744243200&v=beta&t=U1Lpd1ZsF7UROqGj-1UEIhYxqZ7_NBCzk5AuuDVkzP8"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://drive.google.com/file/d/1YijcCzM5pNXcJJyHdmzsos-JBfhBQyF5/view" target="_blank" rel="noreferrer">
                                        Spatial Analysis Using ArcGIS Pro <LinkRounded /></a>
                                </h3>
                                <p>Issued Jan 2021</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels3.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/C560BAQE7SEkY882aSg/company-logo_100_100/company-logo_100_100/0/1656114632675/esri_logo?e=1744243200&v=beta&t=U1Lpd1ZsF7UROqGj-1UEIhYxqZ7_NBCzk5AuuDVkzP8"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://drive.google.com/file/d/1sie2C2nMgcOrhFbndXaP_4tOTSo29Pvq/view" target="_blank" rel="noreferrer">
                                        Data Interoperability for ArcGIS <LinkRounded /></a>
                                </h3>
                                <p>Issued Nov 2020</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels2.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="certification">
                        <div className="row">
                            <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFz1F71oMvrSA/company-logo_100_100/company-logo_100_100/0/1680258254699/se_factory_logo?e=1744243200&v=beta&t=gNb41dUPkb7dNVVbxKOyxL7ZQ9Jki1ZdtfMouhF_gxE"
                                alt="" width="60px" height="60px" />
                            <div className="column">
                                <h3>
                                    <a href="https://drive.google.com/file/d/1zKcKMjiF-OH1AdaI7pQhGGzSz0PfKrpa/view" target="_blank" rel="noreferrer">
                                        Full-Stack Web Development Bootcamp <LinkRounded /></a>
                                </h3>
                                <p>Issued Jan 2020</p>
                            </div>
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labels1.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;