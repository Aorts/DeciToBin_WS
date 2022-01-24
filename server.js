// server.js
const net = require("net"); // import net

let server = net.createServer(connection => {
    // run all of this when a client connects
    console.log("new connection");

    connection.on("data", data => {
        console.log(data.toString());
    });

    connection.on("data", data => {
        if (data == undefined || data == null) {
			      return;
		    }
		    const dataArgs = data.toString().split(" ");
	      if (dataArgs.length === 0) { // in case there is no command
            connection.write("ERROR no data");
            return; // prevents other code from running
        }
		    const command = dataArgs[0]
        if (command === "BIN") {

            const op1 = parseInt(dataArgs[1]); // first number
			      const result = (op1).toString(2); // result as a string

			      connection.write("RESULT " + result);
			      return; // end
		    } else {
            connection.write("ERROR invalid command");
            return;
        }
    });

});


server.listen(8000, () => {
    console.log("waiting for a connection");
});