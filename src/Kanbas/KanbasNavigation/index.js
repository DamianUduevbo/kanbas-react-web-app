import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiFillRead } from "react-icons/ai";
import { BsFillPersonFill, BsFillCalendarFill } from "react-icons/bs";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const icons = [<BsFillPersonFill />, <AiFillDashboard />, <AiFillRead />, <BsFillCalendarFill />];

  const { pathname } = useLocation();
  return (
    <div className="mainnavbar" style={{ width: 150, backgroundColor: 'black' }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item py-2 d-flex flex-column align-items-center text-danger ${(pathname.includes(link) && "bg-white active") || "bg-black"}`}
        >
          {icons[index]}
          {link}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;