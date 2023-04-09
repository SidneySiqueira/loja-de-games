import * as S from "./styled"
import AddButton from '../AddButton';
import ProductListMenager from '../ProductListMenager';
import { Product } from "@/Utils/types";
import MenuAdmin from "../MenuAdmin";
import { Grid, useMediaQuery } from "@mui/material";

interface AddOrEditProps {
    newProduct: Product,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddOrEdit({ newProduct, setShowModal }: AddOrEditProps) {
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <S.Wrapper container spacing={2}>
            {isMobile && <Grid item xs={12}>
                <MenuAdmin />
            </Grid>}
            <S.BoxAddButton >
                <AddButton setShowModal={setShowModal} />
            </S.BoxAddButton>
            <ProductListMenager products={newProduct} setShowModal={setShowModal} />
        </S.Wrapper>
    )
}
