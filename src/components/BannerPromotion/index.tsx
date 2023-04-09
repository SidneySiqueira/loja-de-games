import { Product } from "@/Utils/types"
import * as S from "./styled"

interface BannerPromotionProps {
    promotion: Product
}

export default function BannerPromotion({promotion}: BannerPromotionProps) {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ImageBox>
                    <S.Image src={promotion.image} />
                </S.ImageBox>
                <S.Announcement>
                    <S.Price>{`Somente R$${promotion.price}`}</S.Price>
                    <S.Title>{promotion.name}</S.Title>
                    <S.SubTitle>{promotion.description}</S.SubTitle>
                </S.Announcement>
            </S.Container>
            <S.Buy>Comprar</S.Buy>
        </S.Wrapper>
    )
}
