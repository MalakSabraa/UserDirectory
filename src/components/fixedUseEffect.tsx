import React, { useEffect, useState } from "react";


const FixedEffectExample: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded-md">
      <p className="text-green-700 font-bold">Fixed Count: {count}</p>
    </div>
  );
};

export default FixedEffectExample;
