import { AiOutlineHome } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
        >
          <AiOutlineHome className="text-lg" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
        >
          <RiTimeLine className="text-lg" />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "bg-[#244D3F] text-white" : ""}`
          }
        >
          <ImStatsDots className="text-lg" />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl flex gap-0">
            <span className="font-extrabold">Keen</span>
            <span className="text-black/70">Keeper</span>
          </Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
