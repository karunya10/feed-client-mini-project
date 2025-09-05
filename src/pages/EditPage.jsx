import { useState, useEffect } from "react";
// import { PostContext } from "../context/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { editPost, fetchPosts } from "../hooks/usePost";

function EditPage() {

  const [post, setPost] = useState({});
  const { postid } = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const updatePost = useMutation({
    mutationFn: (updatedPost) => editPost(postid, updatedPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const filteredPost = posts.find((post) => post._id === postid);

  useEffect(() => {
    setPost({ post: filteredPost.post });
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost.mutate(post);
    navigate("/");
  };

  return (
    <div className="mt-4 w-[50%] mx-auto border rounded-2xl">
      <form className="flex flex-col gap-1 p-5 " onSubmit={handleSubmit}>
        <input
          type="text"
          name="postField"
          value={post.post}
          onChange={(e) => setPost({ post: e.target.value })}
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

export default EditPage;
