let billAmount = 125

let service = 'Great'

let tipPercent;

let totalTip;

let totalBill;

let numPeople = 5

let totalBillPerPerson;

function calcTip() {
	if (service === 'Great') {
		tipPercent = .2
	} else if (service === 'Good') {
		tipPercent = .15
	} else if (service === 'Terrible') {
		tipPercent = .1
	}
}

calcTip();
totalTip = tipPercent * billAmount

console.log(`Your total tip is $${totalTip}.`)

totalBill = totalTip + billAmount

console.log(`Your total bill is $${totalBill}.`)

totalBillPerPerson = totalBill / numPeople

console.log(`Each person pays $${totalBillPerPerson}`)