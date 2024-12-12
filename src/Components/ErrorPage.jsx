import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Opp!!</h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h2>Page Not Found</h2>
                    <p>Go Back Where You From</p>
                    <Link to="/"><button>Home</button></Link>

                </div>
            }
            
        </div>
    );
};

export default ErrorPage;