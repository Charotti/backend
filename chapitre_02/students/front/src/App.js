import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/students")
      .then((res) => setStudents(res.data))
      .catch((error) => alert(error));
  }, []);
  function studentsList() {
    if (students) {
      return students.map((student, i) => {
        return <li key={i}>{student.name}</li>;
      });
    }
  }

  return students ? (
    <ul>{studentsList()}</ul>
  ) : (
    <div>
      <p>Liste en chargement</p>
    </div>
  );
}
