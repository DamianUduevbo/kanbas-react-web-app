import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiFillRead, AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillCalendarFill,
  BsFillInboxesFill,
  BsClockHistory,
} from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<BsFillPersonFill />, <AiFillDashboard />, <AiFillRead />, <BsFillCalendarFill />, <BsFillInboxesFill />, <BsClockHistory />, <AiOutlineFundProjectionScreen />, <BsFillPersonFill />, <BiHelpCircle />];

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