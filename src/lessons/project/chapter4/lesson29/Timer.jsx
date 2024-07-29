import { useState, useEffect } from "react";
const Timer = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        // setInterval(() => {
        //     console.log(">>> run timeout");
        //     setCount(y => y - 1);
        // }, 1000);
    }, []);

    return (
        <div>
            Timer = {count}
        </div>
    )
}
export default Timer;