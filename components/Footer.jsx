import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">From Mockup to Markup</h2>

      <div
            className="footer-cards">
        {/* Social Media Card */}
        <div className="footer-card">
          <h3><u>Follow on <b>Social Media</b></u></h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/__rit.ik.__/"><Image src="/instagram.svg" alt="Instagram" width={30} height={30} /></a>
            <a href="https://www.linkedin.com/in/ritik-kamwal-9968b4250/"><Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} /></a>
            <a href="https://github.com/Ritik01417/"><Image src="github.svg" alt="GitHub" width={30} height={30} /></a>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="footer-card">
          <h3><u><b>Pay Using QR</b></u></h3>
        <Image src="/QRcode.png" alt="QR Code" width={100} height={100} className="qr-image" />
        </div>

        {/* Contact Info Card */}
        <div className="footer-card">
          <h3><u><strong>Contact Info</strong></u></h3>
          <a href="mail">ritikkamwal797@gmail.com</a><br />
          <a href="tel">+91 7988228787</a>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2025 <u><strong>RITIK KAMWAL</strong></u>
      </p>
    </footer>
  );
}
