import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories(c => [...categories, newCategory]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                )
                )
            }

        </>

    )
}