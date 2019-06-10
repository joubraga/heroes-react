import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import request from '../../requester/request';

export default class search extends Component {
  constructor() {
    super()
    this.state = {
      nameHero: '',
    };

    this.setNameHero = this.setNameHero.bind(this);
  }

  findHero () {
    request.get(`/search/${this.state.nameHero}`)
    .then((response) => {
      console.log('Herois encontrados -> ', response);
    }).catch((error) => {
      console.log('Ocorreu um erro durante a requisição dos heróis');
    });
  }

  setNameHero(e) {
    this.setState({ nameHero: e.target.value });
    this.findHero()
  }

  render() {
    const nameHero = this.state.nameHero;

    return (
      <TextField
        id="outlined-search"
        label="Digite o nome do herói"
        type="search"
        margin="normal"
        variant="outlined"
        fullWidth
        value={nameHero}
        onChange={this.setNameHero}
      />
    )
  }
}
