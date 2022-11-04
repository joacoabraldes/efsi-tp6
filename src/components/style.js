import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Circulo = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    margin: 10px;
`

export const Columna = styled.div`
    flex-direction: column;
    text-align: left;
    margin: 10px;

`
export const Categoria = styled.p`
    font-weight: bold;
    margin: 3px;
`

export const CANT = styled.p`
    color: red;
   width: 50%;
   margin: 0;
   padding-right: 5px;
   padding-left: 5px;
`

export const Resources = styled.p`
    color: black;
   width: 75%;
   padding-right: 50px;
   margin: 0;
   padding-left: 2px;
`

export const RowMini = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
`
