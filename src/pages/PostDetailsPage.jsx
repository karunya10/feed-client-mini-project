import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../hooks/usePost";

function PostDetailsPage() {
  const { postid } = useParams();
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const filteredPost = posts.filter((post) => post._id === postid);

  return filteredPost.length > 0 ? (
    <div className="postAlign">{filteredPost[0].post}</div>
  ) : null;
}

export default PostDetailsPage;
