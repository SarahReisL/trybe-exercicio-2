import React, { Component } from 'react';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
    inheritance: 1000000,
    }
  }

  spendInheritance = () => {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
    }

  render() {
    return (
      <Grandmother 
        inheritance={this.state.inheritance} 
        spendInheritance={this.spendInheritance}
      />
    );
  }
}
  function Grandmother(props) {
    return (
      <Father 
        inheritance={props.inheritance}
        spendInheritance={props.spendInheritance}
      />
    );
  }

  function Father(props) {
    return (
      <Daughter 
        inheritance={props.inheritance}
        spendInheritance={props.spendInheritance}
      />
    );
  }

  function Daughter(props) {
    return (
      <div>
        <span>
          {`Temho uma herança de R$ ${props.inheritance}`}
        </span>
      </div>
    );
  }