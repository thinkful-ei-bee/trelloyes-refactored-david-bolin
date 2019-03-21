import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {

  state = STORE;

  deleteCard(id) {
    console.log('delete card with id {id} called');
  }

  addCard(listId) {
    console.log('add card to list {listId} called');
  }

  render() {
    const store = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} 
              delete={this.deleteCard}
              add={this.addCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
