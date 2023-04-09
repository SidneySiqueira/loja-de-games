import React, { useState } from 'react';
import * as S from "./styled"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AddApi, updateApi } from '@/Redux/apiSlice';
import { CategoriesMock } from '@/Mock/products';
import { Product } from '@/Utils/types';

interface FormData {
    name: string;
    description: string;
    subDescription: string;
    image: string;
    price: string;
    shipping: boolean;
    category: string;
}

interface FormModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const initialFormData: FormData = {
    name: '',
    description: '',
    subDescription: '',
    image: '',
    price: '',
    shipping: false,
    category: '',
};

const FormModal = ({ setShowModal, setLoading }: FormModalProps) => {
    const selectProduct = useSelector((state: RootState) => state.selectProduct.selectProduct);
    const { products } = useSelector((state: RootState) => state.api);
    const [formData, setFormData] = useState<FormData>(selectProduct as FormData);
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
    
    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handlePost = async (array: Product) => {
        await dispatch(AddApi(array));
    };

    const handlePatch = async (id: string, patchData: Product) => {
        await dispatch(updateApi({ item: id, patchData: patchData }));
    };

    const handleAdd = async () => {
        setLoading(true)
        if (!formData) {
            return;
        }
        const productsArray = products ? Object.entries(products) : [];
        const existingProduct = productsArray.find(([_, product]) => (product as Product).image === formData.image);
        if (existingProduct) {
            await handlePatch(existingProduct[0], formData);
        } else {
            await handlePost(formData);
        }
        setShowModal(false);
        setTimeout(() => {
            document.location.reload();
        }, 500);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData(initialFormData);
        setFormErrors({});
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors: Partial<FormData> = {};
        if (!formData.name) {
            errors.name = 'Nome é obrigatório';
        }
        if (!formData.description) {
            errors.description = 'Descrição é obrigatória';
        }
        if (!formData.subDescription) {
            errors.subDescription = 'Subdescrição é obrigatória';
        }
        if (!formData.image) {
            errors.image = 'URL de imagem é obrigatória';
        }
        if (!formData.price) {
            errors.price = 'Preço deve ser maior que zero';
        }
        if (!formData.category) {
            errors.category = 'Categoria é obrigatória';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log('Formulário válido:', formData);
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Close className="close" onClick={handleCloseModal}>
                    X
                </S.Close>
                <S.Title>{formData.name  === '' ? 'Adicionar Produto' : 'Editar Produto'}</S.Title>
                <S.Form onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.Atribute>Nome</S.Atribute>
                        <S.Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        {formErrors.name && <span className="error">{formErrors.name}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Descrição</S.Atribute>
                        <S.Input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                        {formErrors.description && <span className="error">{formErrors.description}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Subdescrição</S.Atribute>
                        <S.BoxText name="subDescription" value={formData.subDescription} onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)} />
                        {formErrors.subDescription && <span className="error">{formErrors.subDescription}</span>}
                    </S.FormGroup>
                    {(selectProduct as FormData).image.length === 0 && <S.FormGroup>
                        <S.Atribute>URL da Imagem</S.Atribute>
                        <S.Input type="text" name="image" value={formData.image} onChange={handleInputChange} />
                        {formErrors.image && <span className="error">{formErrors.image}</span>}
                    </S.FormGroup>}
                    <S.FormGroup>
                        <S.Atribute>Preço</S.Atribute>
                        <S.Input type="text" name="price" value={formData.price} onChange={handleInputChange} />
                        {formErrors.price && <span className="error">{formErrors.price}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Categoria</S.Atribute>
                        <S.Dropdown name="category" value={formData.category} onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}>
                            <option value="">Selecione uma categoria</option>
                            {CategoriesMock.map((category) => (
                                <option key={category.item} value={category.item}>
                                    {category.item}
                                </option>
                            ))}
                        </S.Dropdown>
                        {formErrors.category && <span className="error">{formErrors.category}</span>}
                    </S.FormGroup>
                    <S.FormGroupCheck>
                        <S.AtributeCheck>Frete Grátis</S.AtributeCheck>
                        <S.InputCheck type="checkbox" name="shipping" checked={formData.shipping} onChange={handleCheckboxChange} />
                    </S.FormGroupCheck>
                    <S.FormGroup>
                        <S.Add
                            type="submit"
                            onClick={() => {
                                if (formData.name && formData.description && formData.subDescription && formData.image && formData.price) {
                                    handleAdd();
                                }
                            }}>Adicionar</S.Add>
                        <S.Cancel type="button" onClick={handleCloseModal}>Cancelar</S.Cancel>
                    </S.FormGroup>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    );
};

export default FormModal;