import { useState } from "react";
import { postLogin } from "./chapter4/utils/apiService";
import { toast } from "react-toastify";
import _ from 'lodash';

const Login = (props) => {
    const [email, setEmail] = useState('user@gmail.com');
    const [password, setPassword] = useState('123456');

    const [showDetail, setShowDetail] = useState(false);
    const [user, setUser] = useState({})

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Email is not empty');
            return
        }
        if (!password) {
            toast.error('Password is not empty');
            return
        }

        //call API
        let res = await postLogin(email, password);
        if (res && +res.EC === 0) {
            toast.success("login succeed!");
            localStorage.setItem("access_token", res.DT.access_token);
            setUser(res.DT)
        } else {
            toast.error('Login error...')
            console.log('>>> check res error: ', res)
        }
    }


    return (
        <div className="login">
            <form onSubmit={handleOnSubmit}>
                <div className="input-group">
                    <label>Email</label>
                    <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={() => setShowDetail(!showDetail)}>Show detail</button>
            </form>
            {showDetail && !_.isEmpty(user) &&
                <div className="detail">
                    <div>Email : {user.email} / Username: {user.username}</div>
                    {user.image &&
                        <img src={`data:image/png;base64, ${user.image}`} alt="Red dot" />
                    }
                </div>
            }
        </div>
    )
}

export default Login;