import React from 'react';

type MyComponentProps = {
  text: string;
  isVisible: boolean;
  count: number;
  onClick: () => void;
};

const MyComponent: React.FC<MyComponentProps> = ({ text, isVisible, count, onClick }) => {
  return (
    <div>
      {isVisible && (
        <div>
          <p>{text}</p>
          <p>{count}</p>
          <button onClick={onClick}>Click me</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
