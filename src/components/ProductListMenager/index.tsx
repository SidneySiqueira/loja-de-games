import * as S from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "@/Redux/selectProductSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { deleteApi } from "@/Redux/apiSlice";
import { fetchFeaturedProduct, updateFeaturedProduct } from "@/Redux/featuredProductSlice";
import { fetchPromotionProduct, updatePromotionProduct } from "@/Redux/promotionProductSlice";
import { useEffect } from "react";
import { RootState } from "@/Redux/store";
import { Product } from "@/Utils/types";
import { Divider, useMediaQuery } from "@mui/material";
import isEquivalent from "@/Utils/isEquivalent";

interface ProductListMenagerProps {
    products: Product,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function ProductListMenager({ products, setShowModal }: ProductListMenagerProps) {
    const featuredProducts: Product[] = useSelector((state: RootState) => state.featuredProducts.featuredProducts);
    const promotionProduct: Product[] = useSelector((state: RootState) => state.promotionProduct.promotionProduct);

    const isMobile = useMediaQuery("(max-width:768px)");

    const listProducts = products ? Object.values(products) : [] as Product[];

    useEffect(() => {
        dispatch(fetchFeaturedProduct())
        dispatch(fetchPromotionProduct())
    }, [])

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleSelected = (choice: Product) => {
        dispatch(setSelectedProduct(choice))
        setShowModal(true)
    }

    const handleDelete = async (item: Product) => {
        const productsArray = products ? Object.entries(products) : [];
        const existingProduct = productsArray.find(([_, product]) => product.image === item.image);
        existingProduct && await dispatch(deleteApi(existingProduct[0]));
        if (isEquivalent(item, featuredProducts)) {
            handleFeatured(listProducts[0])
        } 
        if (isEquivalent(item, promotionProduct)) {
            handlePromotion(listProducts[1])
        }
        setTimeout(() => {
            document.location.reload();
        }, 500);
    };


    const handleFeatured = (choice: Product) => {
        dispatch(updateFeaturedProduct(choice))
        setTimeout(() => {
            document.location.reload();
        }, 500);
    }

    const handlePromotion = (choice: Product) => {
        dispatch(updatePromotionProduct(choice))
        setTimeout(() => {
            document.location.reload();
        }, 500);
    }

    return (
        <S.Wrapper container>
            <S.Container item xs={12}>
                {listProducts?.map((product, index) => (
                    <S.ContainerItems key={index}>
                        <S.BoxItem>
                            <S.Item >{product?.name?.slice(0, 20)}</S.Item>
                            <S.BoxEdit>
                                <S.Edit onClick={() => handleFeatured(product)} disabled={(featuredProducts as unknown as Product).image === product.image}>Destaque</S.Edit>
                                <S.Edit onClick={() => handlePromotion(product)} disabled={(promotionProduct as unknown as Product).image === product.image}>Promoção</S.Edit>
                            </S.BoxEdit>
                        </S.BoxItem>
                        {!isMobile && <Divider orientation="vertical" flexItem style={{ border: '1px solid black' }} />}
                        <S.BoxPrice>
                            <S.Item>{`R$${product?.price}`}</S.Item>
                        </S.BoxPrice>
                        {!isMobile && <Divider orientation="vertical" flexItem style={{ border: '1px solid black' }} />}
                        <S.BoxButtons>
                            <S.Edit onClick={() => handleSelected(product)}>Editar</S.Edit>
                            <S.Remove onClick={() => handleDelete(product)}>Excluir</S.Remove>
                        </S.BoxButtons>
                        {isMobile && <Divider orientation="horizontal" flexItem style={{ border: '1px solid black' }} />}
                    </S.ContainerItems>
                ))}
            </S.Container>
        </S.Wrapper>
    )
}
