import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebase";
import { useState } from "react";

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('')
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoginError('');
        setLoginSuccess('')
        console.log(email, password);

        if (!password) {
            setLoginError("invalid password")
            return;
        }
        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess("User Created Successfully.")
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid Password!')
                // setLoginError("Invalid Password")
            })
    }
    console.log(loginError);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {
                                loginError && <p className="text-red-500">{loginError}</p>
                            }
                            {
                                loginSuccess && <p className="text-green-500">{loginSuccess}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;