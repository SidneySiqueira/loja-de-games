import { useSelector } from "react-redux";
import * as S from "./styled"
import { RootState } from "@/Redux/store";
import { SetStateAction, useEffect, useState } from "react";
import { Category, Product } from "@/Utils/types";

interface FilterProps {
    categories: Category[],
    setProductsByCategory: React.Dispatch<React.SetStateAction<boolean>>,
    setProductsFilter: React.Dispatch<React.SetStateAction<Product>>,
}

export default function Filter({ categories, setProductsByCategory, setProductsFilter }: FilterProps) {
    const [category, setCategory] = useState<SetStateAction<string>>()

    const { products } = useSelector((state: RootState) => state.api);

    const listProducts = products ? Object.values(products) : [];

    const filterProducts = listProducts.filter((products) => (products as Product).category === category) as unknown as Product

    const handleCategorys = (choice: string) => {
        setCategory(choice)
        setProductsByCategory(true)
    }

    useEffect(() => {
        setProductsFilter(filterProducts)
    }, [category])

    return (
        <S.Wrapper>
            <S.Title>Categorias</S.Title>
            {categories.map((category) => (
                <S.Topics key={category.item} onClick={() => handleCategorys(category.item)}>{`-${category.item}`}</S.Topics>
            ))}
        </S.Wrapper>
    )
}