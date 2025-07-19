import React, { useEffect, useState } from "react";
import { reverseUsers } from "./utils/reverseUsers";
import Greeting from "./components/Greeting";
import BuggedEffectExample from "./components/useEffectDebug";
import FixedEffectExample from "./components/fixedUseEffect";
import { User } from "./types/User";
import List from "./components/List"; // ✅ import List

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching users:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  const handleReverse = () => {
    setUsers((prev) => reverseUsers(prev));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-700 animate-pulse">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        User Directory
      </h1>

      <Greeting name="Malak" subtitle="Welcome to the directory!" />
      {/* <Greeting name="Sarah" /> */}

      <div className="text-center mb-6">
        <button
          onClick={handleReverse}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Reverse Order of Users
        </button>
      </div>

      <List
        items={users}
        renderItem={(user) => (
          <>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </>
        )}
      />

      <div className="bg-gray-100 p-6 rounded-xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Debugging Task
        </h2>

        <BuggedEffectExample />
        <FixedEffectExample />
      </div>
    </div>
  );
};

export default App;
