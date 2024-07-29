import { useState } from "react";

const Lesson28 = () => {
    const [number, setNumber] = useState(0);

    const handleIncrease = () => {
        // setNumber(number + 1);
        // setNumber(number + 3);
        // setNumber(number + 2);
        setNumber(x => x + 1);
        setNumber(x => x + 1);
        setNumber(number => number + 1);

        //queue
    }

    return (
        <div className="container">
            <div>Lesson 28: Broken button:</div>
            <button onClick={handleIncrease}>+3 units</button>
            <div>Number = {number}</div>
        </div>
    )
}

export default Lesson28;