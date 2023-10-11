import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
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

        <figure>
          <Image src="/home.jpg" alt="imagem de uma loja para representar a home da loja" width={320} height={320}/>
        </figure>
      </div>
    </>
  )
}
