import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/Firebase";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Resister = () => {
    const [errorCatch, setErrorCatch] = useState('');
    const [successShow, setSuccessShow] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleResister = (e) => {
        e.preventDefault()
        const name = e.target.name.value ;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const acceptedTerms = e.target.terms.checked ;
        console.log(name,email,password,acceptedTerms);
        // reset error
        setErrorCatch('');
        setSuccessShow('');
        if (password.length < 6) {
            setErrorCatch('Password should be at least 6 characters or longer!')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorCatch("your password should have at least one uppercase characters.")
            return;
        }
        else if(!acceptedTerms){
            setErrorCatch("Please accept our terms and conditions!")
            return ;
        }
        // console.log(email,password);
        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(Result => {
                console.log(Result.user);
                setSuccessShow('user created successfully') ;
                //update profile's 
                updateProfile(Result.user,{
                    displayName:name,
                    photoURL:"https://example.com/jane-q-user/profile.jpg"
                })
                .then(() =>{
                    console.log("Profile Updated!");
                })
                .catch(error => {
                    console.error(error);
                })
                // send veification email 
                sendEmailVerification(Result.user)
                .then(()=> {
                    alert("please check your email and verify your account!")
                })
                .catch(error => {
                    console.error(error);
                })
            })
            .catch(error => {
                setErrorCatch(error.message)
            })
    }
    // console.log(errorCatch);
    // console.log(successShow);
    return (
        <div>
            <div className="bg-gray-400 w-1/2 mx-auto p-6 mt-5">
                <h2 className="text-3xl font-bold text-center">Please Resister</h2>
                <form onSubmit={handleResister} className="flex flex-col mt-6">
                    <input required type="text" placeholder="Your Name" name="name" className="input input-bordered input-info w-full block" /> <br></br>
                    <input required type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full block" /> <br></br>

                    <div className="flex relative w-full ">
                        <input type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password" required
                            className="input input-bordered input-info block w-full" />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> 
                            }
                        </span>
                    </div>
                    <div className="space-x-3">
                        <input type="checkbox" name="terms" id="terms" className="mt-3 text-start text-xl" />
                        <label htmlFor="terms">Accept Our <a href="#" className="text-blue-600 hover:underline"> Terms and Conditions</a></label>
                    </div>
                    <div className="flex items-center justify-center mx-auto">
                        <button className="btn bg-green-500 text-xl font-medium text-white hover:bg-transparent hover:border-green-500 hover:text-green-800 transition mt-5 ease-in">Resister</button>
                    </div>

                </form>
                {
                    errorCatch && <p className="text-xl text-red-600">{errorCatch}</p>
                }
                {
                    successShow && <p className="text-xl text-green-800">{successShow}</p>
                }
                {/* jodi age thekei account khula thake tahle */}
                <p className="my-5">You have already an account?  <Link to="/login" className="text-blue-500">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Resister;