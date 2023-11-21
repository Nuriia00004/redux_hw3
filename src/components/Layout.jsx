import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <header>
            <nav>
                <ul>
                <li>
                    <Link to={'/'}>PostList</Link>
                </li>
                </ul>
            </nav>
        </header>
        <Outlet/>
      </>
    
  );
};

export default Layout;

