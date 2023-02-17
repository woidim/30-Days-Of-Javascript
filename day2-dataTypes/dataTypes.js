let challenge = '30 Days Of Javascript'

console.log(challenge)
console.log(challenge.length)

let upperCase = challenge.toUpperCase()
console.log(upperCase)

let lowerCase = challenge.toLowerCase()
console.log(lowerCase)

let cutFirstWord = challenge.substring(0, 2)
console.log(cutFirstWord)

let cutWord = challenge.substring(3, challenge.length)
console.log(cutWord)

let includeWord = challenge.includes('Script')
console.log(includeWord)

const splitLetter = challenge.split('') //do not use spaces
console.log(splitLetter)
console.log(splitLetter[3])

const splitWord = challenge.split(' ')//use space
console.log(splitWord)
console.log(splitWord[3])


let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const splitComma = company.split(', ')//use comma
console.log(splitComma)
console.log(splitComma[5])

let replaceWord = challenge.replace('Javascript', 'Python')
console.log(replaceWord)

console.log(challenge.charAt(15))//character at index 15 of variable challenge

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))


let senteneWord = 'You cannot end a sentence with because because because is a conjunction'

console.log(senteneWord.indexOf('You'))

console.log(senteneWord.lastIndexOf('conjunction'))

console.log(senteneWord.search('You'))

console.log(challenge.trim())

console.log(challenge.startsWith('30'))

console.log(challenge.endsWith('Javascript'))

console.log(challenge.match('a'))

let day = '30 Days Of '
console.log(day.concat('Javascript'))

console.log(challenge.repeat(2))



