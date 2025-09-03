import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import { useContext } from "react";

function PostDetailsPage() {
  const { postid } = useParams();
  const { posts } = useContext(PostContext);
  const filteredPost = posts.filter((post) => post._id === postid);

  return filteredPost.length > 0 ? (
    <div className="postAlign">{filteredPost[0].post}</div>
  ) : null;
}

export default PostDetailsPage;
