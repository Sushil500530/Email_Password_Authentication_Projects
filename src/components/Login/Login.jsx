import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebase";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('')
    const emailRef = useRef(null) ;
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoginError('');
        setLoginSuccess('')
        console.log(email, password);

        // if (!password) {
        //     setLoginError("invalid password")
        //     return;
        // }
        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setLoginSuccess("User Logged in Successfully.")
                }
                else{
                    alert('Your Email is not verified. please verified your email address!')
                }
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid Password!')
                // setLoginError("Invalid Password")
            })
    }
    const handleForgetPassword = ()=>{
        const currentEmail = emailRef.current.value ;
        if(!currentEmail){
            console.log(' reset password',emailRef.current.value);
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(currentEmail)
            ){
                console.log('please write a valid email');
                return ;
        }
        // console.log(currentEmail);
        // send validation email
        sendPasswordResetEmail(auth,currentEmail) 
        .then(() => {
            alert('please check your email!');
        })
        .catch(error => {
            console.error(error);
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
                                    <input 
                                    ref={emailRef}
                                     type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {
                                loginError && <p className="text-xl text-red-500">{loginError}</p>
                            }
                            {
                                loginSuccess && <p className="text-xl text-green-500">{loginSuccess}</p>
                            }
                            {/* jodi password create korar lage tahle avabe handle korte pari */}
                            <p>do you want to create this website? <Link to="/resister" className="text-blue-500">Please Resister</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;