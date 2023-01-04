import { lazy, Suspense, useRef } from "react"
import Footer from "./components/Footer"
import Loading from "./components/Loading"

const Header = lazy(() => import("./components/Header"))
const BookSection = lazy(() => import("./components/BookSection"))
const Authors = lazy(() => import("./components/Authors"))
const Games = lazy(() => import("./components/Games"))
const NFT = lazy(() => import("./components/NFT"))
 

function App() {
  const authorsRef = useRef(null)
  const booksRef = useRef(null)
  const gamesRef = useRef(null)
  const NftRef = useRef(null)
  return (
    <div className="bg-project_black min-h-screen">
    <Suspense fallback={<Loading/>}>
        <Header booksRef={booksRef} authorsRef={authorsRef} gamesRef={gamesRef} NftRef={NftRef} />
        <BookSection booksRef={booksRef} />
        <Authors authorsRef={authorsRef} />
        <h1 className="text-project_white lg:text-8xl text-4xl text-center font-bold my-16">Project: A.A.A. Series</h1>
        <Games gamesRef={gamesRef} />
        <NFT NftRef={NftRef} />
        <Footer/>
      </Suspense>
  </div>
  )
}

export default App
