import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37rem;
    width: 40rem;
    position: relative;
    background: linear-gradient(90deg, rgba(218,218,218,1) 0%, rgba(255,255,255,1) 50%, rgba(218,218,218,1) 100%);
    border: 1px solid grey;
    margin-top: 3rem;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`
export const DivInputMinMax = styled.div`
    display: flex;
    flex-direction: row;
`
export const InputN = styled.input`
    width: 20rem;
`

export const InputMin = styled.input`
    width: 5rem;
    margin-right: 4rem;
`

export const InputMax = styled.input`
    width: 5rem;
`
export const SpanError = styled.span`
    color: red;
    font-size: .7rem;
`