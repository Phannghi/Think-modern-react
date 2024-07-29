import Homework26 from "../lesson26/Homework26_detail";
import AddNewuser from "./AddNewUser";
import { toast } from "react-toastify";
import { getUserWithPaginate } from "../utils/apiService";
import { useState, useEffect } from "react";

const Lesson27 = (props) => {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchUserWithPaginate();
    }, [])

    const fetchUserWithPaginate = async () => {
        let res = await getUserWithPaginate(2, 3)
        //console.log('>> check res: ', res);
        if (res && res.EC === 0) {
            setListUser(res.DT.users);
        }
        else
            toast.error(res.EM);
    }

    const addNew = (user) => {
        console.log('>> check user: ', user);
        setListUser([user, ...listUser]);
    }
    return (
        <div className="container">
            <p className="mb-4">Lesson27: Sharing State Between Component. (Lift-up state)</p>
            <AddNewuser addNew={addNew} />
            <Homework26 listUser={listUser} />
        </div>
    )
}

export default Lesson27;