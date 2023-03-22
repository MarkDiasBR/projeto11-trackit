import { CardContainer, DaysDiv, ButtonsDiv } from "./styled"

export default function NovoHabitoCard() {
    return (
        <CardContainer>
            <input name="days" type="text" placeholder="Ler 1 capítulo de livro"/>
            <DaysDiv>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </DaysDiv>
            <ButtonsDiv>
                <button>Cancelar</button>
                <button type="submit">Salvar</button>
            </ButtonsDiv>
        </CardContainer>
    )
}