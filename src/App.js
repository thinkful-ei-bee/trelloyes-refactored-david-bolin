import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {

  state = STORE;

  deleteCard(id) {
    console.log(`delete card with id ${id} called`);
  }

  addCard = (listId) => {
    console.log(`add card to list ${listId} called`);
    const newId = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
    const newCard = {
      id: newId,
      title: `Random Card ${newId}`,
      content: 'lorem ipsum'
    };
    const newAll = {...this.state.allCards};
    newAll[newId] = newCard;

    const cardIds = [...this.state.lists[listId - 1].cardIds, newId];
    const newObj = {
      cardIds: cardIds,
      header: this.state.lists[listId -1].header,
      id: listId
    };
  
    let newLists = this.state.lists.slice(0, listId - 1);
    newLists.push(newObj);
    newLists = newLists.concat(this.state.lists.slice(listId));
    
    this.setState({
      allCards: newAll,
      lists: newLists
    });
    
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
              passedKey={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} 
              deleteIt={this.deleteCard}
              add={this.addCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
