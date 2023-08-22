const { useState } = React;

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const validateInput = (name, value) => {
    const errors = { ...validationErrors };

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z]+$/.test(value)) {
          errors[name] = "Invalid input";
        } else {
          errors[name] = "";
        }
        break;
      case "username":
        if (!/^[a-zA-Z0-9._]{5,30}$/.test(value)) {
          errors[name] = "Invalid input";
        } else {
          errors[name] = "";
        }
        break;
      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*()_+|?~])[A-Za-z\d.!@#$%^&*()_+|?~]{7,16}$/.test(
            value
          )
        ) {
          errors[name] = "Invalid input";
        } else {
          errors[name] = "";
        }
        break;
      default:
        break;
    }

    setValidationErrors(errors);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if(
      formData.firstName === ""
    ){
      setValidationErrors({
      firstName: "Field is required"
    });
    return;
  }
    if(
      formData.lastName === ""
    ){
      setValidationErrors({
      lastName: "lastName is required"
    });
    return;
  }
     if(
      formData.username === ""
    ){
      setValidationErrors({
      username: "username is required"
    });
    return;
  }
     if(
      formData.password === ""
    ){
      setValidationErrors({
      password: "password is required"
    });
    return;
  }
    
    

    // Check for any remaining errors
    const hasErrors = Object.values(validationErrors).some((error) => error !== "");
    if (!hasErrors) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="gap-y-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="gap-y-5 px-5 flex flex-col items-center">
            <div className="flex flex-row items-center justify-between">
              <div className="w-[40%] flex flex-col items-start">
                <label htmlFor="firstName">Firstname</label>
                <input
                style={{ border: "1px solid black", marginRight: "15px" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                />
                {validationErrors.firstName && (
                  <p className="text-red-500">{validationErrors.firstName}</p>
                )}
              </div>
              <div className="w-[40%] flex flex-col items-start">
                <label htmlFor="lastName">Lastname</label>
                <input
                style={{ border: "1px solid black" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
                {validationErrors.lastName && (
                  <p className="text-red-500">{validationErrors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="w-[49%] flex flex-col items-start">
                <label htmlFor="username">Username</label>
                <input
                style={{ border: "1px solid black", marginRight: "15px" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                />
                {validationErrors.username && (
                  <p className="text-red-500">{validationErrors.username}</p>
                )}
              </div>
              <div className="w-[49%] flex flex-col items-start">
                <label htmlFor="password">Password</label>
                <input
                style={{ border: "1px solid black" }}
                  className="border border-gray-300 rounded-full px-3 py-1 text-lg"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
                {validationErrors.password && (
                  <p className="text-red-500">{validationErrors.password}</p>
                )}
              </div>
            </div>
            <button
            style={{ border: "1px solid black" }}
              className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));