import { useState } from 'react'
import './App.css'

function App() {
  // Aquí tu código
  // 2. Define dos variables de estado utilizando useState
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState('');

  // Bonus: Función para cambiar el nombre desde el formulario
  const changeName = (e) => {
    e.preventDefault();
    if (newName !== '') {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      {/* 3. Renderiza un título <h2> con el texto "Teacher Name" seguido del valor de name */}
      <h2>Teacher Name: {name}</h2>

      {/* 4. Renderiza una lista <ul> con tres elementos <li> */}
      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>

      {/* Bonus: Formulario para añadir un nombre */}
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App
