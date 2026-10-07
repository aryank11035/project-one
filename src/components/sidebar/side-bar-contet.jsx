import { Plus, List } from "lucide-react"
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from "../ui/sidebar"
import { Link, useNavigate } from "react-router-dom"


const linkObj = [
    {
        label: "Category",
        links: [
            {
                title: "Category List",
                path: "/dashboard/category",
                icon: List
            },
            {
                title: "Add Category",
                path: "/dashboard/category/add",
                icon: Plus
            }
        ]
    },
    {
        label: "Products",
        links: [
            {
                title: "Products List",
                path: "/dashboard/products",
                icon: List
            },
            {
                title: "Add Products",
                path: "/dashboard/products/add",
                icon: Plus
            }
        ]
    }
]


export const AppSidebarContent = () => {

    const navigate = useNavigate()
    return (
        <SidebarContent>
            <SidebarGroup>

                <SidebarGroupLabel>
                    Management
                </SidebarGroupLabel>

                {linkObj.map((link) => (
                    <SidebarMenu key={link.label}>

                        <SidebarMenuItem>

                            {/* Parent Menu Item */}
                            <SidebarMenuButton>
                                <span>{link.label}</span>
                            </SidebarMenuButton>

                            {/* Sub-items */}
                            <SidebarMenuSub>

                                {link.links.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <SidebarMenuSubItem key={item.path}>

                                            <SidebarMenuSubButton
                                                asChild
                                                className="cursor-pointer"
                                                onClick ={() => navigate(item.path)}
                                            >
                                                
                                                    <Icon className="size-4" />
                                                    <span>
                                                        {item.title}
                                                    </span>
                                                
                                            </SidebarMenuSubButton>

                                        </SidebarMenuSubItem>
                                    )
                                })}

                            </SidebarMenuSub>

                        </SidebarMenuItem>

                    </SidebarMenu>
                ))}

            </SidebarGroup>
        </SidebarContent>
    )
}