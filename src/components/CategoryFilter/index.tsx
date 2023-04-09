import * as S from "./styled"
import CardProduct from "../CardProduct";
import { Product } from "@/Utils/types";

interface CategoryFilterProps {
    productsFilter: Product[]
}

export default function CategoryFilter({productsFilter}: CategoryFilterProps) {
    return (
        <S.Wrapper>
            <S.Container>
                {productsFilter.map((product) => <CardProduct key={product.name} product={product}/> )}
            </S.Container>
        </S.Wrapper>
    )
}
