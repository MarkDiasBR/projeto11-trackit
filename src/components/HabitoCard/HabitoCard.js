import { CardContainer, DaysDiv, ButtonsDiv, TitleContainer } from "./styled"

export default function HabitoCard() {
    return (
        <CardContainer>
            <p>Ler 1 capítulo de Livro</p>
            <button><img src="./assets/img/Lixeira.svg" alt="Excluir" /></button>
            <DaysDiv>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </DaysDiv>
        </CardContainer>
    )
}