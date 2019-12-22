import React from "react";
import "./forgotPassword.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField,Typography, Button } from "@material-ui/core";
import * as routes from '../constants/routes';

class ForgotPassword extends React.Component{
    render(){
        return(
            <div className="container">
                <Grid container direction="row" alignItems="center" justify="center">
                    
                    <Paper className="paper">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="h5" className="titleForgotPassword">FORGOT PASSWORD</Typography>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Email Address" />
                        </Grid>              

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Button variant="contained" className="btnForgotPassword" href={routes.RESETPASSWORD}>Submit</Button>
                        </Grid>     

                    </Paper>

                </Grid>
            </div>
        );
    }
};

export default ForgotPassword;