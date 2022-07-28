import { ContainerBody } from "./styles"

export function Body() {
    return (
        <ContainerBody>
            <div>
                <a>Cashback</a>
                
            <table>
                <thead>
                    <th>ID <button>^</button></th>
                    <th>NOME<button>^</button></th>
                    <th>DOCUMENTO<button>^</button></th>
                    <th>AGÊNCIA<button>^</button></th>                
                    <th>CONTA<button>^</button></th>                
                    <th>NÚMERO DO BANCO<button>^</button></th>                
                    <th>STATUS<button>^</button></th>                
                    <th>OPÇÕES</th>                
                </thead>

                <tbody>
                    <tr>
                        <td>
                        29683
                        </td>
                        <td>
                        JEANDES
                        </td>
                        <td>
                        9999
                        </td>
                        <td>
                        3750-0
                        </td>
                        <td>
                        123
                        </td>
                        <td>
                        888
                        </td>
                        <td>
                        Cashback Pago
                        </td>
                        <td>
                        <button type="button">
                            Repocessar
                        </button>
                        </td>
                        
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                        29683
                        </td>
                        <td>
                        GABRIEL
                        </td>
                        <td>
                        9999
                        </td>
                        <td>
                        3750-0
                        </td>
                        <td>
                        123
                        </td>
                        <td>
                        888
                        </td>
                        <td>
                        Cashback Pago
                        </td>
                        <td>
                        
                        </td>                        
                    </tr>
                </tbody>
            </table>
            </div>
        </ContainerBody>
    )
}