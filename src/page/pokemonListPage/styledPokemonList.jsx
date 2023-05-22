import styled from "styled-components";

export const Container = styled.div`
    background-color: #5E5E5E;
    min-height: 100vh;
    padding: 3.75rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.45rem;
    
`
export const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 3rem;
`
export const Title = styled.h1`
    color: #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 4.5rem;
    
`

export const ImgArrowBack = styled.img`
    position: fixed;
    bottom: 6rem;
    left: 10px;
    width: 45px;
    Mix-blend-mode: multiply;
    cursor: pointer;
    transition: all .5s;

`
export const ImgArrowNext = styled.img`
    position: fixed;
    bottom: 6rem;
    right: 10px;
    width: 45px;
    Mix-blend-mode: multiply;
    cursor: pointer;
    transition: all .5s;
`