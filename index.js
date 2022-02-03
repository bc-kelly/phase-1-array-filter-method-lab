// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//const findMatching = drivers.filter()
// function findMatching(collection) {
//     for (const driver of collection)
//     console.log(driver);
// }
// findMatching();
//doesnt use filter

// const result = drivers.filter(findMatching);
// function findMatching(person) {
//     return person = [];
// }
//passed only the third test, did not take into account the case

function findMatching(drivers, string) {
    return drivers.filter(
      (match) => match.toLowerCase() === string.toLowerCase()
    );
  }

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(help) {
    return help.toLowerCase().indexOf(string.toLowerCase()) === 0
})
}
//console.log(fuzzyMatch(drivers, "S"))

const driversFull = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
    ]

function matchName(drivers, string) {
    return drivers.filter(function(search) {
        return search.name === string;
    })
} 

console.log(matchName(drivers, "bobby"))

// function matchName(source, soughtName) {
//     return source.filter((record) => record.name === soughtName);
//   }