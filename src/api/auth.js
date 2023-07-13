import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../store/user/userSlice";

export const useLoginMutation = () => {
  const dispatch = useDispatch();

  const loginMutation = async ({ email, password }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      const { user, token } = data;
      dispatch(setUser(user));
      dispatch(setToken(token));
      return { data };
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const login = useMutation(loginMutation);
  return login;
};

export const useRegisterMutation = () => {
  const dispatch = useDispatch();

  const registerMutation = async ({ email, password }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      const { user, token } = data;
      dispatch(setUser(user));
      dispatch(setToken(token));
      return { data };
    } else {
      throw new Error(data.message || "Registration failed");
    }
  };

  const register = useMutation(registerMutation);
  return register;
};
