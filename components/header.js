import Logo from "./logo";
import Link from "next/link";
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';


const Header = () => (
  <header>
    <Link href="/">
      <a className="logo" href="/">
        <Logo />
      </a>
    </Link>

    <nav>
      <a className="icon" target="_blank" href="https://twitter.com/0xHSN">
      <FiTwitter />
      </a> 
      
      <a className="icon" target="_blank" href="https://github.com/0xHSN">
        <FiGithub />
      </a>
    </nav>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav {
        padding: 10px 0 10px 5px;
      }

      nav a {
        padding: 6px 10px;
        display: inline-block;
        text-decoration: none;
        margin-right: 0px;
      }

      nav a.src {
        font-size: 13px;
        color: #333;
      }

      nav a.follow {
        font-weight: bold;
        color: #fff;
        background: #000;
        font-size: 13px;
      }

      a.logo {
        text-decoration: none;
        color: #000;
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }

      a.icon {
        color: #000;
        font-size: 20px;
      }

      @media (any-hover: hover) {
        a.logo:hover {
           text-decoration: underline;
        }

        a.icon:hover {
          color: grey;
       }
      }

      @media (min-width: 500px) {
        header {
          max-width: 42rem;
          margin: auto;
          padding: 10px 0;
        }

        nav {
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
