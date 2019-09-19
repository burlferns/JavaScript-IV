// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects() {
        let allSubjects = "";
        let lastElement = this.favSubjects.length-1;
        this.favSubjects.forEach((element,index) => {
            allSubjects=allSubjects + element + (index!==lastElement ? ", " : "");
        });
        console.log(`The student ${this.name} favorite subjects are: `+allSubjects);
    }
    PRAssigment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standup times!`);
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


console.log("************************* This is output from LAMBDA-CLASSES.JS ***************************");

//**************** Test classes
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const barney = new Student({
    name: 'Barney',
    location: 'New York',
    age: 20,
    previousBackground: "Community College",
    className: "CS132",
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const sam = new ProjectManager({
    name: 'Sam',
    location: 'San Diego',
    age: 40,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `No soup for you`,
    gradClassName: "CS1",
    favInstructor: "Sean"
});

fred.speak();
fred.grade(barney,"CSS");
fred.demo("HTML");
console.log(`Fred's age is ${fred.age}`);
console.log(`Fred's catch phrase is: ${fred.catchPhrase}`);
barney.listsSubjects();
barney.PRAssigment("Node");
barney.sprintChallenge("React");
console.log(`Barney is a student in the class ${barney.className}`);
sam.standUp("web24");
sam.debugsCode(barney,sam.favLanguage);
console.log(`${sam.name} is ${sam.age} years old and he is living in ${sam.location}`);
