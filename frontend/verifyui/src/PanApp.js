import './App.css';
import React from 'react';
import {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
const axios = require('axios');

function PanApp() {

	const [pan, setPan] = useState('');
	const [status, setStatus] = useState('');
	const handlePanChange = event => {
		let val = event.target.value 
		if (val.length == 10) {
			setPan('Success')
			axios
			.get("https://catfact.ninja/fact")
			.then(function (response) {
				console.log(response.data)
				setStatus(response.data.fact);
			});

		}
		else{
			setPan('Enter a 10 Digit valid PAN Number')
			setStatus('');
		}

	  };

  return (
    <div className="App">
	<AppBar position="static">
		<Toolbar>
			<IconButton edge="start"  color="inherit" aria-label="menu">
			<img src='https://avatars.githubusercontent.com/u/70563105?s=200&v=4' className='logo'></img>
			</IconButton>
			<Typography variant="h6" >
			SETU - PAN Verification App
			</Typography>
		</Toolbar>
	</AppBar>

	<form className='myForm' autoComplete="off">
      <div className='field'>
		<Typography variant="h6" >
			Please Enter your Pan Number 
		</Typography>
		<TextField 
		fullWidth 
		onChange={handlePanChange} 
		label="Pan Number" 
		variant="filled" 
		color="primary" 
		focused />
		<h3>{pan}</h3>
		<h2>{status}</h2>
      </div>
    </form>

    </div>
  );
}

export default PanApp;
