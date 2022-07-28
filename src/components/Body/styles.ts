import styled from "styled-components";

export const ContainerBody = styled.div`
   margin: 4rem;
   
   div {
    
    background: #D3D3D3;
    color: var(--text-title);
    padding: 1rem
    text-align: left;    
    line-height: 1.5rem    
   }

   a {
    margin: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-title);
   }
   
   table {
    width: 100%;
    border-spacing: 0 0.1rem; 
    
   } 
   
   thead {
    background: #FFF;
   }
   
   th {
    color: var(--text-title);
    font-weight: 400;
    padding: 1rem
    text-align: left;
    line-height: 1.5rem
   }

   td {
    padding: 1rem 2rem;
    border: 10;
    color: var(--text-title);
    background: #FFF;      
    
   }
`;