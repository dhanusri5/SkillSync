// src/features/profile/model/profileModel.js

export const getProfileModel = () => ({
  name: "Ganeswara Dande",
  email: "dandegani57@gmail.com",
  stats: [
    { value: 2, label: "Skills" },
    { value: 2, label: "Projects" },
    { value: 3, label: "Teams Joined" }
  ],
  skills: ["python", "java"],
  interests: ["gaming", "good"],
  projects: [
    { title: "hello", description: "hello", year: "2024" },
    { title: "goood==d", description: "goood", year: "2024" }
  ],
  activity: [
    { text: 'Joined "AI Innovation Team"', time: "2 days ago", color: "#22c55e" },
    { text: "Updated skills profile", time: "1 week ago", color: "#3b82f6" },
    { text: 'Completed "Frontend Masters" project', time: "2 weeks ago", color: "#a21caf" }
  ]
});
