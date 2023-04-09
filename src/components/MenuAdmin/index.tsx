import { useRouter } from "next/router";
import * as S from "./styled"
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { setIsLoginAdmin } from "@/Redux/isLoginSlice";

export default function MenuAdmin() {
    const router = useRouter();
    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleRedirect = () => {
        router.push('/');
    }

    const handleLogout = () => {
        dispatch(setIsLoginAdmin(false));
        router.push('/');
    };

    return (
        <S.Wrapper>
            <S.Title>Produtos</S.Title>
                <S.Topics onClick={handleRedirect}>Perfil da companhia</S.Topics>
                <S.Topics onClick={handleLogout}>Logout</S.Topics>
        </S.Wrapper>
    )
}