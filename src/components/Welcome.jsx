import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#ff3f3f",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#ff3f3f",
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
						<div className="header">Talkies</div>

						<div className="formContainer">
							<form
								id="formSub"
								onSubmit={(e) => {
									handleUser();
								}}
							>
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