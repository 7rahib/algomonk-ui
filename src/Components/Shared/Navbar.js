import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-secondary text-secondary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-primary-content">
                        <li tabindex="0" className='bg-secondary'>
                            <Link to='/'>
                                Algorithms
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-secondary">
                                <li><Link to='/'>Breath-first Search</Link></li>
                                <li><Link to='/'>Depth-first Search</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/maze'>Create Maze</Link></li>
                        <li><Link to='/documentation'>Read Documentation</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>AlgoMonk</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 bg-secondary">
                    <li tabindex="0" className='bg-secondary'>
                        <Link to='/'>
                            Algorithms
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-secondary">
                            <li><Link to='/'>Breath-first Search</Link></li>
                            <li><Link to='/'>Depth-first Search</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/maze'>Create Maze</Link></li>
                    <li><Link to='/documentation'>Read Documentation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn" to='/maze'>Run Algorithm</Link>
            </div>
        </div>
    );
};

export default Navbar;