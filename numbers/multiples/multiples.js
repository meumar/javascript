var n = 10;
if(Number.isInteger(n)== true){
	(Number.isSafeInteger(n)) ? console.log("It's an safe Integer") : console.log("It's a not safe Integer");
	var sum = 0;
	var pro = 1;
	for (var i = 0; i <= 10; i++) {
		console.log(i*n);
	}
	for (var i = 1; i <= n; i++) {
		sum+=i;
		pro*=i;
	}

	console.log('Sum of first '+ n + ' numbers:'+ sum );
	console.log('Product of first '+ n + ' numbers:'+ pro );
	var res = (Math.sign(n)==1) ? "positive and Square root: " + Math.sqrt(n)
			: (Math.sign(n)==0) ? "It is an zero"
			: "Negative"+"and positive number of it:"+ Math.abs(n)
	console.log(res);	

}else{
	console.log("Please enter a Integer")
}