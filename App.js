import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/Homeview';
import ArtistDetailView from './src/ArtistDetailView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes= Actions.create(
  <Scene key="root">
    <Scene key="login" component= {LoginView} hideNavBar/>
    <Scene key="home" component= {HomeView} hideNavBar/>
    <Scene key="artistDetail" component={ArtistDetailView} tittle="Detalles" hideNavBar={false}/>
  </Scene>
);
export default class App extends Component <Props> {
   render() {
    return <Router scenes={scenes} />
  }
  
}


