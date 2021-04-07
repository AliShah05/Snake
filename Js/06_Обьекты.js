//
// const person = {
//     name: 'Ali',
//     age: 16,
//     isProgrammer: true,
//     language: ['Ru,En'],
// // 'Complex key': 'Complex Value',
// //     ['key_' + (1 + 5)]: 'Computed key',
//     info() {
//         console.info('Информация про имени человек', this.name)
//     }
// }
//
// const naga = {
//     'Margin': 'Margin Top'
// }
// //
// // console.log(person.name)
// // const agekey = 'age'
// // console.log(person[agekey])
// // console.log(person)
// //
// // console.log(person['key_6'] = undefined)
// // delete person['key_6']
// //
//
// // const name = person.name
// // const age = person.age
// // const language = person.language
// // const {name,age, language} = person
// //
// // console.log(name, age ,language)
//
// console.log(person)
// // for (let key in person){
// //     if (person.hasOwnProperty()) {}
// //     console.log('key', key),
// //     console.log('value', person[key])
// // }
// //
//
//
// // const keys = Object.keys(person)
// //  keys.forEach( (key) => {
// //     console.log('key', key),
// //     console.log('value', person[key])
// // })
// //
// //
//
// // Context
// // person.info()
//
// const logger = {
//     keys(obj) {
//         console.log('Objeckt Keys', Object.keys(this))
//     },
//     keysAndValue() {
//         Object.keys(this).forEach( key => {
//             console.log(`"${key}": ${this[key]}`)
//             })
//     },
//
// }
//
// // const bound = logger.keys.bind(logger)
// // bound()
//
// logger.keysAndValue.call(person)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
