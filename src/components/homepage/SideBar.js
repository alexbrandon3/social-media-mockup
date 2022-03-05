import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import "./SideBar.css";
import { Users } from "../../dummyData";
import CloseFriend from "./sideBar/CloseFriend";

// const SideBar = () => {
//   return (
//     <div className="w-1/4 h-full overflow-y-scroll scrollbar-track-gray-100 scrollbar-thumb-gray-400 sticky top-12 z-50">
//       <div className="p-5">
//         <ul className="p-0 m-0 list-none">
//           <li className="flex items-center mb-5">
//             <RssFeed className="mr-3" />
//             <span className="">Feed</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <Forum className="mr-3" />
//             <span className="">Chat</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <OndemandVideo className="mr-3" />
//             <span className="">Videos</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <Groups className="mr-3" />
//             <span className="">Groups</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <Bookmark className="mr-3" />
//             <span className="">Bookmarks</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <HelpOutline className="mr-3" />
//             <span className="">Questions</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <WorkOutline className="mr-3" />
//             <span className="">Jobs</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <Event className="mr-3" />
//             <span className="">Events</span>
//           </li>
//           <li className="flex items-center mb-5">
//             <School className="mr-3" />
//             <span className="">Courses</span>
//           </li>
//         </ul>
//         <button className="w-36 h-10 border-none rounded bg-gray-200">
//           Show More
//         </button>
//         <hr className="mt-5 mb-5" />
//         <ul>
//           {Users.map((u) => (
//             <CloseFriend key={u.id} user={u} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
