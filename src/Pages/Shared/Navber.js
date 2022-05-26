import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import titleImage from '../../assets/images/jr-icon (1).png'
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    console.log(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dahsboard</Link></li>
        }
        <li>{user ? <>
            <span>{user?.displayName}</span>
            <button className="btn btn-ghost" onClick={logout} >Sign Out</button>
        </> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-16' src={titleImage} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;