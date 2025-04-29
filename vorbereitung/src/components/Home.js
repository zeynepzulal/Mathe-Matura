
import { Link } from "react-router-dom";
import topicData from "./data";
import "./Home.css";

export default function Home() {
    const topics = Object.entries(topicData);

    return (
        <div>
            <h1>Mathe Vorbereitung</h1>
            <h2> Wähl ein Thema aus! </h2>
            <div>
                {topics.map(([id, topic]) => (
                    <button className="topic-button">
                        <Link to={`/topic/${id}`} key={id} className="topic-card">
                            {topic.title}
                        </Link>
                    </button>
                ))}
            </div>
        </div>
    );
} 