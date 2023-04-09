import { Product } from "@/Utils/types"
import * as S from "./styled"
import { Divider, useMediaQuery } from "@mui/material"

interface CardProductProps {
    product: Product
}

export default function CardProduct({product}: CardProductProps) {

    const isLg = useMediaQuery("(max-width:980px)");

    return (
        <S.Wrapper>
            <S.CardProduct>
                <S.BoxImage>
                    <S.ImageProduct src={product.image} alt={product.name} />
                </S.BoxImage>
                <S.Name>{product.name}</S.Name>
                <S.Price>{`R$${product.price}`}</S.Price>
                <S.Description>{product.description}</S.Description>
                {isLg && <Divider orientation="horizontal" flexItem style={{ border: '1px solid black' }} />}
            </S.CardProduct>
        </S.Wrapper>
    )
}
