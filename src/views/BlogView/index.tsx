"use server"

import { getAllPosts } from "../../lib/index";
import { BlogList } from "@/components/BlogList";
import { NotionPost } from "@/types/NotionPost";

export async function BlogView() {
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



// export default function BlogView() {
//   return <div>HOME</div>;
// export const revalidate = 60;

// export default async function BlogView() {
//   const posts: NotionPost[] = await getAllPosts();

//   return (
//     <div className="flex flex-col p-8 lg:w-4/6 mx-auto items-center">
//       <BlogList notionPosts={posts} />
//     </div>
//   );
// }