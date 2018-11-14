import React, { Component } from 'react';
import styled from 'styled-components'

// Components 
import Gnome from '../components/Gnomes'
import Search from '../components/Search'

const Wrapper = styled.section`
  padding: 0 3em;
`;

const WrapperItem = styled.div`
  display: inline-block;
`


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      filterText: ''
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json });
      })
      .catch(error => console.log("Error: ", error));
  }

  filterUpdate (value) {
    this.setState({
      filterText: value
    })
  }


  render() {

    const { isLoaded, items, filterText } = this.state;
    const data = items.Brastlewark

    if (!isLoaded) {
      return (<p>Loading...</p>)
    }

    else {
      return (
        <Wrapper>
          <Search 
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
            {data
            .filter(item => {
              return item.name.indexOf(filterText) >= 0
            })
            .map(item => (
              <WrapperItem key={item.id}>
                <Gnome
                name = {item.name} 
                thumbnail = {item.thumbnail} 
                weight = {item.weight}
                height = {item.height}
                professions = {item.professions}
                friends={item.friends}
                />
              </WrapperItem>
            ))}
        </Wrapper>
      )
    }
  }
}

export default App;