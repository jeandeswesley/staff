import { Container} from './styles'
import lua from "../../assets/lua.svg";
import bloco from "../../assets/bloco.svg";
import perfil from "../../assets/perfil.svg";

export function Header() {
    return (
        <>
        <Container>
           <header id='main-header'>
           
           <div id='menu-left'>
                <a id='aNext'>next</a>
                <a id='aBarra'>|</a>
                <a id='mkt'>MARKETPLACE</a>
           </div>

           <div id='menu-right'>                    
           <ul id='bt-lua'>
              <img
                src={lua}
                alt="imagem da lua"
                style={{ background: "#2bd360" }}
                onClick={() => {}}
              />              
            </ul>
            <ul id='bt-bloco'>
              <img
                src={bloco}
                alt="imagem do bloco de menus"
                style={{ background: "#2bd360" }}
              />              
            </ul>
            <ul id='bt-perfil'>
              <img
                src={perfil}
                alt="imagem do perfil"
                style={{ background: "#2bd360" }}
              />              
            </ul>
                    
           </div>

           </header> 
           
        </Container>
        </>
    )
}