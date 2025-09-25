import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={'Ajay (f)'}/> */}
            <UserClass name={'Ajay (c)'} />
        </div>
    );
};

export default About;