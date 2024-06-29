// Sidebar.jsx
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, FileText, LogOut, Minimize2, Menu } from 'lucide-react';
import { FaRecycle } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { RiGitPullRequestFill } from "react-icons/ri";
import { redirect, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Recycle-E.svg"

const SidebarContext = React.createContext();

export default function Sidebar() {
  const navigateTo = useNavigate();
  const [expanded, setExpanded] = React.useState(true);
  
  const handleLogout = () => {
    //localStorage.clear();
    navigateTo("/");
}

  const sidebarItems = [
    {
      path: '/recycle-profile',
      icon: <FaUserAlt  size={20} />,
      text: 'Recycler Profile'
    },
    {
      path: '/recycle-process',
      icon: <FaRecycle size={20} />,
      text: 'Recycle Process',
      alert: true
    },
    {
      path: '/request',
      icon: <RiGitPullRequestFill  size={20} />,
      text: 'Request',
    }
  ];

  return (
    <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} transition-width duration-300`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center gap-2">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? 'w-auto' : 'w-0'}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-green-300 flex justify-center"
          >
            {expanded ? <Minimize2 /> : <Menu />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex flex-col justify-center items-center flex-1 px-3">
            {sidebarItems.map((item, index) => (
              <SidebarLink key={index} item={item} />
            ))}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 items-center justify-center hover:text-red-700 hover:bg-red-200">
          <LogOut />
          <div className={`flex justify-between items-center overflow-hidden ${expanded ? 'w-52 ml-3 p-3' : 'w-0'} transition-all`}>
            <div className="leading-4">
              <h4 onClick={handleLogout} className="font-semibold">Log Out</h4>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SidebarLink({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const { expanded } = React.useContext(SidebarContext);

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
      ${isActive ? 'bg-[#0FC90033] text-[#0FC900] border-l-2 border-green-700' : 'hover:bg-indigo-50 text-gray-600'}
    `}>
      <Link to={item.path} className="flex items-center w-full gap-1">
        <span className={`${isActive ? 'text-[#0FC900]' : ''}`}>{item.icon}</span>
        <span className={`overflow-hidden transition-all ${expanded ? 'w-48 ml-0' : 'w-0'} ${isActive ? 'text-[#0FC900]' : ''}`}>
          {item.text}
        </span>
      </Link>
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-[#0FC90033] text-[#0FC900] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {item.text}
        </div>
      )}
    </li>
  );
}
