import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="Footer-container">
        <div className="rowFooter">
          <div className="topicFooter">
            <h6>About</h6>
            <p>Pineapple.com is an initiative to help the upcoming programmers with the code. Pineapple focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that use CSS for styling and to improve UI designs.</p>
          </div>
          <div className="topicFooter">
            <h6>Top Tutorials</h6>
            <ul className="footer-links">
              <li><a href="#">CSS</a></li>
              <li><a href="#">Animation</a></li>
              <li><a href="#">Embeds</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
          <div className="topicFooter">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-hr'> <hr /></div>
      </div>
      <div className="Footer-container">
        <div className="rowFooter">
          <div>
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
              <a href="#"> PineApple</a>.
            </p>
          </div>
          <div>
            <ul className="social-icons">
              <li><a href="#" className="facebook" target="_blank"> <FacebookIcon /></a></li>
              <li><a href="#" className="github"  target="_blank"><GitHubIcon /></a></li>
              <li><a href="#" className="linkedin"  target="_blank"><LinkedInIcon /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
