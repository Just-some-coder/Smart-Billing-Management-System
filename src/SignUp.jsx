import {Link} from "react-router-dom";
import {useState} from "react";

function SignUp() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password: "",
        repeatPassword:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target

        const temp = {...formData}

        temp[name] = value

        setFormData(temp);
    }

    return (
        <>
            <h3 className={'go-to-login'}>
                Already Have an Account ?

                <Link to={'/login'}>
                    <button>Log in</button>
                </Link>

            </h3>
            <div className="login-container">
                <h1 className={'newsreader'}>Sign Up</h1>
                <form action={'user'} >
                    <ul>
                        <li>
                            <h2>Your Name</h2>
                            <input name={'name'} type="text" placeholder="name" onChange={handleChange} required/>
                        </li>

                        <li>
                            <h2>Email</h2>
                            <input name={'email'} type="email" placeholder="email" onChange={handleChange} required/>
                        </li>

                        <li>
                            <h2>Create Password</h2>
                            <input name={'password'} type="password" placeholder="password" onChange={handleChange} required/>
                        </li>

                        <li>
                            <h2>Confirm Password</h2>
                            <input name={'repeatPassword'} type="password" placeholder="confirm password" onChange={handleChange} required/>
                        </li>

                        <li className='logged-in'>
                                <button>
                                    Sign Up
                                </button>
                        </li>

                    </ul>
                </form>
            </div>
        </>
    );
}

export default SignUp