import { useState } from 'react';
import UserCard from './components/UserCard';

export default function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(true);

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 }
  ];

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload
    console.log("Searching database for:", query);
    setQuery(""); // Clear form after submit
  };


  return (
    <div>
      {loggedIn ? <h1>User Logged in</h1> : <h1>Logged out</h1>}

      {loggedIn && (
        <div>
          <UserCard name="Sarah" role="Engineer" isPremium={true} />
          <UserCard name="John" role="Designer" isPremium={false} />

          <hr />
          <h1>{count}</h1>
          <button onClick={()=> setCount(count + 1)}>add</button>
          <button onClick={()=> setCount(count - 1)}>reduce</button>
          <button onClick={()=> setCount(0)}>reset</button>

          <ul>
            {products.map((product) => (
              // The unique key goes on the outermost element returned by map
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={query} // Input value is locked to State
              onChange={(e) => setQuery(e.target.value)} // State updates on every keystroke
              placeholder="Search users..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )}

      <br />
      <button onClick={()=> setLoggedIn(!loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>

    </div>
  );
}