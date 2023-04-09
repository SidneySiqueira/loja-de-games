import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as S from "./styled"
import { Product } from "@/Utils/types";

interface BannerProps {
    featuredProducts: Product
}

export default function Banner({featuredProducts}: BannerProps) {
    const [expanded, setExpanded] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");
    return (
        <S.Wrapper>
            <S.ImageBox>
                <S.Image src={featuredProducts?.image} />
            </S.ImageBox>
            <S.Announcement>
                <S.Price>{`R$${featuredProducts?.price}`}</S.Price>
                {isMobile ? 
                <S.BoxDescription>
                    {featuredProducts?.description.length <= 100 || expanded
                        ? featuredProducts?.description
                        : featuredProducts?.description.substring(0, 50) + "..."}
                    {featuredProducts?.description?.length > 100 && (
                        <S.showMore onClick={() => setExpanded(!expanded)}>
                            {expanded ? "Ver menos" : "Ver mais"}
                        </S.showMore>
                    )}
                </S.BoxDescription> : 
                <S.Description>{featuredProducts.description}</S.Description>
                }
                <S.Buy>Comprar</S.Buy>
            </S.Announcement>
        </S.Wrapper>
    )
}
