import { SidebarGroup } from "./types";
import MageDashboard2 from "~icons/mage/dashboard-2.jsx";
import BiFolder from "~icons/bi/folder.jsx";
import BiFilesAlt from "~icons/bi/files-alt.jsx";
import FluentPeopleTeam48Regular from "~icons/fluent/people-team-48-regular.jsx";
import MingcuteBill2Line from "~icons/mingcute/bill-2-line.jsx";
import IconamoonProfile from "~icons/iconamoon/profile.jsx";

export const APP_NAVIGATION: SidebarGroup[] = [
  {
    header: "Storage",
    navs: [
      {
        type: "single",
        name: "Dashboard",
        url: "/app",
        icon: <MageDashboard2 />,
      },
      {
        type: "group",
        title: "Folders",
        icon: <BiFolder />,
        navs: [
          {
            name: "View All",
            url: "/app/folders",
            type: "single",
          },
          {
            name: "Recent",
            url: "/app/folders?tab=recent",
            type: "single",
          },
          {
            name: "Favourite",
            url: "/app/folders?tab=favourite",
            type: "single",
          },
          {
            name: "Shared",
            url: "/app/folders?tab=shared",
            type: "single",
          },
        ],
      },
      {
        type: "single",
        name: "All Files",
        url: "/app/files",
        icon: <BiFilesAlt />,
      },
    ],
  },
  {
    header: "Users",
    navs: [
      {
        type: "single",
        name: "Team Members",
        url: "/app/team",
        icon: <FluentPeopleTeam48Regular />,
      },
      {
        type: "single",
        name: "Billing",
        url: "/app/billing",
        icon: <MingcuteBill2Line />,
      },
      {
        type: "single",
        name: "Profile",
        url: "/app/profile",
        icon: <IconamoonProfile />,
      },
    ],
  },
];
