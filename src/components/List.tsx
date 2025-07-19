import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode; // return a React element to render
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="p-4 bg-white rounded-xl shadow border border-gray-200">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;
