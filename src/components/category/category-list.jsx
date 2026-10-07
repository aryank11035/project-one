import { useEffect, useState } from "react";
import axios from "axios";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const EmptyList = ({desc}) => {
    return (
        <div className="w-full  flex-1 flex items-center justify-center border">
            <h1 className="text-xl font-extrabold text-muted-foreground/40 ">{desc}</h1>
        </div>
    )
}


export const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async () => {
        try {
            const response = await axios.get(
                "https://6ac658ffbea0e72cf5c8ea72.mockapi.io/category"
            );

            setCategories(response.data);

        } catch (error) {
            console.log("Error fetching categories:", error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

   

    return (
        <div className="space-y-6 p-2  h-full flex-col flex">

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-semibold">
                        Categories
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Manage your product categories.
                    </p>
                </div>

                <Link to="/dashboard/category/add">
                    <Button>
                        Add Category
                    </Button>
                </Link>

            </div>

            {
                loading ? (
                    <EmptyList desc="loading"/>
                ) : (
                    
                        categories.length === 0 ? ( 
                            <EmptyList desc="empty list" />
                        ) : (
                            <div className="border">

                                            <Table>

                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>ID</TableHead>
                                                        <TableHead>Image</TableHead>
                                                        <TableHead>Name</TableHead>
                                                        <TableHead>Description</TableHead>
                                                        <TableHead className="text-right">
                                                            Actions
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>

                                                <TableBody>
                                    
                                                
                                                    {categories.map((category) => (

                                                        <TableRow key={category.id}>

                                                            <TableCell>
                                                                {category.id}
                                                            </TableCell>

                                                            <TableCell>
                                                                <img
                                                                    src={category.image}
                                                                    alt={category.name}
                                                                    className="h-10 w-10 object-cover"
                                                                />
                                                            </TableCell>

                                                            <TableCell className="font-medium">
                                                                {category.name}
                                                            </TableCell>

                                                            <TableCell className="max-w-xs truncate">
                                                                {category.description}
                                                            </TableCell>

                                                            <TableCell className="text-right">

                                                                <div className="flex justify-end gap-2">

                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                    >
                                                                        Edit
                                                                    </Button>

                                                                    <Button
                                                                        variant="destructive"
                                                                        size="sm"
                                                                    >
                                                                        Delete
                                                                    </Button>

                                                                </div>

                                                            </TableCell>

                                                        </TableRow>

                                                    ))}

                                                </TableBody>

                                            </Table>

                                        </div>
                        )

                    
                )
            }






             

        </div>
    );
};