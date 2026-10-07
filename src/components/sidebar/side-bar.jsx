import { SidebarProvider, SidebarTrigger , Sidebar , SidebarContent , SidebarFooter , SidebarHeader , SidebarGroup  } from "@/components/ui/sidebar"
import { AppSidebarHeader } from "./side-bar-header"
import { AppSidebarContent } from "./side-bar-contet"

export const SideBar = () => {
    return (
        <Sidebar>
            <AppSidebarHeader />
            <AppSidebarContent />
            <SidebarFooter />
        </Sidebar>
    );
}




