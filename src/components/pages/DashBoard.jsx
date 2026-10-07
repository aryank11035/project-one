// DashboardPage.jsx
import { Outlet, useNavigate } from "react-router-dom";
import {
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { SideBar } from "../sidebar/side-bar";
import { useEffect } from "react";

export default function DashBoardPage() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("accessToken");

        if (!token) {
            navigate("/");
        }
    }, []);

    return (
        
            <div className="w-full  flex min-h-screen">

                <SideBar />

                <main className="flex  flex-1 flex-col ">
                    <SidebarTrigger />

                    <div className="flex-1 min-h-0 ">

                        <Outlet />
                    </div>
                </main>

            </div>
        
    );
}