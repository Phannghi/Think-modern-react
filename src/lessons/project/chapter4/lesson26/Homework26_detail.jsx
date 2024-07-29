import { useEffect, useState } from "react";

import User from "./User";
import './Lesson26.scss'


const Homework26 = (props) => {
    const { listUser } = props;

    return (
        <div className="list-users row g-4">
            {listUser && listUser.length > 0
                && listUser.map((item, index) => {
                    return (
                        <User key={`user-${index}`} data={item} />
                    )
                })
            }
        </div>
    )
}

export default Homework26;