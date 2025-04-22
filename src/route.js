import Home from "./components/pages/home/Home"
import Blogs from "./components/pages/blogs/blogs"
import PersonBlog from "./components/pages/blogs/person-blog/PersonBlog"
import AboutPage from "./components/pages/about/AboutPage"
import Pricing from "./components/pages/pricing/Pricing"
import Process from "./components/pages/process/Process"





let routes = [
    { path: '/', element: <Home /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <PersonBlog /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/price', element: <Pricing /> },
    { path: '/process', element: <Process /> },
]



export default routes