import { PersonCard, StudentCard, TeacherCard } from "./components/PersonCard";
import { Person, Student, Teacher } from "./lib/person";

function App() {
  const john = new Person('John', 30);
  const jane = new Student('Jane', 20, 'A', 'Computer Science');
  const bob = new Teacher('Bob', 40, 'Mathematics', 'AIT');

  return (
    <>
      <div className="container">
        <PersonCard person={john.info()} />
        <StudentCard student={jane.info()} />
        <TeacherCard teacher={bob.info()} />
      </div>
    </>
  )
}

export default App
