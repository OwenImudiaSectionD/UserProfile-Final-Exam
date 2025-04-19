
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const TodoList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
      toast({
        title: "Item Added",
        description: `Added ${newItem} to the list.`
      });
    }
  };

  const removeItem = (index: number) => {
    const itemToRemove = items[index];
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);

    toast({
      title: "Item Removed",
      description: `Removed ${itemToRemove} from the list.`,
      variant: "destructive",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button onClick={addItem} variant="outline">Add</Button>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500">No items in the list.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 w-full">
              <span>{item}</span>
              <Button onClick={() => removeItem(index)} variant="destructive" size="sm">
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
