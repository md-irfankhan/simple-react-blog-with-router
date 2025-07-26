
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">React Blog</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                           <a href="">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;