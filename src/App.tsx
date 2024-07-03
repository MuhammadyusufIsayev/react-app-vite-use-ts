import React from 'react';
import MyComponent from './components/TempComponent';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <MyComponent
        text="Salom, dunyo!"
        isVisible={true}
        count={42}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
