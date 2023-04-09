import { AppDispatch } from "@/Redux/store";
import * as S from "./styled"
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "@/Redux/selectProductSlice";

interface AddButtonProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddButton({setShowModal}:AddButtonProps) {

  const initialSelectProduct = {
    name: '',
    description: '',
    subDescription: '',
    image: '',
    price: '',
    shipping: false,
};

const dispatch: AppDispatch = useDispatch();

    const handleSelected = () => {
        dispatch(setSelectedProduct(initialSelectProduct))
        setShowModal(true)
    }
    
    return (
        <S.Wrapper>
          <S.Title>Lista de Produtos</S.Title>
          <S.AddButton onClick={handleSelected}> + produtos</S.AddButton>
        </S.Wrapper>
    )
}
