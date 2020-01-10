import React from "react";
import "./login.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField, Typography, Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            submit: false,
            errorMessage: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClose = () => {
        this.setState({
            error: false,
            password: "",
            email: "",
            submit: false,
        });
    };

    onSubmit = () => {
        let re = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/, 'igm');
        let valid = re.test(this.state.email);
        if (this.state.email === "" || this.state.password === "" || (this.state.password === "" && this.state.email === "")) {
            this.setState({
                email: "",
                password: "",
                error: true,
                errorMessage: "Fields cannot be empty"
            });
        }
        else if (!valid) {
            this.setState({
                email: "",
                password: "",
                error: true,
                errorMessage: "Invalid email"
            });
        }
        else {
            this.setState({
                email: "",
                password: "",
                submit: true,
            });
        }
    };

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
                            <TextField required id="standard-required" label="Email Address" value={this.state.email} name={"email"} onChange={this.handleChange} />
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Password" type="password" value={this.state.password} name={"password"} onChange={this.handleChange} />
                        </Grid>        

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Button variant="contained" className="btnLogin" onClick={this.onSubmit}>Log In</Button>
                        </Grid>  

                        <Grid item xs={12} md={12} className="alignText">
                            <Link to={routes.FORGOTPASSWORD}> <Typography variant="body2" component="p">Forgot Password?</Typography> </Link>
                        </Grid>

                        <Grid item xs={12} md={12} className="alignText link">
                            <Link to={routes.SIGNUP}> <Typography variant="body2" component="p">Don't have an account?</Typography> </Link>
                        </Grid>     

                    </Paper>

                </Grid>

                    <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            autoHideDuration={6000}
                            open={this.state.error}
                            className="errorMessage"
                            onClick={this.handleClose}
                            message={<span id="message-id"> {this.state.errorMessage} </span>}
                        />

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            autoHideDuration={6000}
                            open={this.state.submit}
                            onClick={this.handleClose}
                            message={<span id="message-id">Successfully logged in!</span>}
                        />

            </div>
        );
    }
};

export default Login;