import PersonCard from "./Person/PersonCard";
import Sidebar from "./Sidebar";

const persons = [
  {
    name: "Kaustav Banerjee",
    age: 34,
    job: "Engineer",
  },
  {
    name: "Shrestha Bhattacharjee",
    age: 34,
    job: "Engineer",
  },
  {
    name: "Kaustav Banerjee",
    age: 34,
    job: "Engineer",
  },
  {
    name: "Shrestha Bhattacharjee",
    age: 34,
    job: "Engineer",
  },
];

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex flex-wrap w-2/3 h-fit bg-yellow-50">
        <p className="text-2xl m-3">Card list</p>
        <div className="flex w-full h-80 justify-start">
          {persons.map((el, index) => {
            return <PersonCard key={index} person={el}></PersonCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
