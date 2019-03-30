function groupAdultsByAgeRange([]) {
    let AdultsByAgeRange = AdultsByAgeRange.reduce((categories, currentPerson) => {
        if(currentPerson.age >= 18){
            categories.young.push(currentPerson)
            return categories
        }
        if(currentPerson.age >= 21){
            categories.older.push(currentPerson)
            return categories
        }
        if(currentPerson.age >= 31){
            categories.evenOlder.push(currentPerson)
            return categories
        }
        if(currentPerson.age >= 41){
            categories.notTheOldest.push(currentPerson)
            return categories
        }
        if(currentPerson.age >= 51){
            categories.oldest.push(currentPerson)
            return categories
        } 
        return categories            
    },
        {
            young: [],
            older: [],
            evenOlder: [],
            notTheOldest: [],
            oldest: []
        })
    }
    
    module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange