import React from 'react';

import VisibleToDoList from './containers/VisibleToDoList'
import FilterLink from './containers/FilterLink'
import AddToDo from './containers/AddToDo'

import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <h2>a To do list</h2>
      <AddToDo />
      <VisibleToDoList />
      <Footer />
    </div>
  );
}

export default App;
