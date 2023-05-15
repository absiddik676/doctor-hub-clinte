import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const newLocation = location?.state?.location?.pathname || '/'
        
    const handleSubmit = e => {
        e.preventDefault();
        const  form = e.target;
        const email = form.email.value
        const password = form.password.value
        login(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(newLocation)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto w-1/3 items-center h-screen">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Login</h2>
                   
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Login" />
                        
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-500 text-sm">Have not a account please <Link className='text-blue-700 font-bold' to='/Register'>Register</Link> </p>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Login;