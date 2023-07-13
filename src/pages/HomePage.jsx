import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default HomePage;
