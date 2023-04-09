import Divider from '@mui/material/Divider';
import Banner from "../Banner"
import Carousel from "../Carousel"
import * as S from "./styled"
import BannerPromotion from '../BannerPromotion';
import BannerInfo from '../BannerInfo';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { useEffect, useState } from 'react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchApi } from '@/Redux/apiSlice';
import { fetchFeaturedProduct } from '@/Redux/featuredProductSlice';
import { fetchPromotionProduct } from '@/Redux/promotionProductSlice';
import { Product } from '@/Utils/types';

export default function Store() {
    const [loading, setLoading] = useState(true);
    const featuredProducts: Product[] = useSelector((state: RootState) => state.featuredProducts.featuredProducts);
    const promotionProduct: Product[] = useSelector((state: RootState) => state.promotionProduct.promotionProduct);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(fetchFeaturedProduct())
        dispatch(fetchPromotionProduct())
        dispatch(fetchApi()).then(() => {
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [])

    const { products } = useSelector(
        (state: RootState) => state.api
    );

    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <S.Wrapper container spacing={2}>
            {loading ? (
                <S.Title>Carregando...</S.Title>
            ) : (
                <>
                    <S.BannerPrimary item xs={12}>
                        <Banner featuredProducts={featuredProducts as unknown as Product} />
                    </S.BannerPrimary>
                    <Divider variant="fullWidth" />
                    <S.Carousel item xs={12}>
                        <Carousel products={products as unknown as Product} />
                    </S.Carousel>
                    <S.BannerSecondary item xs={isMobile ? 12 : 5}>
                        <BannerPromotion promotion={promotionProduct as unknown as Product} />
                    </S.BannerSecondary>
                    <Divider orientation="vertical" flexItem style={{ border: '1px solid black'}}/>
                    <S.BannerSecondary item xs={isMobile ? 12 : 6}>
                        <BannerInfo promotion={featuredProducts as unknown as Product} />
                    </S.BannerSecondary>
                </>
            )}
        </S.Wrapper>
    )
}
