import styled from "styled-components";

export const Container = styled.header`
       
    background: var(--black);
    color: var(--white);
    text-align: left;   
       
`;

export const Content = styled.div`
    div {

        
        display: flex;
        
        justify-content: left;
        max-width: 1128px;       
        padding: 0 1rem 1rem;
    }

    

    

    #aBarra {
        
        margin-left: 30px;
    }

    #mkt {
        margin-left: 30px;
    }
    
    
    
     
     

    #divButton {

            
            margin-left: auto;
            align-items: center;
            justify-content: right;
            
            font-size: 2rem;
            color: var(--black);
            background: var(--black);
                           
            
            border: 5;
            padding: 0 1rem
            border-radius: 0.25rem;
            height: 3rem;
    
            transition: filter 0.2s
    
            &hover {
                filter: brightness(0.9)
            
    }
    #btlua {
        font-color: var(--white);
    }
    #btmenu {
        margin-left: 10px;
    }
    #btperfil {
        margin-left: 10px;
        
    }
`



 	