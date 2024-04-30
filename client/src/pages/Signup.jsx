import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import useLogin from "../Hooks/useLogin";
import useSignup from "../Hooks/useSignup";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signup } = useSignup();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const submitform = async (e) => {
    e.preventDefault();
    signup(form);

    setForm({
      username: "",
      password: "",
      email: "",
    });
  };
  return (
    <div className=" flex min-h-screen justify-center items-center">
      <div className=" max-sm:p-0 flex bg-[#F4F6FA] min-h-[90vh] rounded-3xl border-white border-2 shadow-lg min-w-[80vw] p-3">
        <div className=" max-sm:hidden min-w-[50%]">
          <div className=" w-full h-full ">
            <img
              className=" h-full object-cover rounded-xl"
              src="./loginUI.png"
            />
          </div>
        </div>
        <div className=" max-sm:p-0 min-w-[50%]  p-5">
          <div className=" flex justify-end">
            <a href="/login">
              <span className=" font-semibold text-sm">
                Already have account?{" "}
                <span className=" font-semibold text-blue-600 cursor-pointer">
                  {" "}
                  login now
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
                  Hey New User
                </h2>
                <p className=" text-center font-semibold text-gray-600 text-lg">
                  {" "}
                  Welcome To myTODOS
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
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    type="email"
                    className="relative w-full px-3 py-2 border rounded-lg shadow-lg h-14 border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter email"
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

              <div className=" mt-10">
                <button
                  type="submit"
                  className=" w-full flex justify-center py-4 shadow-lg px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#FE6B68] h-14"
                >
                  <span className=" text-white text-center">
                    {loading ? "signing up" : "sign up"}
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

export default Signup;
