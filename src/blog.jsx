import { Outlet, Link } from "react-router-dom";
import { getAllBlogPosts } from "./data";

export default function Blog() {
  const allBlogposts = getAllBlogPosts();

  return (
    <div>
      <h1>Dette er Blog</h1>
      <nav>
        {allBlogposts.map((blogpost) => (
          <Link to={`/blog/${blogpost.number}`} key={blogpost.number}>
            {blogpost.titel}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
