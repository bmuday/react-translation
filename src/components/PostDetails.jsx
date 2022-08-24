import { Link, useParams } from "react-router-dom";

const PostDetails = ({ posts }) => {
  let { id } = useParams();
  // console.log(posts);

  const { translation } = posts[id - 1];
  return (
    <div className="post__details">
      <p>{translation.title}</p>
      <p>{translation.description}</p>
      <Link to="/posts">Back</Link>
    </div>
  );
};

export default PostDetails;
