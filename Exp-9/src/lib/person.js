class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	info() {
		return {name: this.name, age: this.age};
	}
}

class Student extends Person {
	constructor(name, age, grade, course) {
		super(name, age);
		this.grade = grade;
		this.course = course;
	}

	info() {
		return {...super.info(), grade: this.grade, course: this.course};
	}
}

class Teacher extends Person {
	constructor(name, age, subject, department) {
		super(name, age);
		this.subject = subject;
		this.department = department;
	}

	info() {
		return {...super.info(), subject: this.subject, department: this.department};
	}
}

export { Person, Student, Teacher };