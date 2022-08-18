import { ContainerFooter } from "./styles"
import logoFooter from "../../assets/logoFooter.svg"

export function Footer() {
    return (
       
            <ContainerFooter>
            <footer id="main-footer">
                <div id="footer-left">
                    <ul id="logo-footer">
                       <img
                src={logoFooter}
                alt="imagem do logo footer"
                style={{ background: "#f8f2f5" }}
                        /> 
                    </ul>
                    <ul id="text-footer-left">
                        Next Tecnologia e Serviços Digitais @2021
                    </ul>
                </div>
                <div id="footer-right">
                    <ul>
                        Sobre
                    </ul>
                    <ul>
                        Documentação UI-KIT
                    </ul>
                    <ul>
                        Confluence
                    </ul>
                    <ul>
                        Diretiva de Privacidade
                    </ul>
                </div>
            </footer>
            </ContainerFooter>
        
    )
}