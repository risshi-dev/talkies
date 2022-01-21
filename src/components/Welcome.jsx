import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import chat from './chat.png'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#4429fb",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#4429fb",
		},

    //     "& .MuiFormLabel-root" : {
    //        color: "rgb(255, 255, 255)"
    //    }
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));


const Welcome = ({history}) => {

	const p = useLocation().state

	useEffect(() => {
		console.log(p)
	}, [])

     const classes = useStyles();

const [id, setId] = useState('');
const [user, setUser] = useState('');

const handleUser = () => {
	const login = {
		name:user,
		id:id
	}

	localStorage.setItem('login',JSON.stringify(login))

	history.push('/chat')
}

											
    return (
					<div className="welcomeScreen">
						<div className="header">TALKIES</div>
						<div className="formContainer">
							
							<form
								id="formSub"
								onSubmit={(e) => {
									handleUser();
								}}
							><div>
								<img src={chat} alt='logo' />
							</div>
								<div className="field">
									<PersonIcon
										style={{ fontSize: "2.5rem", marginRight: "1vw" }}
									></PersonIcon>
									<CssTextField
										className={classes.margin}
										id="custom-css-standard-input"
										label="Name"
										required
										onChange={(event) => setUser(event.target.value)}
									/>
								</div>
								<div className="field">
										<AddIcon
											style={{
												fontSize: "2.5rem",
												marginRight: "1vw",
												cursor: "pointer",
											}}
										></AddIcon>
									<CssTextField
										className={classes.margin}
										id="custom-css-standard-input"
										label="ID"
										value={id}
										required
										onChange={(event) => setId(event.target.value)}
									/>
								</div>
								<div className="field" style={{ marginTop: "5vh" }}>
									<button className="button" type="submit">
										Enter Zone
									</button>
								</div>
							</form>
						</div>
					</div>
				);
}

export default Welcome
