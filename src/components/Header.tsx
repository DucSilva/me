import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [navbarPositionFixed, setNavbarPositionFixed] = useState(false);

  const handleNavbarPosition = () => {
    if (window.scrollY === 0) {
      setNavbarPositionFixed(false);
    } else if (!navbarPositionFixed) {
      setNavbarPositionFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarPosition);

    return () => {
      window.removeEventListener("scroll", handleNavbarPosition);
    };
  }, []);

  return (
    <header
      id="navbar"
      className={`default-container ${
        navbarPositionFixed ? "navbar-fixed" : ""
      }`}
    >
      <div className="wrapper">
        <Link href="/">
          <a className="navbar-logo" title="Home page">
            <img src="/logo.svg" alt="Logo" />
            <h1 className="navbar-logo-title">Github Profiles</h1>
          </a>
        </Link>

        <nav>
          <ul className="navbar-links">
            <li>
              <a
                href="https://www.linkedin.com/in/nguy%E1%BB%85n-minh-%C4%91%E1%BB%A9c-868007180/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my LinkedIn Profile"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DucSilva"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my Github Profile"
              >
                Github
              </a>
            </li>
            <li>
              <Link href="/search">
                <a title="Create your own Profile">Create Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
