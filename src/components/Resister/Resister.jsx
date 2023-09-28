
const Resister = () => {
    const handleResister = (e)=>{
        e.preventDefault()
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email,password);
    }
    return (
        <div>
           <div className="bg-gray-400 w-1/2 mx-auto p-6 mt-5">
           <h2 className="text-3xl font-bold text-center">Please Resister</h2>
            <form onSubmit={handleResister} className="flex justify-center items-center flex-col mt-6">
            <input required type="email" placeholder="Email" name="email" className="input input-bordered input-info w-full max-w-xs block" /> <br></br>
            <input type="password" placeholder="Password" name="password" className="input input-bordered input-info block w-full max-w-xs" />
            <button className="btn bg-green-500 text-xl font-medium text-white hover:bg-transparent hover:border-green-500 hover:text-green-800 transition mt-5 ease-in">Resister</button>
            </form>
           </div>
        </div>
    );
};

export default Resister;