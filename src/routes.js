import Home from "@/views/Home";
import Calendar from "@/views/Calendar";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
        meta: { title: "Календарь с расписанием" },
        props: true
    },
    {
        path: "*",
        redirect: "/"
    }
];
