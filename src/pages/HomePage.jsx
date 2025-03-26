import { useQuery } from "@tanstack/react-query";
import Loader from "src/components/modules/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getCategory } from "src/services/admin";
import { getAllPosts } from "src/services/user";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post_list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  const style = { display: "flex" };
  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
