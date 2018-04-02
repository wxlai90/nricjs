function isCharDigit(n){
  return !!n.trim() && !isNaN(+n);
}

function compute(nric){
nric = nric + ''
weights = [ 2, 7, 6, 5, 4, 3, 2 ]
sum = 0
for(i=0;i<7;i++){
	sum += weights[i] * nric[i]
	}
return sum % 11
}

function lookup(d){
table = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z', 'J' ]
d = 10 - d
return table[d]
}

function main(){
nric = document.getElementById('nric_value').value
prefix = nric.slice(0, 1)
suffix = nric.slice(-1)
elem = document.getElementById('result')
if(prefix != 'S' && prefix != 's'){
	console.log('First char is not S')
	elem.innerHTML = 'First char is not S'
	return
	}
nric_digits = nric.slice(1, 8)
checkdigit = compute(nric_digits)
correct_suffix = lookup(checkdigit)
valid_nric = prefix + nric_digits + correct_suffix
if(valid_nric == nric){
console.log('Input NRIC:(' + nric + ') is valid!')
elem.innerHTML = ''
elem.append('Input NRIC:(' + nric + ') is valid!')
} else {
console.log('Input NRIC:(' + nric + ') is invalid!')
console.log('Correct NRIC should be: ' + valid_nric)
elem.innerHTML = ''
elem.append('Input NRIC:(' + nric + ') is invalid!')
elem.appendChild(document.createElement("br"))
elem.append('Correct NRIC should be: ' + valid_nric)
}
}
