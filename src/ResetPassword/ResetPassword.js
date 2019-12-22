import React from "react";
import "./resetPassword.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField,Typography, Button } from "@material-ui/core";
import * as routes from '../constants/routes';

class ResetPassword extends React.Component{
    render(){
        return(
            <div className="container">
                <Grid container direction="row" alignItems="center" justify="center">
                    
                    <Paper className="paper">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="h5" className="titleResetPassword">RESET PASSWORD</Typography>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Password" />
                        </Grid> 

                         <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Confirm Password" />
                        </Grid>              

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Button variant="contained" className="btnResetPassword" href={routes.LANDING}>Reset</Button>
                        </Grid>     

                    </Paper>

                </Grid>
            </div>
        );
    }
};

export default ResetPassword;