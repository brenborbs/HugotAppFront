import Link from "next/link";
import moment from "moment";
import { API } from "../../config";

// Notes: OnError cannot image cannot show on tags and categories
const Card = ({ post }) => {
  return (
    <React.Fragment>
      <article className="quote-card">
        <div className="quote-img-container">
          <img
            src={`${API}/post/photo/${post.slug}`}
            alt={post.about}
            className="quote-img"
            onError={i => (i.target.src = "/static/images/noah-silliman.jpg")}
          />
          <div className="overlay">
            <div className="content">
              <Link href={`/posts/${post.slug}`}>
                <a>
                  <p>{post.body}</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="quote-footer">
          <div className="quote-info">
            {/* <Link href={`/profile/${post.postedBy.name}`}> */}
            <a>
              {" "}
              <p className="quote-btn">
                Posted on {moment(post.updatedAt).format("MMMM D, YYYY")}
                {/* {post.postedBy.name} */}
              </p>
            </a>
            {/* </Link> */}

            {/* <div className="quote-details"> */}

            {/* </div> */}
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Card;
