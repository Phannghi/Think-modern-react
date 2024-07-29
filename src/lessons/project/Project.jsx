import Login from "./Login"
import './Project.scss';
import 'nprogress/nprogress.css';
import Lesson35 from "./chapter4/lesson35/Lesson35";

const Project = (props) => {
    return (
        <div className="project">
            <Login />
            <Lesson35 />
        </div>
    )
}

export default Project;