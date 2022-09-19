import { useState, useEffect } from "react"
import axios from "axios"
import * as Dialog from "@radix-ui/react-dialog"

import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { CreateAdModal } from "./components/CreateAdModal"

import logoImg from "./assets/logo-nlw-esports.svg"
import "./styles/main.css"

export interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios.get("http://localhost:3333/games")
      .then(res => setGames(res.data))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id} 
              title={game.title} 
              adsCount={game._count.ads} 
              bannerUrl={game.bannerUrl} 
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
