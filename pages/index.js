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
    </Layout>
  );
};

export default Index;
