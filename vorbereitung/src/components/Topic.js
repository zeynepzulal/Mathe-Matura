// Seite der ausgewählten Thema
import { useParams } from "react-router-dom";
import topicData from "./data";
import { useState } from "react";

export default function Topic() {
  const { topicId } = useParams();
  const topic = topicData[topicId];

  const [showSolution, setShowSolution] = useState(
    topic.exercises.map(() => false)
  );

  const toggleSolution = (index) => {
    const updated = [...showSolution];
    updated[index] = !updated[index];
    setShowSolution(updated);
  };

  if (!topic) return <p>Thema nicht gefunden.</p>;

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.theory}</p>
      <hr />
      {topic.exercises.map((ex, i) => (
        <div key={i}>
          <p><strong>Frage:</strong> {ex.question}</p>

          <button onClick={() => toggleSolution(i)}>
            {showSolution[i] ? "Lösung verbergen" : "Lösung anzeigen"}
          </button>
          
          {showSolution[i] && <p><strong>Lösung:</strong> {ex.solution}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
}
