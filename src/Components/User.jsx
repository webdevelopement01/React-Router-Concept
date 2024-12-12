
const User = ({user}) => {
    const {id, name, email, phone}= user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h2>Id: {id}</h2>
            <h2>Name: {name} </h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            
        </div>
    );
};

export default User;