import React, { useState } from "react";
import { useImmer } from "use-immer";
const Lesson331 = (props) => {
    // const [person, setPerson] = useState(
    //     {
    //         username: '',
    //         email: 'Hỏi Dân IT',
    //         password: ''
    //     }
    // )

    // const [person, setPerson] = useState({
    //     username: '',
    //     email: 'Hỏi Dân IT',
    //     password: '',
    //     address: {
    //         province: 'Ha Noi',
    //         country: 'Viet Nam'
    //     }
    // })
    const [person, setPerson] = useImmer({
        username: '',
        email: 'Hỏi Dân IT',
        password: '',
        address: {
            province: 'Ha Noi',
            country: 'Viet Nam'
        }
    })

    const handleOnChangeCountry = (event) => {
        // person.username = event.target.value;
        //not merge
        // sử dụng tv immer không sửa đổi trực tiếp state của react mà sửa đổi thông qua draft,
        // draft là 1 clone state của react, không thay đổi hình thù ban đầu của react
        setPerson(draft => {
            draft.address.country = event.target.value;
        });
    }

    const handleSubmit = () => {
        console.log(">>> check data person: ", person)
    }

    const handleChangeInput = (event) => {
        //console.log(event.target.name);
        const { name, value } = event.target;
        setPerson({ ...person, [name]: value });
    }

    return (
        <div>
            <div className='input-group'>
                <label>Country</label>
                <input
                    type={'text'}
                    onChange={(event) => handleOnChangeCountry(event)}
                />
            </div>
            <div className='input-group'>
                <label>Username</label>
                <input
                    type={'text'}
                    value={person.username}
                    onChange={(event) => handleChangeInput(event)}
                    name="username"
                />
            </div>
            <div className='input-group'>
                <label>Email</label>
                <input
                    type={'email'}
                    value={person.email}
                    onChange={(event) => handleChangeInput(event)}
                    name="email"
                />
            </div>
            <div className='input-group'>
                <label>Password</label>
                <input type={'password'}
                    value={person.password}
                    onChange={(event) => handleChangeInput(event)}
                    name="password"
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Lesson331;