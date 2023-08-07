import React from "react";
//import CastleDefendAnd2D from './CastleDefendAnd2D'
import CCG from "./CCG";
import FightingGame from "./FightingGame";

function Games({ gamesRef }) {
  return (
    <section
      className="bg-project_black_shade py-10 scroll-mt-60"
      ref={gamesRef}
    >
      <h1 className="text-project_white lg:text-8xl text-4xl text-center font-bold ">
        Project: A.A.A. Series
      </h1>
      <CCG />
      {/*<CastleDefendAnd2D />*/}
      <FightingGame />
    </section>
  );
}

export default Games;
