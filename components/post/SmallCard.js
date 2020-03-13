import { API } from "../../config";

const SmallCard = ({ post }) => {
  return (
    <React.Fragment>
      <div className="sm-card-prof">
        <div className="sm-card-container" style={{ position: "relative" }}>
          <img
            src={`${API}/post/photo/${post.slug}`}
            alt={post.about}
            style={{ width: "100%" }}
            onError={i => (i.target.src = "/static/images/noah-silliman.jpg")}
          />
          <div className="overlay-sm">
            <div className="content">
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SmallCard;
