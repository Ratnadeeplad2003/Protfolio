import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/deep.jpg'; // adjust path if needed


export default function Header() {
  return (
    <header className="header">
      <div className="container">
         <img src={logo} alt="Logo" className="header-logo" />
        <h1 className="logo">Ratnadeep Lad</h1>
        <nav className="nav">
          
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <a href="https://www.linkedin.com/in/ratnadeep-lad-20937b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ratnadeeplad2003" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
