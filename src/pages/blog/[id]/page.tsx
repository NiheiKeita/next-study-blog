// import { BlogView } from "@/views/BlogView";

// const BlogPage = (() => {
//     // return <>ddd</>
//   return <BlogView/>
// });

// export default BlogPage;


import { getAllPosts } from "../../../lib/index";
import { BlogList } from "@/components/BlogList";
import { NotionPost } from "@/types/NotionPost";

export default async function Page() {
  // var posts: NotionPost[];
  // const [posts, setPosts] = useState<NotionPost>();
  // useEffect( () => {
  //   setPosts(getAllPosts());
  // }, []);
  const posts: NotionPost[] = await getAllPosts();
  
  return (
    <div className="flex flex-col p-8 lg:w-4/6 mx-auto items-center">
      <BlogList notionPosts={posts} />
    </div>
  );
};