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

function lookup(d, type){
if (type === 'S'){
table = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z', 'J' ]
	} else if (type === 'T'){
table = [ 'H', 'I', 'Z', 'J', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
	} else {
return False
	}
d = 10 - d
return table[d]
}

function generate(){
var nric = ''
for(i=0;i<7;i++){
	nric += Math.floor(Math.random() * 10)
	}
checkdigit = compute(nric)
prefixes = [ 'S', 'T' ]
random_index = Math.floor(Math.random() * 2)
prefix = prefixes[random_index]
correct_suffix = lookup(checkdigit, prefix)
valid_nric = prefix + nric + correct_suffix
elem = document.getElementById('result')
elem.innerHTML = ''
elem.append('Generated NRIC: ' + valid_nric)
}

function main(){
nric = document.getElementById('nric_value').value
prefix = nric.slice(0, 1)
suffix = nric.slice(-1)
elem = document.getElementById('result')
if(prefix.toUpperCase() != 'S' && prefix.toUpperCase() != 'T'){
	elem.innerHTML = 'First char has to be S or T!'
	return
	}
nric_digits = nric.slice(1, 8)
checkdigit = compute(nric_digits)
correct_suffix = lookup(checkdigit, prefix)
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
