import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="cover-home">
        <div className="cover-banner">
          <h1 className="cover-title">hugot!</h1>
          <p className="cover-text">
            A Collection of fun and witty famous hugot lines made by various
            hugot creators. Create one your's today and share with your friends.
          </p>
          <Link href="/posts">
            <a className="btn-white">Explore More</a>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-brand">
          {" "}
          hugot! © {new Date().getFullYear()} hugot.com{" "}
        </p>
        <div className="footer-container">
          <ul className="footer-links">
            <Link href="/about">
              <a>About </a>
            </Link>
            /
            <Link href="/contact">
              <a> Contact </a>
            </Link>
            /
            <Link href="/term">
              <a> Terms </a>
            </Link>
            /
            <Link href="/policy">
              <a> Policy</a>
            </Link>
          </ul>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
