import "./TasksSection.css";
import taskAssistant from "../assets/pdf/Group5658.png";

export default function TasksSection() {
  return (
    <section className="tasks-section">
      <div className="tasks-content">
        <h2>
          What Your Virtual Assistant<br />
          <span>Can Take Off Your Plate</span>
        </h2>
        <ul className="tasks-list">
          <li>Lead follow-ups and enquiry responses</li>
          <li>Appointment booking and calendar management</li>
          <li>CRM updates and pipeline tracking</li>
          <li>Inbox and email management</li>
          <li>Data entry and admin tasks</li>
          <li>Customer support via email and chat</li>
          <li>Expert call handling and follow-ups</li>
        </ul>
        <p className="tasks-note">
          Additional support available across sales, bookkeeping, and specialised roles based on your needs.
        </p>
        <p className="tasks-closing">
          Free up your time from admin work and focus on growing your business.
        </p>
      </div>

      <div className="team-grid-wrap">
        <img className="task-assistant" src={taskAssistant} alt="Dedicated virtual assistant" />
      </div>
    </section>
  );
}
