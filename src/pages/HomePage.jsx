import PostList from "../components/PostList";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../hooks/usePost";

function HomePage() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <>
      <div className="bg-pink-200 m-20 mx-auto flex flex-col items-center text-center gap-6 rounded-3xl w-4xl">
        <h1 className="mb-4">Welcome to Feed!</h1>
        <p>
          Hello!, Welcome to the new era of blogging.
          <br />
          We expect the community to be good to each other and have fun sharing
          important and fun info/facts with the group members
        </p>
      </div>
      <div>
        {posts &&
          posts.map((post) => {
            return <PostList post={post} key={post._id} />;
          })}
      </div>
    </>
  );
}

export default HomePage;
