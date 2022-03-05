

function PrintNumbers(limit){

	for(let i = 1; i <= limit; i++){
		if(i%3 == 0 && i%5 == 0){
			console.log("Visual Nuts");
		}else if (i%3 == 0){
			console.log("Visual");
		}else if (i%5 == 0){
			console.log("Nuts");
		}else{
			console.log(i);
		}
	}
}

PrintNumbers(100);