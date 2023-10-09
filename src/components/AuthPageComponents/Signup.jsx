import FormRow from "../FormRow";
import { Link, useActionData, useLoaderData } from "react-router-dom";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const email = new URLSearchParams(url.search).get("email");

  return { email };
};
const Signup = () => {
  const { email } = useLoaderData();
  console.log(email);
  return (
    <>
      <h3 className="text-md font-medium mb-4">Sign up to continue</h3>
      <FormRow type="name" name="name" placeholder="Enter your name" />
      <FormRow
        type="email"
        name="email"
        placeholder="Enter your email"
        defaultValue={email}
      />
      <FormRow
        type="password"
        name="password"
        placeholder="Enter your password"
      />

      <button
        type="submit"
        className="p-2 my-2 w-[90%] text-white bg-blue-700 rounded-sm hover:bg-blue-600"
      >
        Register
      </button>
      <div className="my-8  text-blue-800 text-sm">
        <Link className="hover:underline" to="/auth/login">
          {" "}
          Already have a Joboard account? Log in
        </Link>
      </div>
    </>
  );
};
export default Signup;
