import { 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarMenuSkeleton
} from "@/components/ui/sidebar"
import { GalleryVerticalEnd } from "lucide-react"

export function AppSidebarHeader() {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem className="px-2.5" >
                
                {/* SidebarMenuButton handles hover states and icon-only collapsing automatically */}
            
                    <a href="#" className="flex gap-2">
                        
                        <div className="flex flex-col gap-0.5 leading-none">
                            <span className="font-semibold text-2xl">Acme Inc</span>
                            <span className="text-xs text-muted-foreground">v1.102.1</span>
                        </div>
                    </a>
        
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}