const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	const GUESS = req.url.split('q=')[1];// Write logic to parse the word which the user guessed from the URL string

	let Out="";
	try { 
	for (let i=0; i<5; i++){
		if (typeof(GUESS)==undefined){}
		if  (SECRET.includes(GUESS[i])){
		        if (GUESS[i]==SECRET[i]) Out+="g";
		        else Out+="y";
		 			} 
		else Out+="b";
		 	}
	}
	catch(err) {}
			
	const feedback = Out; 
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);