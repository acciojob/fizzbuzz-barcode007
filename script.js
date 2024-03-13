let fizzbuzz= function (){
	let output=''
	for(let i=1;i<=20;i++){
		if(i%3==0){
			output+="fizz\n"
		}
		else if(i%5==0)
		{
			output+="buzz\n"
		}
		else if(i%15==0){
			output+="fizzbuzz\n"
		}

		else{
			output+=i+"\n"
		}
	}
    alert(output)
	
}

fizzbuzz();