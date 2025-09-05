import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import PostList from "../components/PostList";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../hooks/usePost";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const filteredPosts = posts.filter((post) => {
    return post.owner._id == user._id;
  });
  console.log(filteredPosts);
  return (
    <>
      <div>
        <h1 className="mx-auto text-center my-5">Welcome, {user.name}</h1>
        {filteredPosts.map((post) => {
          return <PostList post={post} key={post._id} user={user} />;
        })}
      </div>
    </>
  );
}

export default UserProfile;
