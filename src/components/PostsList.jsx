import Posts from "./Posts";

const PostsList = ({ posts }) => {
  return (
    <ul className="posts__list">
      {posts?.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </ul>
  );
};
export default PostsList;
