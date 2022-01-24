const net = require("net"); // import net
const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
});

const options = { port: 8000,};

let client = net.connect(options, () => {
    console.log("connected!");
});

function newProblem() {    
    let op1 = "";
  	readline.question("First number: ", (num) => {
    	  if (num == "q") {
    	      client.end();
    	  }
		    op1 = num;
            client.write("BIN"+ " " + op1);

  	});
}

client.on("data", data => {
    console.log(data.toString()); // print out data
    newProblem(); // ask for more input
});

client.on("end", () => { // close everything when done
    console.log("disconnected");
    readline.close();
})

console.log("enter q to quit");
newProblem();