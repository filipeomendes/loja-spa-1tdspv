import Link from "next/link";
import Image from "next/image";

export default function Camiseta() {
    return(
        <div>
            <h1>Camiseta</h1>
            <p><strong>Descrição:</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo veniam eum soluta, quia est aspernatur debitis sequi repudiandae pariatur voluptas, odit voluptates, doloribus excepturi nihil dicta itaque cum commodi saepe!</p>
            <Image src="/camiseta.jpg" alt="imagem de uma camiseta para representar a pagina de camiseta" width={320} height={320}/>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    )
}