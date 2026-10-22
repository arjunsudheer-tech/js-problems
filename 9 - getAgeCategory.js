const getAgeCategory = (age) => {
  if (age < 0) {
    return 'Invalid Age';
  } else if (age >= 60) {
    return 'Senior';
  } else if (age >= 20) {
    return 'Adult';
  } else if (age >= 13) {
    return 'Teenager';
  } else {
    return 'Child';
  }
}

console.log(getAgeCategory(23));