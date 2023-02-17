console.log('The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.')

console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'")

let stringTen = '10'
let numberTen = 10

console.log(typeof (stringTen) === typeof (numberTen))

console.log(typeof (Number(stringTen)) === typeof (numberTen))

let stringFloat = '9.8'

console.log(parseFloat(stringFloat) === numberTen)
console.log(parseFloat(Number(Math.round(stringFloat))) === numberTen)

let both1 = 'python'
let both2 = 'jargon'

console.log(both1.search('on'))
console.log(both2.search('on'))

let sentenceCheck = 'I hope this course is not full of jargon'
console.log(sentenceCheck.search('jargon'))

let randomNum1 = Math.floor(Math.random() * 101)
let randomNum2 = Math.floor(Math.random() * 50) + 50
let randomNum3 = Math.floor(Math.random() * 256)
console.log(randomNum1)
console.log(randomNum2)
console.log(randomNum3)

let js = 'Javascript'
let splitjs = js.split('')
let randomJs = Math.floor(Math.random() * js.length)
let arrJs = splitjs[randomJs]

console.log(arrJs)


let escapeNum = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'
console.log(escapeNum)

let sliceOut = 'You cannot end a sentence with because because because is a conjunction'
console.log(sliceOut.substring(31, 54))


