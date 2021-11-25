// images
import team1 from "../public/img/team-1-800x800.jpg";
import team2 from "../public/img/team-2-800x800.jpg";
import team3 from "../public/img/team-3-800x800.jpg";
import team4 from "../public/img/team-4-470x470.png";

export const fetchUsers = () => {
  return [
    {
      id: 1,
      image: team1,
      name: "Ryan Tompson",
      prof: "Web Developer",
    },
    {
      id: 2,
      image: team2,
      name: "Romina Hadid",
      prof: "Marketing Specialist",
    },
    {
      id: 3,
      image: team3,
      name: "Alexa Smith",
      prof: "UI/UX Designer",
    },
    {
      id: 4,
      image: team4,
      name: "Jenna Kardi",
      prof: "Founder and CEO",
    },
  ];
};
