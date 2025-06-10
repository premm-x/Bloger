import { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../config/axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
          const response = await axiosInstance.post('/user/register', { username, email, password });

          if(response.status === 201){
            navigate('/signin');
          }
          setLoading(false);

        } catch (error) {
            setLoading(false);
          console.error('Error during registration:', error || error.message);
        }
    };


    return (
        <div className="flex min-h-[100vh]">

            <div className="flex-1 bg-[url('https://assets.gqindia.com/photos/6465c42c1373b7c5f4e18e46/3:2/w_1620,h_1080,c_limit/rock-climbing.jpg')] 
      bg-cover bg-center hidden md:block relative rounded-br-2xl rounded-tr-2xl">
                <div className="h-full flex items-center justify-center p-12">
                    <div className="max-w-md h-[450px] z-10 flex flex-col justify-between">
                        <h2 className="text-5xl font-bold mb-6">Look first / Then peak.</h2>
                        <div>
                            <p className="text-gray-900 absolute bottom-6 right-5">~Trading-Buddy</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full rounded-tr-2xl rounded-br-2xl absolute top-0 left-0 bg-[rgb(0,0,0,0.1)]'></div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-sm ">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Password
                            </label>
                            <input
                                minLength={8}
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-gray-800 bg-black transition duration-200"
                        >
                            { loading ? "creating..." : "Create account" }
                        </button>
                    </form>
                    <p className="mt-8 text-center text-gray-900">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-blue-500 hover:text-blue-800">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
