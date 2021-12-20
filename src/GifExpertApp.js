import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// export function GifExperApp() {

//     return (
//         <>
//             <h2> GifExpertApp</h2>
//             <hr />
//         </>);
// }

export const GifExperApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories((c) => [...c,'HunterXHunter']);
    // setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifExperApp</h2>
            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Aregar</button> */}

            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}> {category} </li>
                    // })
                    categories.map(category => (
                        <GifGrid
                            key={ category}
                            category={category}
                        />
                    ))
                    // <li key={category}> {category} </li>)
                }

            </ol>



        </div>
    );
};
