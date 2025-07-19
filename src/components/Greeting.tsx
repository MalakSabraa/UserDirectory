import React from "react";
import { GreetingProps } from "../types/GreetingProps"; 

const Greeting: React.FC<GreetingProps> = ({ name, subtitle = "Have a great day!" }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold text-indigo-600">Hello, {name}!</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Greeting;
