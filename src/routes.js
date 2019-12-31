import Calendar from "@/views/Calendar";

export const routes = [
    {
        path: "/",
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
