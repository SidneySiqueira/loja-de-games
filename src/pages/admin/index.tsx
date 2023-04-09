import Header from "@/components/Header"
import * as S from "./styled"
import useMediaQuery from "@mui/material/useMediaQuery";
import AddOrEdit from "@/components/AddOrEdit";
import MenuAdmin from "@/components/MenuAdmin";
import FormModal from "@/components/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "@/Redux/apiSlice";
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from "@/Redux/store";
import { useRouter } from "next/router";
import { Product } from "@/Utils/types";

export default function Admin() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const isMobile = useMediaQuery("(max-width:768px)");

    const isLoginAdmin: boolean = useSelector((state: RootState) => state.isLogin.isLoginAdmin);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const { products } = useSelector(
        (state: RootState) => state.api
    );

    useEffect(() => {
        if (!isLoginAdmin) {
            router.push('/');
        }
    }, [])

    useEffect(() => {
        setLoading(true);
        dispatch(fetchApi()).then(() => {
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [])

    return (
        <S.Wrapper container spacing={2}>
            <S.Component item xs={12}>
                <Header title={"Gerenciamento de produtos"} />
            </S.Component>
            {!isMobile &&
                <S.ComponentMenu item xs={3}>
                    <MenuAdmin />
                </S.ComponentMenu>}
            <S.ComponentMain item xs={isMobile ? 12 : 9}>
                {loading ?
                    (<S.Title>Carregando...</S.Title>) :
                    (<AddOrEdit newProduct={products as unknown as Product} setShowModal={setShowModal} />)}
            </S.ComponentMain>
            {showModal && <FormModal setShowModal={setShowModal} setLoading={setLoading}/>}
        </S.Wrapper>
    )
}
