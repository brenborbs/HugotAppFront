import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = props => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <>
      {props.allBlogs.length > 1 &&
        props.allBlogs.map(article => (
          <article className="blog-post-item">
            <div className="blog-post-img-container">
              <img
                src={article.document.data.hero_image}
                className="db"
                alt={article.document.data.hero_image}
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div className="blog-post-text-container">
              <h1>{article.document.data.title}</h1>

              <ReactMarkdown
                source={truncateSummary(article.document.content)}
              />

              <p>By {article.document.data.author}</p>
              <p>{reformatDate(article.document.data.date)}</p>
              <div
                className="btn-post-container"
                style={{ textAlign: "center" }}
              >
                <Link
                  key={article.slug}
                  href={{ pathname: `/blog/${article.slug}` }}
                >
                  <a className="btn-post-blog">Read More</a>
                </Link>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default BlogList;
