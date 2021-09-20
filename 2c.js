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
  
  // Write a function which addUserSkill which can add skill to a user only if the user exist.
const addUserSkill = (arr, name, skill) => {
  let found = false;
  for (const user of arr) {
    if (user["name"] === name) {
      user.skills.push(skill);
      found = true;
      break;
    }
  }
  if (!found) {
    return "A user does not exist";
  }

  return arr;
};
console.log(addUserSkill(users, "Brook", "React"));