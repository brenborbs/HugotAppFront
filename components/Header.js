import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { APP_NAME } from "../config";
import NProgress from "nprogress";
import { signout, isAuth } from "../actions/auth";
// import ActiveLink from "../helpers/activeLink";
// import Submenu from "./Submenu";

import "../node_modules/nprogress/nprogress.css";

// Check Router(Routing) Events from NextJS docs
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header id="header">
      <nav>
        <div id="nav-top">
          <Link href="/">
            <h3 className="nav__logo">{APP_NAME}</h3>
          </Link>
          <div id="menu-btn" onClick={toggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        <ul id="links" className={navOpen ? "show" : "hide"}>
          <li>
            <Link href="/posts">
              <a>Hugots</a>
            </Link>
          </li>

          <li>
            <Link href="/tags/bisaya">
              <a>Bisaya</a>
            </Link>
          </li>

          <li>
            <Link href="/tags/tagalog">
              <a>Tagalog</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          {isAuth() && isAuth().role === 0 && (
            <Link href="/user">
              <li>
                <a>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  {/* {`${isAuth().name}'s Dashboard`} */}
                </a>
              </li>
            </Link>
          )}
          {isAuth() && isAuth().role === 1 && (
            <Link href="/admin">
              <li>
                <a>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  {/* {`${isAuth().name}'s Dashboard`} */}
                </a>
              </li>
            </Link>
          )}

          {!isAuth() && (
            <Link href="/signin">
              <li>
                <a className="btn__header">Signin</a>
              </li>
            </Link>
          )}
          {isAuth() && (
            <Link href="/signin">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => signout(() => Router.replace(`/signin`))}
              >
                <a>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </a>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
