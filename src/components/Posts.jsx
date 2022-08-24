import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  const baseUrl = "http://localhost:5000";
  const { id, image, translation } = post;
  // console.log(post);

  return (
    <Link to={`/posts/${id}`} className="posts__link">
      <div className="posts">
        <img src={`${baseUrl}/${image}`} alt={`${translation.title}`} />
        <p>{translation.title}</p>
      </div>
    </Link>
  );
};

export default Posts;
