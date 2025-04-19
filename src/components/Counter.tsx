
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold mb-4">{count}</span>
      <div className="flex space-x-2">
        <Button onClick={increment} variant="outline">+</Button>
        <Button onClick={decrement} variant="outline">-</Button>
        <Button onClick={reset} variant="secondary">Reset</Button>
      </div>
      {count === 0 && <p className="text-gray-500 mt-2">Counter is zero.</p>}
    </div>
  );
};
