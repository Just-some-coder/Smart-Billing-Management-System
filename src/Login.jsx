import {Link} from "react-router-dom";
import {useState} from "react";

function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password : ""
    })
    const handleChange = (e)=>{
        const data = {...formData};
        const {name, value} = e.target
        data[name] = value
        setFormData(data)
    }
    const handleSubmit = (e) =>{

    }
    return (
        <>
            <div className="login-container">
                <h1 className={'newsreader'}>Login</h1>
                <form  onSubmit={handleSubmit} action={'user'}>
                    <ul>
                        <li>
                            <h2>Username</h2>
                            <input name='username' type="text" placeholder="Username" required value={formData.username} onChange={handleChange}/>
                        </li>

                        <li>
                            <h2>Password</h2>
                            <input name= 'password' type="password" placeholder="Password" required value={formData.password} onChange={handleChange}/>
                        </li>

                        <li className="forgot-password">
                            Forgot Password ?
                        </li>

                        <li className='logged-in'>
                            {/*<Link to={'/user'}>*/}
                                <button>
                                    Login
                                </button>
                            {/*</Link>*/}
                        </li>

                        <li className="no-account">
                            Don't have an account?<br/>
                            <Link to={'/signup'}>
                                <button>Sign Up</button>
                            </Link>
                        </li>
                    </ul>
                </form>
            </div>
        </>
    );
}

export default Login