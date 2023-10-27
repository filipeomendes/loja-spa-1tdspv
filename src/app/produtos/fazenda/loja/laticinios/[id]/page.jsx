import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

export default async function Item({params}) {
        let queijos;
        try{
            const respose = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
            queijos = await response.json();
        }catch(error){
            console.log(error)
            redirect("/error")
        }

  return (
    <div>

        <h1>O queijo</h1>

        <section>

        
            {
                <div key={queijo.id}>
                    <h1>PRODUTO: {queijo.nome}</h1>
                    <h2></h2>
                    <figure>
                        <Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} />
                        <figcaption>{queijo.descricao} - R$ <span>{queijo.preco}</span></figcaption>
                    </figure>
                </div>
            }
        </section>
        <tfoot>
            <tr>
                <td colSpan="6">Total de Laticínios: {queijos.length}</td>
            </tr>
        </tfoot>
        
    </div>
  )
}