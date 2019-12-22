import React from "react";
import "./Signup.css";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Signup extends React.Component {
    render() {
        return(
            <div className="container">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Paper className="paperSignup">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="h5" className="title">SIGN UP</Typography> 
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Username" />
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Email Address" />
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Password"/>
                        </Grid> 

                         <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Confirm Password"/>
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item sx={12} md={12} className="gridItem">
                            <Button variant="contained" className="btn" href={routes.LANDING}>Sign Up</Button>
                        </Grid>    

                        <Grid item xs={12} md={12} className="alignText linkSignup">
                            <Link to={routes.LANDING}> <Typography variant="body2" component="p">Already have an account?</Typography> </Link>
                        </Grid> 

                    </Paper>
                </Grid>
            </div>
        )
    }
};

export default Signup;