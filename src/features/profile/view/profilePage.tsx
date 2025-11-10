// src/features/profile/view/profilepage.tsx
import React from "react";
import { getProfileData } from "../controller/profileController";
import "../styles/profile.css";

export default function ProfilePage() {
  const user = getProfileData();

  return (
    <div className="profile-content">
      <h1 className="profile-title">{user.name}</h1>
      <div className="profile-email">{user.email}</div>

      <div className="profile-topstats">
        {user.stats.map((stat, i) => (
          <div className="profile-topstat-card" key={i}>
            <div className="profile-topstat-value">{stat.value}</div>
            <div className="profile-topstat-label">{stat.label}</div>
          </div>
        ))}
        <button className="profile-edit-btn">Edit Profile</button>
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Skills <span className="profile-edit-icon">✏️</span></div>
        <div className="profile-tags">
          {user.skills.map(s => (
            <span className="profile-tag" key={s}>{s}</span>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Interests <span className="profile-edit-icon">✏️</span></div>
        <div className="profile-tags">
          {user.interests.map(i => (
            <span className="profile-tag" key={i}>{i}</span>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Past Projects <span className="profile-edit-icon">✏️</span></div>
        <div className="profile-projects">
          {user.projects.map((p, idx) => (
            <div className="profile-project-card" key={idx}>
              <div className="profile-project-title">{p.title}</div>
              <div className="profile-project-desc">{p.description}</div>
              <div className="profile-project-year">📅 {p.year}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title">Recent Activity</div>
        <div className="profile-activity-list">
          {user.activity.map((a, idx) => (
            <div className="profile-activity-item" key={idx}>
              <span className="profile-activity-dot" style={{ background: a.color }}></span>
              <span>{a.text}</span>
              <span className="profile-activity-time">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
