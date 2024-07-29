import { useState } from "react";

const User = (props) => {
    const { data } = props;
    const [show, setShow] = useState(true);

    return (
        <div className="col-lg-3">
            <div className="detail-user">
                <h5>ID: {data?.id} </h5>
                <h4>Username:  {data?.username}</h4>
                <div className="user-image">
                    <img
                        className={`${show ? 'd-block' : 'd-none'}`}
                        src={`data:image/png;base64, ${data.image}`}
                        alt="user image" />
                </div>
                <div className='mt-3'>
                    <button
                        className="btn btn-danger"
                        onClick={() => setShow(!show)}>
                        {show ? 'Hide image' : 'Show image'}</button>
                </div>
            </div >
        </div>
    )
}

export default User;