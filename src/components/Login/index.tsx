import React, { useState } from "react";
import * as S from "./styled"

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <S.FormLogin onSubmit={handleSubmit}>
            <S.BoxInput>
                <S.LabelLogin htmlFor="email">Email:</S.LabelLogin>
                <S.InputLogin
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </S.BoxInput>
            <S.BoxInput>
                <S.LabelLogin htmlFor="password">Password:</S.LabelLogin>
                <S.InputLogin
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </S.BoxInput>
            <S.ButtonLogin type="submit">Login</S.ButtonLogin>
        </S.FormLogin>
    );
};