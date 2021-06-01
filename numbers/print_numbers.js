var n = window.prompt("Enter a number ");
for(var i=0; i<=n; i++){
	console.log(i);	
}
var ch = window.prompt("Want even (1) or Want odd(2)");
if(ch == 1){
	for (var i = 0; i <= n; i+=2) {
		console.log(i);
	}
}
else if(ch == 2){
	for (var i = 1; i <= n; i+=2) {
		console.log(i);
	}
}
else{
	console.log("Please enter right choice");
}
