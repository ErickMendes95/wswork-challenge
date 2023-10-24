import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col justify-between p-4">
      <p className='font-bold text-lg'>
      Página principal apenas sendo necessária, 
      já que a ideia é formar uma página separada para os carros, 
      mantive o routing padrão do Nextjs, 
      acesse o endpoint /carlist ou clique em carros na navbar</p>
    </main>
  )
}
