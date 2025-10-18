import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

//Registration Function
export const RegisterUser = async(firstname:string, lastname:string, email:string, phonenumber:number, password:string, confirmpswd:string) => {
    const res = await api.post("/register",{
    firstname,
    lastname,
    email,
    phonenumber,
    password,
    confirmpswd,
    })
    const {token, user} = res.data;

    //Save to localstorage
    localStorage.setItem("Token",token);
    localStorage.setItem("User", JSON.stringify(user));

    return user;
}

//Login  Function
export const LoginUser = async(email: string, password: string) => {
  try {
    const res = await api.post("/login", { email, password });
    const { token, user } = res.data;

    // Save to localStorage
    localStorage.setItem("Token", token);
    localStorage.setItem("User", JSON.stringify(user));

    return user;
  } catch (err: any) {
    if (err.response?.status === 403) {
      // Account deactivated → force logout
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      //window.location.href = "/login";
    } else {
      console.log("Error logging in:", err);
    }
    throw err; // rethrow so UI knows it failed
  }
};


//Helper Functions
export const getToken = () => localStorage.getItem("Token") || null
export const getUser = () => {
  const userData = localStorage.getItem("User");
  return userData ? JSON.parse(userData) : null;
};

export const LogoutUser = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("User");
};