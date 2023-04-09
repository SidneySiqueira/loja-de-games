import Header from "@/components/Header"
import * as S from "./styled"
import Store from "@/components/Store"
import useMediaQuery from "@mui/material/useMediaQuery";
import Filter from "@/components/Filter";
import { CategoriesMock } from "@/Mock/products";
import CategoryFilter from "@/components/CategoryFilter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { useRouter } from "next/router";
import { Product } from "@/Utils/types";

export default function HomePage() {
    const [productsFilter, setProductsFilter] = useState<React.SetStateAction<Product>>()
    const [productsByCategory, setProductsByCategory] = useState(false)
    const [loggedAdmin, setLoggedAdmin] = useState<React.SetStateAction<boolean>>()
    const router = useRouter();

    const isLoginAdmin: boolean = useSelector((state: RootState) => state.isLogin.isLoginAdmin);

    const handleRedirect = () => {
        router.push('/admin');
    }

    useEffect(() => {
        setLoggedAdmin(isLoginAdmin)
    }, [isLoginAdmin])

    const isLg = useMediaQuery("(max-width:980px)");

    const categories = CategoriesMock
    return (
        <S.Wrapper container spacing={2}>
            <S.Component item xs={12}>
                <Header title={"Games Store"} />
            </S.Component>
            <S.Component item xs={isLg ? 12 : 3}>
                <S.Title onClick={() => setProductsByCategory(false)}>Home</S.Title>
                {loggedAdmin && <S.Title onClick={handleRedirect}>Gerenciamento de Produtos</S.Title>}
                <Filter
                    categories={categories}
                    setProductsByCategory={setProductsByCategory}
                    setProductsFilter={setProductsFilter} />
            </S.Component>
            <S.Component item xs={isLg ? 12 : 9}>
                {!productsByCategory ? <Store /> : <CategoryFilter productsFilter={productsFilter as unknown as Product[]} />}
            </S.Component>
        </S.Wrapper>
    )
}
