import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import db from "./firebase";
import firebase from "firebase";
import Mess from "./Mess";
import juntos from './juntos.mp3'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#ff3f3f",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#ff3f3f",
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

	useEffect(()=>{
		const id = JSON.parse(localStorage.getItem('login')).id

		db
		.collection(id)
		.orderBy("timestamp", "desc")
		.onSnapshot((snapshot) => {
			setMess(snapshot.docs.map((doc) => doc.data()));
		});
	},[])



	const sendMess = (event) => {
		event.preventDefault();
		const id = JSON.parse(localStorage.getItem("login")).id;
		db.collection(id).add({
			text: input,
			username: JSON.parse(localStorage.getItem("login")).name,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		document.getElementById("yup").play();
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
				<button className="button height" onClick={Exit}>
					Exit Room
				</button>
			</div>
			<form onSubmit={(event) => sendMess(event)}>
				<div style={{display:"flex", alignItems:'flex-end'}}><CssTextField
					id="standard-basic"
					label="Enter Message"
					value={input}
					onChange={(event) => {
						setInput(event.target.value);
					}}
				/>
				<SendIcon
					className="button"
					disabled={input === ""}
					type="submit"
					style={{
						fontSize: "2.5rem",
						marginLeft: "1vw",
						cursor: "pointer",
					}}
				>
					<audio id="yup">
						<source src={juntos}></source>
					</audio>
				</SendIcon></div>
				
			</form>
			<div className="chatSub">
				<div className="messages">
					{messages.map((message, index) => (
						<Mess item={message} key={index} />
					))}
				</div>
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default Chat;
