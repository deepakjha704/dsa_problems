function findFirstUserWithAgeLessThen26(users) {
  return users.reduce((found, user) => {
    if (!found && user.age < 26) {
      return user;
    }
    return found;
  }, null);
}

const firstUser = findFirstUserWithAgeLessThen26([
  { firstName: "deepak", age: 32 },
  { firstName: "taksh", age: 2 },
  { firstName: "amit", age: 32 },
]);
console.log(firstUser);
