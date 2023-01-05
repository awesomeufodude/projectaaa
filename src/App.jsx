import { lazy, Suspense, useRef, useState } from "react"
import Footer from "./components/Footer"
import Loading from "./components/Loading"

const Header = lazy(() => import("./components/Header"))
const BookSection = lazy(() => import("./components/BookSection"))
const Authors = lazy(() => import("./components/Authors"))
const Games = lazy(() => import("./components/Games"))
const NFT = lazy(() => import("./components/NFT"))
const ImageModal = lazy(() => import("./components/ImageModal"))
const CopyRight = lazy(() => import("./components/CopyRight"))
 

function App() {
  const [nftId, setNftId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const authorsRef = useRef(null)
  const booksRef = useRef(null)
  const gamesRef = useRef(null)
  const NftRef = useRef(null)
  return (
    <div className="bg-project_black min-h-screen">
      <Suspense fallback={<Loading />}>
        {isModalOpen && <ImageModal id={nftId} setIsModalOpen={setIsModalOpen} />}
        <Header booksRef={booksRef} authorsRef={authorsRef} gamesRef={gamesRef} NftRef={NftRef} />
        <BookSection booksRef={booksRef} />
        <Authors authorsRef={authorsRef} />
        
        <Games gamesRef={gamesRef} />
        <NFT NftRef={NftRef} setIsModalOpen={setIsModalOpen} setNftId={setNftId} />
        <div className="flex items-center justify-center mb-5">
          <CopyRight/>
        </div>
        <Footer/>
      </Suspense>
  </div>
  )
}

export default App
