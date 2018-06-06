import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <h3>Comments</h3>
        <hr />

        <div class="row">
          <div class="col-sm-1">
            <img src="https://picsum.photos/70/70?random" alt="..." class="img-responsive img-circle" />
          </div>
          <div class="col-sm-11">Repellat ipsa qui nobis quam esse laudantium similique officiis? Natus ducimus, nihil voluptate dolorum eveniet repellat
          odio sunt illo minus maiores neque?</div>
        </div>
        <hr />
      </Grid>


    );
  }
}

export default App;
