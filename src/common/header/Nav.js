import React from "react";
import { Link } from "react-router-dom";
import { SiTwitter, SiDiscord } from "react-icons/si";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="/#faq">FAQ</a>
      </li>
      <ul className="social-icon social-default transparent-with-border mt--15 ml--5 mr--5">
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <SiTwitter />
          </a>
        </li>
        <li>
          <a href="https://discord.com" target="_blank" rel="noreferrer">
            <SiDiscord />
          </a>
        </li>
      </ul>
    </ul>
  );
};
export default Nav;
