function skillsMember() {}
return {
  name: "John",
  age: 30,
  skills: ["HTML", "CSS", "JS"],
  greet() {
    console.log(`Hello ${this.name}`);
  },
  showSkills() {
    this.skills.forEach((skill) => {
      console.log(skill);
    });
  },
};
