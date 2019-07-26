import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }

    }
    
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(response=>
      response.json())
      .then(users => this.setState({ monsters: users}))
      .catch(error => console.log('Server not reached?'))
    }

    handleChange = e => {
      this.setState({ searchField: e.target.value })
    }

    render(){
      const { monsters, searchField } = this.state;
      /* Equivalent to 
      const monsters = this.state.monsters;
      const searchField = this.state.searchField;

      Why not use directly:
        const filteredMonsters = this.state.monsters.filter(monster => ... ?
      */
     const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
          || monster.username.toLowerCase().includes(searchField.toLowerCase())
        )
      return (
        <div className="App">
          <h1> Monsters Rolodex </h1>
          <SearchBox 
            placeholder='Search monsters'
            handleChange= {this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
}
export default App;
