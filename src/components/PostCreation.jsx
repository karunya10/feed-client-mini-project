import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function PostCreation() {
  const { createPost, fetchPosts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ post, owner: user._id });

    navigate("/");
  };

  return (
    <div className="mt-4 w-[50%] mx-auto border rounded-2xl">
      <form className="flex flex-col gap-1 p-5 " onSubmit={handleSubmit}>
        <input
          type="text"
          name="postField"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          className="mt-1 mx-auto border rounded-lg w-[50%] h-10 hover:scale-105 bg-amber-100"
          type="submit"
        >
          post
        </button>
      </form>
    </div>
  );
}

export default PostCreation;
