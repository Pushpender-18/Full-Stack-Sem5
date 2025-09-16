export function PersonCard({ person }) {
	return (
	<div className="person-card">
		<div className="person-heading">Person</div>
		<div className="person-info">
			<ul>
				<li><strong>Name:</strong> {person.name}</li>
				<li><strong>Age:</strong> {person.age}</li>
			</ul>
		</div>
	</div>);
}

export function StudentCard({ student }) {
	return (
	<div className="person-card student-card">
		<div className="person-heading">Student</div>
		<div className="person-info">
			<ul>
				<li><strong>Name:</strong> {student.name}</li>
				<li><strong>Age:</strong> {student.age}</li>
				<li><strong>Grade:</strong> {student.grade}</li>
				<li><strong>Course:</strong> {student.course}</li>
			</ul>
		</div>
	</div>);
}

export function TeacherCard({ teacher }) {
	return (
	<div className="person-card teacher-card">
		<div className="person-heading">Teacher</div>
		<div className="person-info">
			<ul>
				<li><strong>Name:</strong> {teacher.name}</li>
				<li><strong>Age:</strong> {teacher.age}</li>
				<li><strong>Subject:</strong> {teacher.subject}</li>
				<li><strong>Department:</strong> {teacher.department}</li>
			</ul>
		</div>
	</div>);
}	