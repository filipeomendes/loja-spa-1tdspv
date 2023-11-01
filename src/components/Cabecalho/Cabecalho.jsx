import Link from "next/link";

export default function Cabecalho (){
    return (
        <header className="bg-slate-800 text-white">
            <h1 className="text-center text-3xl font-extrabold">Produtos</h1>
            <hr className="bg-red-600 border border-red-700"/>
            <nav className="menu">
                <ul>
                    <li>
                        <Link href="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link href="/produtos/tenis">Tênis</Link>
                    </li>
                    <li>
                        <Link href="/produtos/camiseta">Camiseta</Link>
                    </li>
                    <li>
                        <Link href="/produtos/calca">Calça</Link>
                    </li>
                    <li>
                        <Link href="/produtos/fazenda/loja/laticinios">Laticinios</Link>
                    </li>
                    <li>
                        <Link href="/user-pages">GIT-USERS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}