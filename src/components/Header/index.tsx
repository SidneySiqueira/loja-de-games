import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import Login from "../Login"
import * as S from "./styled"
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginAdmin, setIsLoginCustomer } from "@/Redux/isLoginSlice";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface HeaderProps {
    title: string,
}

export default function Header({ title }: HeaderProps) {
    const [loggedAdmin, setLoggedAdmin] = useState<SetStateAction<boolean>>()
    const [logCustomer, setLogCustomer] = useState<SetStateAction<boolean>>(false)
    const router = useRouter();

    const isLoginAdmin: boolean = useSelector((state: RootState) => state.isLogin.isLoginAdmin);
    const isLoginCustomer: boolean = useSelector((state: RootState) => state.isLogin.isLoginCustomer);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const emailAdmin = 'admin@admin.com'
    const passwordAdmin = 'admin1234'
    const emailCustomer = 'customer@customer.com'
    const passwordCustomer = 'customer1234'

    const handleLogin = (email: string, password: string) => {
        if (email === emailAdmin && password === passwordAdmin) {
            dispatch(setIsLoginAdmin(true));
        } else if (email === emailCustomer && password === passwordCustomer) {
            dispatch(setIsLoginCustomer(true));
        }
    };

    const handleLogout = () => {
        dispatch(setIsLoginAdmin(false));
        dispatch(setIsLoginCustomer(false));
        router.push('/');
    };

    useEffect(() => {
        setLoggedAdmin(isLoginAdmin)
        setLogCustomer(isLoginCustomer)
    }, [isLoginAdmin, isLoginCustomer])

    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            {!loggedAdmin && !isLoginCustomer? <Login onLogin={handleLogin} /> :
                <S.BoxWelcome>
                    <S.TextLogin>{logCustomer ? 'Olá Fulano' : 'Olá admin'}</S.TextLogin>
                    <S.ButtonLogin onClick={handleLogout}>Logout</S.ButtonLogin>
                </S.BoxWelcome>}
        </S.Wrapper>
    )
}
