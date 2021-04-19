var intToRoman = {M:1000, CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

var romanToInt = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

window.onload = function (){
    let toRomanBtn = document.getElementById("toRoman");
    let toDecimalBtn = document.getElementById("toDecimal");

    toRomanBtn.addEventListener("click", () => {
        const val = parseInt(document.getElementById("decimal").value);
        const result = toRoman(val);
        let output = document.getElementById("output");
        output.value = result;
        //output.innerHTML = "Output: " + result;
        document.getElementById("decimal").value = "";
    });

    toDecimalBtn.addEventListener("click",  () => {
        const str = document.getElementById("roman").value;
        const result = toInt(str);
        let output = document.getElementById("output");
        output.value = result;
        //output.innerHTML = "Output: " + result;
        document.getElementById("roman").value = "";
    })
}




function toRoman(num){
	if (isNaN(num)){
		return "Input invalid, please enter an integer.";
	}
	else{
		let roman = "";
		for (let c in intToRoman){
			while (num >= intToRoman[c]){
				roman += c;
				num -= intToRoman[c];
			}
		}
		return roman;
	}
}


function toInt(roman){
	if (roman.length <= 0){
		return "Please enter some input, all letters should be uppercase.";
	}
	let ans = 0;
	for (let i = 0; i < roman.length; i++){
		let cur = romanToInt[roman[i]];
		let next = romanToInt[roman[i+1]];
		
		if (cur < next){
			ans -= cur;
		}
		else{
			ans += cur;
		}
	}
	if (isNaN(ans)){
		return "Input invalid, please enter valid Roman numeral letters, in uppercase.";
	}
	return ans;
}