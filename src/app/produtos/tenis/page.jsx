import Link from "next/link";
import Image from "next/image";

export default function Tenis() {
    return(
        <div>
            <h1>Tênis</h1>
            <p><strong>Descrição:</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo veniam eum soluta, quia est aspernatur debitis sequi repudiandae pariatur voluptas, odit voluptates, doloribus excepturi nihil dicta itaque cum commodi saepe!</p>
            <Image src="/tenis.png" alt="imagem de um all star para representar a pagina de tenis" width={320} height={320}/>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    )
}