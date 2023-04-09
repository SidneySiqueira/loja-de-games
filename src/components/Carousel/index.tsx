import React, { useEffect, useState } from "react";
import * as S from "./styled"
import { useTransition, animated } from "react-spring";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Product } from "@/Utils/types";

interface CarouselProps {
    products: Product
}

export default function Carousel({ products }: CarouselProps) {
    const [count, setCount] = useState(1)  
    
    const listProducts = products ? Object.values(products) : [];

    const isXl = useMediaQuery("(min-width:1100px)");
    const isMobile = useMediaQuery("(min-width:768px)");
    const isSm = useMediaQuery("(min-width:568px)");

    const [currentIndex, setCurrentIndex] = useState(0);  
    
    useEffect(() => {
        setCount(
          isXl ? 4 : isMobile ? 3 : isSm ? 2 : 1
        );
      }, [isXl, isMobile, isSm]);
    
    const handleClickPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleClickNext = () => {
        if (isXl) {
            if (currentIndex < listProducts.length - 4) {
                setCurrentIndex(currentIndex + 1);
            }
        } else if (isMobile) {
            if (currentIndex < listProducts.length - 3) {
                setCurrentIndex(currentIndex + 1);
            }
        } else if (isSm) {
            if (currentIndex < listProducts.length - 2) {
                setCurrentIndex(currentIndex + 1);
            }
        } else {
            if (currentIndex < listProducts.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    const currentProducts = listProducts.slice(currentIndex, Math.min(currentIndex + count, 8));  

    const transitions = useTransition(currentProducts, {
        from: { opacity: 0, transform: "translate3d(0,-20px,0)" },
        enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
        leave: { opacity: 0, transform: "translate3d(0,20px,0)" },
    });

    return (
        <S.Wrapper>
            {currentIndex > 0 && <S.ArrowButton onClick={handleClickPrev}>{"<"}</S.ArrowButton>}
            <S.ListProduct>
                {transitions((style, item) => (
                    <animated.div style={style} key={item.name}>
                        <S.CardProduct>
                            <S.BoxImage>
                                <S.ImageProduct src={item.image} alt={item.name} />
                            </S.BoxImage>
                            <h3>{item.name}</h3>
                            <p>{`R$${item.price}`}</p>
                        </S.CardProduct>
                    </animated.div>
                ))}
            </S.ListProduct>
            {currentIndex < 4 && <S.ArrowButton onClick={handleClickNext}>{">"}</S.ArrowButton>}
        </S.Wrapper>
    );
};