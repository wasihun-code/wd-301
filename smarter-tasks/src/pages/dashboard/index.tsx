import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigator = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  useEffect(() => {
    const localuserData = localStorage.getItem('userData');
    let parsedUserData;

    if (localuserData) {
      parsedUserData = JSON.parse(localuserData);
      setUser(parsedUserData);
    }
  }, []);

  const signoutHandler = (event) => {
    console.log(event);
    localStorage.removeItem('userData');
    navigator('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>

      <h1 className="m-2 p-2 text-2xl text-center">User Name: {user?.name}</h1>
      <p className="m-2 p-2 text-2xl text-center">Email: {user?.email}</p>
      <a
        id="logout-link"
        className="m-2 p-2 px-3 text-xl text-center bg-red-400 rounded-xl"
        onClick={signoutHandler}
      >
        Log out
      </a>
    </div>
  );
};

export default Dashboard;
