import React from "react";
import "./login.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <Grid container direction="row" alignItems="center" justify="center">
                    
                    <Paper className="paper">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="body" className="titleLogin">LOGIN</Typography> 
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Email Address" />
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Password"/>
                        </Grid>        

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Button variant="contained" className="btnLogin">Log In</Button>
                        </Grid>  

                        <Grid item xs={12} md={12} className="alignText">
                            <Link to={routes.FORGOTPASSWORD}> <Typography variant="body2" component="p">Forgot Password?</Typography> </Link>
                        </Grid>

                        <Grid item xs={12} md={12} className="alignText link">
                            <Link to={routes.SIGNUP}> <Typography variant="body2" component="p">Don't have an account?</Typography> </Link>
                        </Grid>     

                    </Paper>

                </Grid>
            </div>
        );
    }
};

export default Login;