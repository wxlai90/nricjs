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

function generate(){
var nric = ''
for(i=0;i<7;i++){
	nric += Math.floor(Math.random() * 10)
	}
checkdigit = compute(nric)
correct_suffix = lookup(checkdigit)
valid_nric = 'S' + nric + correct_suffix
elem = document.getElementById('result')
elem.innerHTML = ''
elem.append('Generated NRIC: ' + valid_nric)
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
elem.innerHTML = ''
elem.append('Input NRIC:(' + nric + ') is valid!')
var tick = document.createElement("img")
tick.src = 'res/tick.png'
tick.width='25'
tick.height='25'
elem.appendChild(tick)
} else {
elem.innerHTML = ''
elem.append('Input NRIC:(' + nric + ') is invalid!')
var cross = document.createElement("img")
cross.src = 'res/cross.png'
cross.width='25'
cross.height='25'
elem.appendChild(cross)
elem.appendChild(document.createElement("br"))
elem.append('Correct NRIC should be: ' + valid_nric)
}
}
