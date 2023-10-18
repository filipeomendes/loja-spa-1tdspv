import Link from "next/link";

export default function Cabecalho (){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/produtos/tenis">Tênis</Link>
                    </li>
                    <li>
                        <Link href="/produtos/camiseta">Camiseta</Link>
                    </li>
                    <li>
                        <Link href="/produtos/calca">Calça</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}