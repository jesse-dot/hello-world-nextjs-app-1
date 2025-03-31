import { useState } from 'react';

const Home = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(true)}>Click me</button>
      {showText && <p>Hello World</p>}
    </div>
  );
};

export default Home;
