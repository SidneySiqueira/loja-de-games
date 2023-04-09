import { Product } from "@/Utils/types"
import * as S from "./styled"

interface BannerInfoProps {
    promotion: Product
}

export default function BannerInfo({promotion}:BannerInfoProps) {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ImageBox>
                    <S.Image src={promotion.image} />
                </S.ImageBox>
                <S.Announcement>
                    <S.Name>{promotion.name}</S.Name>
                    {promotion.shipping ? 
                    <S.Emphasis>{promotion.shipping && "Frete Grátis"}</S.Emphasis> :
                    <S.Emphasis>Oferta</S.Emphasis>
                    }
                    <S.Subtitle>{promotion.description}</S.Subtitle>
                </S.Announcement>
            </S.Container>
            <S.Buy>Click aqui para saber mais</S.Buy>
        </S.Wrapper>
    )
}
