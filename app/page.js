'use client'
import Image from "next/image"
import "./home.css" // optional styling

export default function Home() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ritik kamwal.pdf";
    link.download = "Ritik kamwal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // funtion to hire page
  const hireMe = () => {
    window.location.href = "/hire";
  };

  return (
    <div className="profile-container">
      {/* Left side with text */}
      <div className="profile-info">
        <h4>Welcome, I am</h4>
        <h1>Full Stack Developer</h1>
        <p><b>Let UI meets UX</b></p>

        <div className="profile-actions">
          <button onClick={downloadCV}>
            Download CV
            <span className="btnIcon">
              <Image src="/download.svg" alt="Download" width={20} height={15} />
            </span>
          </button>

          <button onClick={hireMe}>
           Contact Me
            <span className="btnIcon1">
              <Image src="/Graphics_arrow.svg" alt="Arrow" width={20} height={15}/>
            </span>
          </button>
        </div>
      </div>

      {/* Right side with profile picture */}
      <div className="profile-picture">
        <Image
          src="/ProfilePhoto.png"
          alt="Developer"
          width={300}
          height={300}
          className="rounded-img"
        />
      </div>
    </div>
  );
}
