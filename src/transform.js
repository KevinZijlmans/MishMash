function groupAdultsByAgeRange(persons) {
    if(persons.length === 0){
        return {}
    }
    const groupAdults = persons
    // filter does filter, but it's not showing up green in the test.
    .filter(person => {
         if(person.age > 18){
             return person
         }})
    .reduce((categories, currentPerson) => {

        if(currentPerson.age >= 18 && currentPerson.age < 21){
            categories.younger.push(currentPerson)
        }
        if(currentPerson.age >= 21 && currentPerson.age < 30){
           categories.young.push(currentPerson)    
        }
        if(currentPerson.age >= 31 && currentPerson.age < 40){
            categories.medium.push(currentPerson)
        }
        if(currentPerson.age >= 41 && currentPerson.age < 50){
            categories.old.push(currentPerson)
        }
        if(currentPerson.age >= 51){
            categories.older.push(currentPerson)
        }
    // It is grouping people but not showing up green, dont know why?
        return categories
    }, {
        younger: [],
        young: [],
        medium: [],
        old: [],
        older: []
    })
    console.log(groupAdults)
}

    
    module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange