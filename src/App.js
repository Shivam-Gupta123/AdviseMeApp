import React, { useState } from 'react';
import './App.css';
import osuLogo from './osu-logo.png'; // Make sure the logo is added

const curriculum = {
  "Freshman Year": {
    Fall: [
      "Introduction to Computer Science",
      "Calculus I",
      "General Education Requirement",
      "Introduction to Programming (CSE 1222)"
    ],
    Spring: [
      "Data Structures and Algorithms (CSE 2231)",
      "Calculus II",
      "General Education Requirement",
      "Discrete Mathematics"
    ]
  },
  "Sophomore Year": {
    Fall: [
      "Software Engineering (CSE 3231)",
      "Linear Algebra",
      "Operating Systems",
      "General Education Requirement"
    ],
    Spring: [
      "Computer Architecture",
      "Theory of Computation",
      "Data Science Elective",
      "General Education Requirement"
    ]
  },
  "Junior Year": {
    Fall: [
      "Artificial Intelligence",
      "Database Systems",
      "Advanced Algorithms",
      "Technical Elective"
    ],
    Spring: [
      "Networks and Security",
      "Capstone Project (CSE 5911)",
      "General Education Requirement",
      "Technical Elective"
    ]
  },
  "Senior Year": {
    Fall: [
      "Elective - Mobile Application Development",
      "Elective - Cybersecurity",
      "Capstone Project II (CSE 5912)",
      "General Education Requirement"
    ],
    Spring: [
      "Technical Elective",
      "Elective - Machine Learning",
      "General Education Requirement",
      "Senior Thesis"
    ]
  }
};

function CurriculumPath() {
  const [selectedYear, setSelectedYear] = useState("Freshman Year");
  const [selectedSemester, setSelectedSemester] = useState("Fall");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSemester("Fall"); // Reset semester when year changes
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="curriculum-container">
      <h2>Curriculum Path</h2>
      <div className="dropdowns">
        <select value={selectedYear} onChange={handleYearChange} className="dropdown">
          {Object.keys(curriculum).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select value={selectedSemester} onChange={handleSemesterChange} className="dropdown">
          {Object.keys(curriculum[selectedYear]).map((semester) => (
            <option key={semester} value={semester}>{semester}</option>
          ))}
        </select>
      </div>

      <div className="course-list">
        <h4>{selectedYear} - {selectedSemester} Semester</h4>
        <ul>
          {curriculum[selectedYear][selectedSemester].map((course, idx) => (
            <li key={idx} className="fade-in">{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={osuLogo} alt="Ohio State University Logo" className="osu-logo" />
        <h1>Ohio State University</h1>
        <h2>Computer Science Graduation Path</h2>
      </header>
      <main>
        <CurriculumPath />
      </main>
    </div>
  );
}

export default App;
