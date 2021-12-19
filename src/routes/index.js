import BlogList from "../pages/Blog/BlogList/index"
import BlogGrid from "../pages/Blog/BlogGrid/index"
import BlogDetails from "../pages/Blog/BlogDetails"

const publicRoutes = [
  { path: "/", component: BlogList },
  // { path: "/blog-grid", component: BlogGrid },
  { path: "/article/:articleID/:articleTitle", component: BlogDetails },
]

export { publicRoutes }
