import { useQuery } from "@tanstack/react-query";

import { getPosts } from "services/user";




function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);

}

export default PostList;
