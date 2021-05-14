import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import db from "./firebase";
import firebase from "firebase";
import Mess from "./Mess";
import juntos from './juntos.mp3'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {LinearProgress} from '@material-ui/core'
const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#4429fb",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#4429fb",
		},
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


const Chat = ({history}) => {
const classes = useStyles();

	const [input, setInput] = useState("");
	const [messages, setMess] = useState(null);
	const [id, setId] = useState(JSON.parse(localStorage.getItem("login")).id);

	useEffect(()=>{

		db
		.collection(id)
		.orderBy("timestamp", "desc")
		.onSnapshot((snapshot) => {
			setMess(snapshot.docs.map((doc) => doc.data()));
		});
	},[])



	const sendMess = (event) => {
		event.preventDefault();

		db.collection(id).add({
			text: input,
			username: JSON.parse(localStorage.getItem("login")).name,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		document.getElementById("sent").play();
		setInput("");
	};

	const Exit = async () => {
		
		localStorage.clear();
		history.push("/");
	};

	return messages ? (
		<div className="chatContainer">
			<div className="headerContainer">
				<div className="header">Talkies</div>
				<button className="button height Exitbutton" onClick={Exit}>
					Exit Room
				</button>
			</div>
			<div className="chatSub">
				<div className="messages">
					{messages.map((message, index) => (
						<Mess item={message} key={index} />
					))}
				</div>
			</div>
			<form onSubmit={(event) => sendMess(event)}>
				<div style={{ display: "flex", alignItems: "flex-end" }}>
					<CssTextField
						id="standard-basic"
						label="Enter Message"
						value={input}
						required
						style={{width:"55vw"}}
						onChange={(event) => {
							setInput(event.target.value);
						}}
					/>
					<button
						className="button"
						disabled={input === ""}
						type="submit"
					>
						<audio id="sent" src={juntos}>
						</audio>
						Send
					</button>
				</div>
			</form>
		</div>
	) : (
		<div>
			<div className="headerContainer">
				<div className="header">Talkies</div>
			</div>
			<LinearProgress color="primary" />.
		</div>
	);
};

export default Chat;
