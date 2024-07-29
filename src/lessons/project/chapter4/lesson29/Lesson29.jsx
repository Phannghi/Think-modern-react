import { useState } from "react";
import Timer from "./Timer";

const Lesson29 = (props) => {
    const [number, setNumber] = useState(0);

    const handleCLick = () => {
        // setNumber(number + 5);
        // alert(number);

        //copy state hien tai dang luu
        //setNumber(0 + 5); => tạo snapshot, tính toán
        //alert(0);

        //cách fix
        setNumber(number => {
            number = number + 5;
            alert(number);
            return number;
        });
    }

    const handleClick2 = () => {
        // sau khi click thì copy state hiện tại (do react quản lý ở global) truyền vào đây
        setNumber(number + 5);
        setTimeout(() => {
            alert(number);
        }, 3000);

        // setNumber(0 + 5);
        // setTimeout(() => {
        //     alert(0);
        // }, 3000);
    }
    return (
        <div>
            <div>Lesson 29:</div>
            <Timer />
            {/* <>
                <div>Current number = {number}</div>
                <button onClick={handleCLick}>+5 units</button>
            </> */}

            {/* <>
                <div>Current number = {number}</div>
                <button onClick={handleClick2}>+5 units</button>
            </> */}
        </div>
    )
}

export default Lesson29;