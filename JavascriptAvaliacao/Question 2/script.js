
	
	function getNumberofCountries() {
		return lista.length;
	}
	
	function getCountryMostOficialSpeakDe() {
		
		let numberOfLang = 0;
		let country;

		for(let count = 0; count < lista.length; count++) {
			
			if(lista[count].languages.includes('de')) {
				if(numberOfLang < lista[count].languages.length){
					numberOfLang = lista[count].languages.length;
					country = lista[count];
				}
			}
		}
		
		return country;
	}
	
	function getNumberOfOficialLanguagesSpoken(){
		
		let numberOfLang = 0;
		let count = 0;
		let listlang = [];

		while(count < lista.length) {
			
			for(let i=0; i < lista[count].languages.length; i++) {
				if(!listlang.includes(lista[count].languages[i])) {
					numberOfLang ++;
					listlang.push(lista[count].languages[i]);
				}
			}
			count++;
		}
		return numberOfLang;
	}
	
	function getCountryMostOficialSpeakLang(){
		
		let numberOfLang = 0;
		let country;
		let count = 0;
		while(count < lista.length) {
			
			if(numberOfLang < lista[count].languages.length){
				numberOfLang = lista[count].languages.length;
				country = lista[count];
			}
			count++;
		}

		return country;
		
	}

	function getMostCommonOficialLangSpoken(){
		
		let pass = true;
		let mostCommonLang = [];
		mostCommonLang[0] = "";
		mostCommonLang[1] = "0";
		
		let InfoLang = [];
		let count=0;

		while(count < lista.length) {

			for(let i=0; i < lista[count].languages.length;i++) {
				
				if (InfoLang.length == 0) {
					InfoLang.push([[lista[count].languages[i],"1"]]);
				}else {
					for(let j=0 ; j < InfoLang.length; j++) {
						if(lista[count].languages[i].includes(InfoLang[j][0])) {
							InfoLang[j][1] = "" + (parseInt(InfoLang[j][1])+1);
							pass = false;
							break;
						}
					}
					if (pass) {
						InfoLang.push([]);
						InfoLang[InfoLang.length-1].push(lista[count].languages[i]);
						InfoLang[InfoLang.length-1].push("1");
					}
				}
			}
		
			count++;
		}
		
		let Final = "";
		
		for(let l of InfoLang) {
			if(parseInt(mostCommonLang[1]) < parseInt(l[1])){
				mostCommonLang = l;
				Final = l[0];
			}else if (parseInt(mostCommonLang[1]) == parseInt(l[1])) {
				Final += ", "+l[0];
			}
		}
		
		
		return Final;
		
	}

	var lista = [];



	fetch('./saida.json').then(response => {
		return response.json();
	}).then(data => {
	  	// console.log(data);
		let linguas = [];

		for (let item of data){

			lista.push({
				country: item.country, 
				languages: item.languages
			});
		}

		console.log(lista);
	
		console.log(" Number of countries: " + getNumberofCountries());
		console.log(" The country with most official languages spoken (DE): ", getCountryMostOficialSpeakDe());
	  	console.log(" The count of the official languages spoken: " + getNumberOfOficialLanguagesSpoken());
	  	console.log(" The country with most official languages spoken: ", getCountryMostOficialSpeakLang());
	  	console.log(" The most common Language of all countries: " + getMostCommonOficialLangSpoken());


	});

	
			