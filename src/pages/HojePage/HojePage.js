import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { HojePageContainer, MainContainer, ContainerCards } from "./styled"
import ContentPlaceholder from "./ContentPlaceholder"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App"
import axios from "axios"
import BASE_URL from "../../constants/url"

export default function HojePage() {
    const { user } = useContext(UserContext);
    const config = { "headers": {"Authorization": `Bearer ${user.token}`} }
    const [carregando, seCarregando] = useState(true);

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(response=>{
                console.log("A")
                console.log(response.data)
                // setHabitos(response.data)
                // setCarregando(false)
            })
            .catch(err=>console.log(err.res.data))
    }, [])

    return (
        <HojePageContainer>
            <NavBar />
            <MainContainer>
                <p>Segunda, 15/02</p>
                <p>Nenhum hábito concluído ainda</p> 

                <ContainerCards>
                    <ContentPlaceholder carregando={carregando} />
                    {/* {habitos.map(habito => (
                        <HabitoCard
                            key={habito.id}
                            id={habito.id}
                            name={habito.name}
                            days={habito.days}
                        />
                    ))} */}
                    {/* <MensagemInicial carregando={carregando} visivel={habitos.length === 0}/> */}            
                </ContainerCards>



            </MainContainer>
            <Footer />
        </HojePageContainer>
    )
}