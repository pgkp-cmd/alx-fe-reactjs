import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center',
      padding: '2rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '2rem auto',
      maxWidth: '400px'
    }}>
      <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        Current Count: {count}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '0.5rem 1rem' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '0.5rem 1rem' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '0.5rem 1rem' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}