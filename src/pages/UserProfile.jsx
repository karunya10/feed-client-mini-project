import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { PostContext } from "../context/PostContext";
import PostList from "../components/PostList";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const { posts, editPost, deletePost } = useContext(PostContext);
  const filteredPosts = posts.filter((post) => {
    return post.owner._id == user._id;
  });
  console.log(filteredPosts);
  return (
    <>
      <div>
        <h1 className="mx-auto text-center my-5">Welcome, {user.name}</h1>
        {filteredPosts.map((post) => {
          return (
            <PostList
              post={post}
              key={post._id}
              editPost={editPost}
              deletePost={deletePost}
              user={user}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserProfile;
