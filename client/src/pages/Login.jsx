import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useLogin();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const submitform = async (e) => {
    e.preventDefault();
    await login(form);

    setForm({
      username: "",
      password: "",
    });
  };
  return (
    <div className=" flex min-h-screen justify-center items-center">
      <div className=" max-sm:p-0 flex bg-[#F4F6FA] min-h-[90vh] rounded-3xl border-white border-2 shadow-lg min-w-[80vw] p-3">
        <div className=" min-w-[50%] max-sm:hidden">
          <div className=" w-full h-full ">
            <img
              className=" h-full object-cover rounded-xl"
              src="./loginUI.png"
            />
          </div>
        </div>
        <div className=" min-w-[50%] max-sm:p-0  p-5">
          <div className=" flex justify-end">
            <a href="/sign-up">
              <span className=" max-sm:font-thin font-semibold text-sm">
                Not a member?{" "}
                <span className=" font-semibold text-blue-600 cursor-pointer">
                  {" "}
                  register now
                </span>
              </span>
            </a>
          </div>
          <div className=" max-sm:p-0 px-10 py-5">
            <form
              onSubmit={(e) => submitform(e)}
              className=" flex flex-col gap-2 mt-8 px-10"
            >
              <div className=" flex flex-col gap-3">
                <h2 className=" font-bold text-gray-800 text-3xl text-center">
                  {" "}
                  Hello Again!
                </h2>
                <p className=" text-center font-semibold text-gray-600 text-lg">
                  {" "}
                  Welcome you've been missed
                </p>
              </div>
              <div className=" flex gap-2 flex-col mt-10">
                <div>
                  <input
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                    required
                    className="relative w-full px-3 py-2 border rounded-lg shadow-lg h-14 border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <div className="relative">
                    <input
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="relative w-full px-3 py-2 border rounded-lg shadow-lg h-14 border-gray-300 placeholder-gray-500 text-gray-900"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute inset-y-0 right-0 flex items-center px-3 py-2  rounded-r-md text-sm font-medium text-gray-500"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end my-3">
                <span className=" text-sm font-light text-gray-500">
                  Recovery Password
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className=" w-full flex justify-center py-4 shadow-lg px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#FE6B68] h-14"
                >
                  <span className=" text-white text-center">
                    {loading ? "signing in" : "sign in"}
                  </span>
                </button>

                <div className="mt-4 flex items-center justify-center">
                  <div className="flex-1 h-px bg-white"></div>
                  <span className="mx-4 text-sm text-gray-600">
                    Or continue with
                  </span>
                  <div className="flex-1 h-px bg-white"></div>
                </div>
                <div className=" flex gap-5 justify-around mt-5">
                  <div className=" border-white border p-2 bg-transparent hover:scale-110 hover:shadow-2xl cursor-pointer">
                    <img width={40} src="./google.png" />
                  </div>
                  <div className="border-white border p-2 bg-transparent hover:scale-110 hover:shadow-2xl cursor-pointer">
                    <img width={40} src="./facebook.png" />
                  </div>
                  <div className="border-white border p-2 bg-transparent hover:scale-110 hover:shadow-2xl cursor-pointer">
                    <img width={40} src="./apple.png" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
