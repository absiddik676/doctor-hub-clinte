import React, { useContext } from 'react';
import logo from '../../../assets/New folder/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user,logout} = useContext(AuthContext)
    const handelLogout = () =>{
        logout()
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo}></img>
                </div>
                <div className="navbar-center gap-5 hidden lg:flex">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link to='/booking'>My Booking</Link>
                    {
                        user?.email?<button onClick={handelLogout} className='btn btn-primary'>Log Out</button>:<Link to='/login'><button className='btn btn-secondary'>Login</button></Link>
                    }
                </div>
                <div className="navbar-end flex">
                    <div className="form-control ">
                        <input type="text" placeholder="Search" className="input rounded-r-none input-bordered" />
                    </div>
                        <AiOutlineSearch className='text-xl  bg-slate-500 w-12 h-12 rounded-r-md text-blue-500'/>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;