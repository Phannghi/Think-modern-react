const Lesson7 = (props) => {
    function myFunction() {
        console.log('>> traditional funtion');
    }
    (() => console.log('Anonymous funtion'))();// IIFE

    let a = function () {
        console.log('>>Named anonymous function');
    }

    setTimeout(function () {
        console.log('>> setTimeout anonymous function');
    }, 2000);

    a();
    myFunction();
    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;