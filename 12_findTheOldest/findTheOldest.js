const findTheOldest = function(people) {
    let oldestPerson = null;
    let maxAge = -1;
  
    const getCurrentAge = (birthYear, deathYear) => {
      const currentYear = new Date().getFullYear();
      const deathYearOrCurrentYear = deathYear || currentYear;
      return deathYearOrCurrentYear - birthYear;
    };
  
    for (const person of people) {
      const { yearOfBirth, yearOfDeath } = person;
      const currentAge = getCurrentAge(yearOfBirth, yearOfDeath);
  
      if (currentAge > maxAge) {
        maxAge = currentAge;
        oldestPerson = person;
      }
    }
  
    return oldestPerson;
  }

// Do not edit below this line
module.exports = findTheOldest;
