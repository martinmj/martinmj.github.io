import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Home</h1>
                    <h2 className="App-sub-header">Game Over</h2>
                    <nav>
                        <ul>
                            <li role="navigation" className="layoutLink">
                                <Link to="/">Home</Link>
                            </li>
                            <li role='navigation' className="layoutLink">
                                <Link to="/misc">Misc</Link>
                            </li >
                        </ul>
                    </nav>
                </header>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;