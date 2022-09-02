import './App.css';
import React from 'react';
import {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
const axios = require('axios');

function BanApp() {

	const [ban, setBan] = useState('');
    const [ifsc, setIfsc] = useState('');
	const [status, setStatus] = useState('');
	const handleBanChange = event => {
		let val = event.target.value 
		if (val.length == 10 && ifsc.length == 11) {
			setBan('Success ! Valid Bank and IFSC Number')
			axios.post('http://127.0.0.1:8000/banverify/', {
				BanId: {val},
                BanIfsc : {ifsc}
			  })
			  .then(function (response) {
				console.log(response)
				setStatus(response['data']);
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
		else{
			setBan('Enter a 10 Digit valid Bank Number and IFSC code')
			setStatus('');
		}
		
	  };

      const handleIfscChange = event => {
		let val = event.target.value 
		if (val.length == 11) {
			setIfsc(val)
		}
		else{
			setIfsc('Enter a 11 Digit valid IFSC Number')
		}
		
	  };

  return (
    <div className="App">
	<AppBar position="static">
		<Toolbar>
			<IconButton edge="start"  color="inherit" aria-label="menu">
			<a href='/'><img src='https://avatars.githubusercontent.com/u/70563105?s=200&v=4' className='logo'></img></a>
			</IconButton>
			<Typography variant="h6" >
			SETU - Bank Account Verification App
			</Typography>
		</Toolbar>
	</AppBar>
    <img style={{width: "20%" , height:"20%" ,paddingLeft:"700px"} } src="https://cdn4.iconfinder.com/data/icons/loan-money-blue-line/64/128_bank-banking-money-finance-dollar-512.png">
    </img>
      <div className='myForm'>
      <Typography variant="h6" >
			Please Enter your IFSC Number 
		</Typography>
		<TextField 
		fullWidth
		className='ifscId' 
		onChange={handleIfscChange} 
		label="Ifsc Number" 
		variant="filled" 
		color="primary" 
		focused />
        <h3 style={{paddingTop:"60px"}}></h3>
		<Typography variant="h6" >
			Please Enter your Bank Account Number 
		</Typography>
		<TextField 
		fullWidth
		className='BanId' 
		onChange={handleBanChange} 
		label="Bank  Number" 
		variant="filled" 
		color="primary" 
		focused />
		<h3>{ban}</h3>
		{/* <div><h2>{JSON.stringify(status)}</h2></div> */}
      </div>
		<div className='resp'>

		{Object.entries(status).map(([key,val]) => (
			<h3 style={ {color : "green" }}  key={key}><strong>{key}</strong>: {JSON.stringify(val)}</h3>
		))}
		
		</div>
    </div>
  );
}

export default BanApp;
