import styled from "styled-components"

export default function MensagemInicial() {
    return (
        <Paragrafo>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Paragrafo>
    )
}

const Paragrafo = styled.p`
    margin-top: 48px !important;
    font-size: 18px !important;
    line-height: 22px !important;
    color: #666666 !important;
`