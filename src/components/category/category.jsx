import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const AddCategory = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if (!id) {

            setCategory({
                name : '',
                image : '' ,
                description : ''
            })

            return;
        };


        const getCategory = async () => {
            const response = await axios.get(
                `https://6ac658ffbea0e72cf5c8ea72.mockapi.io/category/${id}`
            );

            setCategory(response.data);
        };

        getCategory();
    }, [id]);

    const [category , setCategory] = useState({
        name : '' ,
        image : '' ,
        description : ''
    })

    const changeCategory = (e) => {

        const {name , value} = e.target
        setCategory(prev => ({
            ...prev ,
            [name] : value
        }))

    }

    const onClick = () => {
        if(id) updateCategory()
        else addCategory();
    }

    const updateCategory = async () => {
        try {
            const response = await axios.put(
                `https://6ac658ffbea0e72cf5c8ea72.mockapi.io/category/${id}`,
                category
            );

            setTimeout(() => {
                navigate('/dashboard/category')
            } , 200)

        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    const addCategory = async () => {


        try {
            const response = await axios.post(
                "https://6ac658ffbea0e72cf5c8ea72.mockapi.io/category" , 
                category
            );

            console.log("Category added:", response.data);

            setCategory({
                name: "",
                image: "",
                description: "",
            });

            
            setTimeout(() => {
                navigate('/dashboard/category')
            } , 200)

        } catch (error) {
            console.error("Error adding category:", error);
        }
    }


    return (
         <div className="w-full space-y-6 px-2 py-2">
            
            <div>
                <h1 className="text-2xl font-semibold">
                    Add Category
                </h1>

                <p className="text-sm text-muted-foreground">
                    Create a new category.
                </p>
            </div>

            <div className="flex w-full gap-5  flex-col sm:flex-row">

                <div className="space-y-2 w-full">
                    <Label htmlFor="name">Category Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter category name"
                        value={category.name}
                        onChange={changeCategory}
                    />
                    <p></p>
                </div>

                <div className="space-y-2 w-full">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                        id="image"
                        name="image"
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        value={category.image}
                        onChange={changeCategory}
                    />
                    <p></p>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter category description"
                    rows={1}
                    value={category.description}
                    onChange={changeCategory}
                />
                <p></p>
            </div>


            <Button onClick={onClick}>
                {id ? "Update Category" : "Add Category"}
            </Button>
        </div>
    )
}



