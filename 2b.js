const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTM"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];
  
//   / Write a function which addUser  to the user array only if the user does not exist.
const newUser = {
  name: "Ron",
  scores: 800,
  skills: ["HTML", "CSS", "JS"],
  age: 25,
};
const addUser = (arr, newUser) => {
  for (const user of arr) {
    if (user["name"] === newUser.name) {
      return " A user does exist";
    }
  }
  arr.push(newUser);
  return arr;
};
console.log(addUser(users, newUser));