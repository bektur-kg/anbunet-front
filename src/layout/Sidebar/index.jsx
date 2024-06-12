import {NavLink} from "react-router-dom";
import {sidebarLinks} from "../../utils/sidebarLinks.js";
import cn from 'classnames';
import {Logo} from "../../components";

const Sidebar = () => {
    return (
        <div className={"w-1/6 h-screen bg-green-300 flex flex-col justify-around items-center fixed"}>
            <Logo/>
            <div className={"w-full"}>
                <nav className={"w-full"}>
                    <ul className={"flex flex-col w-full"}>
                        {
                            sidebarLinks.map(({id, Icon, path, text}) => (
                                <NavLink
                                    key={id}
                                    to={path}
                                    className={({isActive}) => cn("text-lg font-medium w-full h-10 py-6 px-10 rounded flex items-center justify-between ",
                                        {
                                            ["bg-blue-500"]: isActive,
                                            ["text-white"]: isActive
                                        })}
                                >
                                    <Icon
                                        className={"text-2xl"}
                                    />
                                    {text}
                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Sidebar;


// import { NavLink } from "react-router-dom";
// import { sidebarLinks } from "../../utils/sidebarLinks.js";
// import cn from 'classnames';
// import { Logo } from "../../components";

// const Sidebar = () => {
//     return (
//         <div className="w-1/6 h-screen bg-gradient-to-b from-green-400 to-teal-500 flex flex-col justify-between items-center fixed p-6 shadow-lg">
//             <Logo className="mb-6" />
//             <div className="w-full">
//                 <nav className="w-full">
//                     <ul className="flex flex-col w-full space-y-2">
//                         {sidebarLinks.map(({ id, Icon, path, text }) => (
//                             <NavLink
//                                 key={id}
//                                 to={path}
//                                 className={({ isActive }) => cn(
//                                     "text-lg font-medium w-full h-12 px-6 rounded-lg flex items-center transition duration-300 transform hover:scale-105",
//                                     {
//                                         "bg-blue-600 text-white shadow-md": isActive,
//                                         "bg-white text-gray-800 hover:bg-blue-500 hover:text-white": !isActive,
//                                     }
//                                 )}
//                             >
//                                 <Icon className="text-2xl mr-4" />
//                                 {text}
//                             </NavLink>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>
//             <div className="text-gray-500 text-sm mt-6">
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
