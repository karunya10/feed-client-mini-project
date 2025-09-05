import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../hooks/usePost";

function PostList({ post, user }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const handleDelete = (e) => {
    e.stopPropagation();
    mutation.mutate(post._id);
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center m-20 mx-auto border h-15  text-center  rounded-3xl w-4xl my-4">
      <Link to={`/posts/${post._id}`}>
        <div>{post.post}</div>
      </Link>

      {user && post.owner._id == user._id ? (
        <div className="flex justify-center items-center gap-4">
          <button onClick={handleDelete} className="hover:scale-105">
            🗑️
          </button>

          <button className="hover:scale-105">
            <Link to={`edit/${post._id}`}> 🖋️</Link>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default PostList;
