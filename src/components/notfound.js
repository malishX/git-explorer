import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not found</h1>

      <Link to="/">Go Back to the home page</Link>
    </div>
  );
};

export default NotFound;
