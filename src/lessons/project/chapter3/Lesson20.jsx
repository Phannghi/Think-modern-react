const Lesson20 = (props) => {
    let person = {
        name: 'Hỏi Dân IT’',
        age: 25,
    };
    console.log(">>> check before person: ", person);

    let member = person; // clone tên biến lưu ở stack, cùng trỏ vào value lưu ở heap

    member.age = 26;

    console.log(">>> check person: ", person);
    console.log(">>> check member: ", member);

    let foo = null;
    console.log(typeof foo);
    return (
        <div>
            Lesson 20: What's wrong with 'normal' assign/copy ?
        </div>
    )
}

export default Lesson20;