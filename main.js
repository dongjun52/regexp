const str = `
010-1234-5678
ldj5471@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=matrix
the quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /andy/gi

console.log(regexp.test(str))