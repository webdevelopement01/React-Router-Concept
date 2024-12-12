import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, password} = user;
    return (
        <div>
            <p>this is user details: {name} </p>
            
        </div>
    );
};

export default UserDetails;