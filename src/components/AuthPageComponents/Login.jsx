import { Link } from "react-router-dom";
import FormRow from "../FormRow";

const Login = () => {
  return (
    <>
      <h3 className="text-md font-medium mb-4">Login to continue</h3>
      <FormRow type="email" name="email" placeholder="Enter your email" />
      <FormRow
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <button
        type="submit"
        className="p-2 my-2 w-[90%] text-white bg-blue-700 rounded-sm hover:bg-blue-600"
      >
        Continue
      </button>
      <div className="my-8  text-blue-800 text-sm">
        <Link className="hover:underline" to="/auth/signup">
          {" "}
          Dont have an account? Create one
        </Link>
      </div>
    </>
  );
};
export default Login;
