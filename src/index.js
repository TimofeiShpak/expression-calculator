function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(str) {
let arr = str.split('');
for(let i=0; i<arr.length; i++){
	if(arr[i]== ' '){arr.splice(i,1);i--;}
}
for(let i=0; i<arr.length; i++){
	if(isFinite(arr[i]) && isFinite(arr[i+1])){arr.splice(i,2,(arr[i]+arr[i+1]));i--;}
}
let result = 0;
let bracketsCheck=0;
let numberBrackets=0;
let numberBracketsCheck=0;
let ChecknumberBrackets = 1;
for(let i =0; i<(numberBrackets+1); i++){
let left = 0;
let right = 0;
let brackets = 0;
let bracketsLeftCheck=0;
let bracketsRightCheck=0;
let CheckLeft = 0;
let CheckRight = 0;
let indexStart = 0;
let indexStartCheck = 0;
let indexEnd = 0;
let CheckRightb=0;
		for(let i=0; i<arr.length; i++){
			if(arr[i]=='('){left++;brackets++;}
			if(arr[i]==')' &&  indexStart>indexEnd){indexEnd=i;CheckRight=1;}
			if(arr[i]==')'){right++;if(brackets!=2)brackets--;}
			if(bracketsLeftCheck<brackets ){bracketsLeftCheck=brackets; indexStart=i;}
		}
		if(numberBracketsCheck==0){numberBracketsCheck=1;numberBrackets=bracketsLeftCheck;}
		if(left!=right && bracketsCheck==0){throw new Error('ExpressionError: Brackets must be paired');}bracketsCheck=1;
		if(right>1 && left>1 && brackets==2){
			arr.splice(indexStart,1);indexEnd--;
		for(let i=indexStart; i<(indexEnd+1); i++){
			if(arr[i] == '/' && arr[i+1]!=0){let number =arr[i-1]/arr[i+1];arr.splice(i-1,3,number);i--;indexEnd-=2;}
			if(arr[i] == '/' && arr[i+1]==0)throw new Error("TypeError: Division by zero.");
			if(arr[i] == '*'){let number =arr[i-1]*arr[i+1];arr.splice(i-1,3,number);i--;indexEnd-=2;}
		}

		for(let i=indexStart; i<(indexEnd+1); i++){
			if(result == 0 && isFinite(arr[i]) && i==0)result= +arr[i];
			if(arr[i] == '+' && arr[i+2] !='*' && arr[i+2] !='/'){let number = +arr[i-1] + +arr[i+1];arr.splice(i-1,3,number);i--;indexEnd-=2;}
			if(arr[i] == '-' && arr[i+2] !='*' && arr[i+2] !='/'){let number = +arr[i-1] - +arr[i+1];arr.splice(i-1,3,number);i--;indexEnd-=2;}
		}
		arr.splice(indexEnd,1);
		}
			left=0;
			if(i>2 && ChecknumberBrackets==1){
				for(let i = 0; i<arr.length; i++){
					if(arr[i]=='(')left++;
				}
			
			if((numberBrackets-i+1)<left)numberBrackets++;
			ChecknumberBrackets=0;
		}
		}


for(let i=0; i<arr.length; i++){
	if(arr[i]=='('){
		arr.splice(i,1);
		for(let j=i; j<arr.length; j++){
			if(arr[j]== ')')break;
			if(arr[j] == '/' && arr[j+1]!=0){let number =arr[j-1]/arr[j+1];arr.splice(j-1,3,number);j--;}
			if(arr[j] == '/' && arr[j+1]==0)throw new Error("TypeError: Division by zero.");
			if(arr[j] == '*'){let number =arr[j-1]*arr[j+1];arr.splice(j-1,3,number);j--;}		
		}

		for(let j=i; j<arr.length; j++){
			if(arr[j]== ')'){arr.splice(j,1);break;}
			if(arr[j] == '+' && arr[j+2] !='*' && arr[j+2] !='/'){let number = +arr[j-1] + +arr[j+1];arr.splice(j-1,3,number);j--;}
			if(arr[j] == '-' && arr[j+2] !='*' && arr[j+2] !='/'){let number = +arr[j-1] - +arr[j+1];arr.splice(j-1,3,number);j--;}		
		}		
	}
}

for(let i=0; i<arr.length; i++){
	if(arr[i] == '/' && arr[i+1]!=0){let number =arr[i-1]/arr[i+1];arr.splice(i-1,3,number);i--;}
	if(arr[i] == '/' && arr[i+1]==0)throw new Error("TypeError: Division by zero.");
	if(arr[i] == '*'){let number =arr[i-1]*arr[i+1];arr.splice(i-1,3,number);i--;}
}

for(let i=0; i<arr.length; i++){
	if(result == 0 && isFinite(arr[i]) && i==0)result= +arr[i];
	if(arr[i] == '+' && arr[i+2] !='*' && arr[i+2] !='/')result+= +arr[i+1];
	if(arr[i] == '-' && arr[i+2] !='*' && arr[i+2] !='/')result-=(+arr[i+1]);
}
result= Math.round(result*10000);
result/=10000;
return result;
}


module.exports = {
    expressionCalculator
}
