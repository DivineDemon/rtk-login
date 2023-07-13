import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-row items-center justify-center space-x-5">
        <img
          src={user.image}
          alt="user"
          className="w-24 h-24 rounded-full border"
        />
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
