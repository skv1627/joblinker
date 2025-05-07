import React from "react";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <h1>Dashboard</h1>
      {role === "EMPLOYER" ? (
        <p>Welcome, Employer! Post jobs and view applications.</p>
      ) : (
        <p>Welcome, Job Seeker! Browse and apply for jobs.</p>
      )}
    </div>
  );
}

export default Dashboard;
