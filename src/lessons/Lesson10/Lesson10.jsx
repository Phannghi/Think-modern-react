import { useEffect, useRef } from 'react';
import CalculateVAT from './CalculateVAT';
import './Lesson10.scss';

const Lesson10 = (props) => {

    const isFirstRender = useRef(true);
    useEffect(() => {
        console.log('run meee');
        if (isFirstRender.current === true) {
            console.log('aaaaa');
        }
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [])
    //  pure function
    function calculateVAT(productPrice) {
        return productPrice * 0.05;
    }

    if (isFirstRender.current === true) {
        console.log(">>> VAT === ", calculateVAT(100))
    }


    // ex not pure (impure) function (không phụ thuộc vào input đầu vào)
    var tax = 5;
    function calculateVAT1(productPrice) {
        return productPrice * tax / 100;
    }

    function doSomething() {
        //..whatever
        tax = 80;
    }
    doSomething();
    if (isFirstRender.current) {
        console.log(">>> VAT impure === ", calculateVAT1(100))
    }



    return (
        <div className='lesson10-container'>
            Lesson 10 : pure-component

            {/* impure component */}
            {/* <CalculateVAT />
            <CalculateVAT />
            <CalculateVAT /> */}

            {/* pure component */}
            <CalculateVAT tax={5} price={100} />
            <CalculateVAT tax={5} price={100} />
            <CalculateVAT tax={5} price={100} />


        </div>
    )
}

export default Lesson10;
