import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import comp1 from "../../assets/comp1.png";
import comp2 from "../../assets/comp2.png";
import comp3 from "../../assets/comp3.png";
import comp4 from "../../assets/comp4.png";
import comp5 from "../../assets/comp5.png";
import comp6 from "../../assets/comp6.png";
import comp7 from "../../assets/comp7.png";
import comp8 from "../../assets/comp8.jpg";
import comp9 from "../../assets/comp9.png";
import comp10 from "../../assets/comp10.png";
import comp11 from "../../assets/comp11.jpg";
import comp12 from "../../assets/comp12.png";
import comp13 from "../../assets/comp13.png";

const competitions = [
  {
    sno: 1,
    name: "CentuRlTon Hackathon",
    date: "25-27-Nov-2022",
    organizedBy: "Ramaiyah Institute of Technology",
    venue: "Bengaluru",
    participation: "3rd Position",
    imageSrc: comp1,
  },
  {
    sno: 2,
    name: "Tech. Future Hackathon",
    date: "28-Nov-2022",
    organizedBy: "Foundation for Innovation and Technology Transfer FITI",
    venue: "FITT-IIT Delhi",
    participation: "3rd Position",
    imageSrc: comp2,
  },
  {
    sno: 3,
    name: "Swach Technology Challenge",
    date: "12-Dec-2022",
    organizedBy: "Ministry of Housing & Urban Affairs",
    venue: "Chandigarh",
    participation: "3rd Position",
    imageSrc: comp3,
  },
  {
    sno: 4,
    name: "Tech. Hacks 3.0",
    date: "7-Jan-2023",
    organizedBy: "Department of Electronics and Communication Engineering",
    venue: "Punjab",
    participation: "3rd Position",
    imageSrc: comp4,
  },
  {
    sno: 5,
    name: "Smart App Development Hackathon",
    date: "20-21-Jan-2023",
    organizedBy: "Department of Computer Engineering and Science",
    venue: "Punjab",
    participation: "3rd Position",
    imageSrc: comp5,
  },
  {
    sno: 6,
    name: "India International Science Festival",
    date: "21-24-Jan-2023",
    organizedBy:
      "Ministry of Science & Technology, Department of Atomic Energy, Government of M.P. India",
    venue: "Bhopal",
    participation: "3rd Position",
    imageSrc: comp13,
  },
  {
    sno: 7,
    name: "5th Technovation Hackathon",
    date: "30-Jan-4-Feb-2023",
    organizedBy: "Sharda University",
    venue: "Greater Noida",
    participation: "3rd Position",
    imageSrc: comp6,
  },
  {
    sno: 8,
    name: "Chitkara Valorant Championship",
    date: "19-21-Feb-2023",
    organizedBy: "Chitkara University, Punjab",
    venue: "Rajpura",
    participation: "2nd Position",
    imageSrc: comp7,
  },
  {
    sno: 9,
    name: "Energy Conservation Week",
    date: "29-Mar-2023",
    organizedBy: "Indian Institute of Technology",
    venue: "Ropar",
    participation: "3rd Position",
    imageSrc: comp8,
  },
  {
    sno: 10,
    name: "Hack IT Sapiens",
    date: "14-16-Apr-2023",
    organizedBy: "Poornima College of Engineering",
    venue: "Jaipur",
    participation: "1st and 2nd Position",
    imageSrc: comp9,
  },
  {
    sno: 11,
    name: "Hackathon Solution for Waste Reduction",
    date: "30-Jun-01-July-2023",
    organizedBy: "Chitkara University, Punjab",
    venue: "Rajpura",
    participation: "3rd Position",
    imageSrc: comp10,
  },
  {
    sno: 12,
    name: "Engineer's Day Celebrations",
    date: "15-Sep-2023",
    organizedBy: "Chitkara University, Punjab",
    venue: "Rajpura",
    participation: "2nd Position",
    imageSrc: comp11,
  },
  {
    sno: 13,
    name: "TechQuake 2023",
    date: "18-19-Oct.-2023",
    organizedBy: "Indian Society for Technical Education",
    venue: "S.B.S. State University",
    participation: "1st, 2nd, 3rd Position",
    imageSrc: comp12,
  },
];

const publications = [
  {
    faculty: "Dr. Anupma, Dr. Shonak, Dr. Rachit",
    title: "Tri-band Antenna for Compact Wireless Sensor Nodes",
    status: "Published",
    database: "Scopus",
  },
  {
    faculty: "Dr. Ramandeep Kaur, Dr. Harjinder Singh, Dr. Manvinder Sharma",
    title: "SIW based Leaky Wave antenna for Aerospace application in X band",
    status: "Published",
    database: "Scopus",
  },
  {
    faculty: "Dr. Ramesh Kumar. R K Ratnesh, Jai Singh",
    title:
      "Recent Prospects of Medical Imaging and Sensing Technologies Based on Electrical Impedance Data Acquisition System",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manvinder Sharma, Harjinder Singh, Anuj Gupta",
    title:
      "Target identification and control model of autopilot for passive homing missiles",
    status: "Published",
    database: "SCIE",
  },
  {
    faculty: "Akhilesh Kumar, I. Keshtha, Jyoti Bhola, MW Bhatt",
    title:
      "Application of Artificial Neural Network Unified with Fuzzy Logic for Systematic Stock Market Prediction",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manish Singla, Jyoti Gupta. M. Alsharif, K. Yahay, A. Jahid",
    title:
      "Sustainable Development of a Direct Methanol Fuel Cell Using the Enhanced LSHADE Algorithm and Newton Raphson Method",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Ashish Kumar Singh, Ramesh Kumar, Sunil Dhawan, Vikas Malhotra",
    title:
      "A Comparative Analysis of Fetomaternal monitoring Techniques utilizing the Bio-Impedance Technique",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manisha Sharma, Satyajit Anand, Rajeev Pourush",
    title: "Landscape of epilepsy research: Analysis and Future Trajectory",
    status: "Published",
    database: "SCI",
  },
  {
    faculty:
      "Ramesh Kumar, R.K. Ratnesh, J. Singh, R. Chandra, G. Singh, V. Vishnoi",
    title:
      "Recent Prospects of Medical Imaging and Sensing Technologies Based on Electrical Impedance Data Acquisition System",
    status: "Published",
    database: "Scopus",
  },
];

export default function Research() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Competitions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={competition.imageSrc}
                alt={competition.name}
                className="w-full h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-4">{competition.name}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {competition.date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Organized By:</strong> {competition.organizedBy}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Venue:</strong> {competition.venue}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Participation/Position:</strong>{" "}
                {competition.participation}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Publications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4">
                {publication.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Faculty:</strong> {publication.faculty}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Status:</strong> {publication.status}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Database:</strong> {publication.database}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
