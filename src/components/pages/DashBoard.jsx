// DashboardPage.jsx
import { Outlet } from "react-router-dom";
import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { SideBar } from "../sidebar/side-bar";

export default function DashBoardPage() {
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