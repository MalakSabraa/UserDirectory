import React, { useEffect, useState } from "react";


const BuggedEffectExample: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div className="p-4 bg-red-100 rounded-md mb-4">
      <p className="text-red-700 font-bold">Buggy Count: {count}</p>
    </div>
  );
};

export default BuggedEffectExample;
