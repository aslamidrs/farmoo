import React, { useState } from "react";
import CountryCodeSelect from "../components/ui/CountryCodeSelect";
import InputField from "../components/ui/InputField";
import LoadingSpinner from "../components/ui/LoadingSpinner";


const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    countryCode: "+91",
    mobile: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    // Simulate API call
    setTimeout(() => {
      if (formData.mobile.length === 10 && formData.password) {
        setErrorMsg("");
        // Here you would typically handle successful login
      } else if (formData.mobile.length !== 10) {
        setErrorMsg("Please enter valid 10 digit mobile number");
      } else {
        setErrorMsg("Please fill in all fields");
      }
      setIsLoading(false);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[url('https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg')] bg-cover bg-center font-[Poppins] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(45,106,79,0.92)] to-[rgba(27,67,50,0.88)]" />
      <div className="flex-1 flex flex-col p-[24px] max-sm:p-[16px] relative z-10">
        <div className="flex-1 flex items-center justify-center mb-[32px]">
          <img
            src="https://images.pexels.com/photos/19283466/pexels-photo-19283466.jpeg}"
            alt="FarMoo Logo"
            className="w-[120px] h-[120px] object-contain max-sm:hidden"
          />
          <img
            src="https://images.pexels.com/photos/19283466/pexels-photo-19283466.jpeg}"
            alt="FarMoo Logo"
            className="w-[120px] h-[120px] object-contain max-sm:hidden"
          />
        </div>
        <div className="w-full max-w-[400px] mx-auto">
          <h1 className="text-[32px] font-semibold mb-[8px] text-center">
            Welcome to FarMoo
          </h1>
          <p className="text-[rgba(255,255,255,0.7)] text-center mb-[32px] text-[15px]">
            Sign in with your mobile number
          </p>
          <form className="space-y-[20px]" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="flex">
               
                <div className="flex-1 relative">
                  <InputField
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    label="Mobile Number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="rounded-r-[12px] border-l-0"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                label="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-[16px] top-[50%] transform-[translateY(-50%)] text-[rgba(255,255,255,0.6)]"
              >
                {!showPassword ? (
                  <svg
                    className="w-[24px] h-[24px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-[24px] h-[24px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                      clipRule="evenodd"
                    />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                )}
              </button>
            </div>
            {errorMsg && (
              <div className="text-[#ff4d4d] text-[14px] text-center">
                {errorMsg}
              </div>
            )}
            <button
              type="submit"
              className="w-full h-[56px] rounded-[12px] font-medium transition-colors relative overflow-hidden text-[16px] bg-[#4CAF50] hover:bg-[#388E3C]"
            >
              {!isLoading ? (
                <span>Login</span>
              ) : (
                <span className="flex items-center justify-center gap-[8px]">
                  <LoadingSpinner />
                  <span>Processing...</span>
                </span>
              )}
            </button>
          </form>
          <div className="mt-[24px] flex flex-col gap-[16px] items-center">
            <a
              href="#"
              className="text-[#74C69D] hover:text-[#95D5B2] text-[15px]"
            >
              Forgot Password?
            </a>
            <p className="text-[rgba(255,255,255,0.7)] text-[15px]">
              <span>Don't have an account? </span>
              <a href="#" className="text-[#74C69D] hover:text-[#95D5B2]">
                {" "}
                Sign up{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
