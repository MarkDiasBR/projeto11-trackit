import styled from "styled-components"

export default function MensagemInicial({ visivel, carregando }) {
    return (
        <Paragrafo>
            {visivel && !carregando
            ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
            : ""}
        </Paragrafo>
    )
}

const Paragrafo = styled.p`
    margin-top: 22px;
    font-size: 18px !important;
    line-height: 22px !important;
    color: #666666 !important;
`