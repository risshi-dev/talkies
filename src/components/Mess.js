import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

function Mess({ item }) {
  const user = JSON.parse(localStorage.getItem('login')).name;

  return (
    <div>
      <Card style={{boxShadow:'none'}}>
        <CardContent>
          <div className={item.username === user ? "send all" : "recieve all"}>
            <p className="user">{item.username}</p>{" "}
            <p className="text">{item.text}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Mess;
