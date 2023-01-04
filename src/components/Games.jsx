import React from 'react'
import CastleDefendAnd2D from './CastleDefendAnd2D'
import CCG from './CCG'
import FightingGame from './FightingGame'

function Games({gamesRef}) {
  return (
    <section className='bg-project_black_shade py-10 scroll-mt-60' ref={gamesRef}>
      <CCG />
      <CastleDefendAnd2D />
      <FightingGame/>
    </section>
  )
}

export default Games