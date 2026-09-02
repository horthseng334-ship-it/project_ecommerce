import { Children, createContext, useContext, useMemo, useState } from "react";
import { ProductData } from "../data/ProductData";

export const ProductContext = createContext();
export const ProductProvider = ({Children})=>{
    const [Product, setproduct] = useState (ProductData);
    const [selectbrand, setselectbrand] = useState("All");
    const [selectcategory, setselectcategory]=useState("All");

    const filterProduct = useMemo(()=>{
        return Product.filter((item)=>{
             const brandMath = selectbrand === "All" || item.brand ===selectBarand;
            const categoryMath = selectcategory === "All"||item.category===selectCategory;
            return brandMath && categoryMath;
        });
    },
    [Product, selectbrand,selectcategory]);
    return(
        <ProductContext.Provider
        value={{
            Product,
            selectbrand,
            setselectcategory,
            setselectbrand,
            selectcategory,
            filterProduct,
        }}
        >
            {Children}
        </ProductContext.Provider>
    );

};
export const useProduct = () => useContext (ProductContext);