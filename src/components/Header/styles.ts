import styled from "styled-components";

export const Container = styled.header`
       
    background: var(--black);
    color: var(--white);
          
    
    #main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;  
        font-family: 'Poppins', sans-serif;      
    }

    #menu-left {
        margin-left: 10px;                      
        
        #aBarra{
            margin-left: 20px;  
        }
        #mkt {
            margin-left: 20px;
        }
    }

    #menu-right {
        display: flex;
        margin-right: 10px;
        align-items: center;

        #bt-lua {
            margin-right: 20px;
        }
        #bt-bloco {
            margin-right: 20px;
        }

    }
    `





 	