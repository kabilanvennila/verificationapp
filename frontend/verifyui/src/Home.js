import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

function Home() {

  return (
    <div className="App">
	<AppBar position="static">
		<Toolbar>
			<IconButton edge="start"  color="inherit" aria-label="menu">
			<img src='https://avatars.githubusercontent.com/u/70563105?s=200&v=4' className='logo'></img>
			</IconButton>
			<Typography variant="h6" >
			SETU Verification App
			</Typography>
            <div style={ { paddingLeft :"900px"}}>
            <Button href="panapp" variant="contained" color="default"> PAN </Button>
            <Button href="banapp" variant="contained" color="secondary"> BANK </Button>
            
            </div>
		</Toolbar>
	</AppBar>
    <img style={{width: "100%" , height:"50%"} } src="https://camo.githubusercontent.com/8dfd81322b66fbc3a67ae3f237c7fd4045e337bc6576acba7e2d7441afb87b6a/68747470733a2f2f736574752d64657369676e2e73332e616d617a6f6e6177732e636f6d2f7075626c69632d6173736574732f77616c6c7061706572732f323032312f736574752d31362e6a7067">
    </img>

    </div>
  );
}

export default Home;
