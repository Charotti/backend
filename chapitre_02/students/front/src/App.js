import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState();
  const [value, setValue] = useState("");
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
  function onSubmit(e) {
    e.preventDefault();
  }
  return students ? (
    <div>
      <ul>{studentsList()}</ul>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={console.log(value)}>Valider</button>
      </form>
    </div>
  ) : (
    <div>
      <p>Liste en chargement</p>
    </div>
  );
}
