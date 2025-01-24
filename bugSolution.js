```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: using setTimeout to avoid immediate state updates
    if (count > 5) {
      setTimeout(() => setCount(0), 0); // Asynchronous update
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```