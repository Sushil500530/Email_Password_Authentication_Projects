import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebase";
import { useState } from "react";


const Resister = () => {
    const [errorCatch, setErrorCatch] = useState('');
    const [successShow, setSuccessShow] = useState('');

    const handleResister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset error
        setErrorCatch('');
        setSuccessShow('');
        if (password.length < 6) {
            setErrorCatch('Password should be at least 6 characters or longer!')
            return;
        }

        // console.log(email,password);
        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(Result => {
                console.log(Result.user);
                setSuccessShow('user created successfully')
            })
            .catch(error => {
                setErrorCatch(error.message)
            })
    }
    console.log(errorCatch);
    console.log(successShow);
    return (
        <div>
            <div className="bg-gray-400 w-1/2 mx-auto p-6 mt-5">
                <h2 className="text-3xl font-bold text-center">Please Resister</h2>
                <form onSubmit={handleResister} className="flex justify-center items-center flex-col mt-6">
                    <input required type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full max-w-xs block" /> <br></br>
                    <input type="password" placeholder="Password" name="password" required className="input input-bordered input-info block w-full max-w-xs" />
                    <button className="btn bg-green-500 text-xl font-medium text-white hover:bg-transparent hover:border-green-500 hover:text-green-800 transition mt-5 ease-in">Resister</button>
                </form>
                {
                    errorCatch && <p className="text-xl text-red-600">{errorCatch}</p>
                }
                {
                    successShow && <p className="text-xl text-green-800">{successShow}</p>
                }
            </div>
        </div>
    );
};

export default Resister;