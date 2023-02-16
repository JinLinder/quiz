import React, { useState, useEffect } from "react";

export default function CardFlash({cards} ) {
  const [flashCards, setFlashCards] = useState(true);

  const [num, setNum] = useState(0);

  useEffect(() => {
    
    // if (flashcards) {
    //   setFlashCards(flashcards);
    //  // console.log(flashcards)
    // }
    if (cards === []) {
      console.log(cards)
      console.log("loading");
    } else {
      console.log(cards)
      console.log("CARDS");
    }
  }, []);

  return (
    <>
      Hej
      {cards.map((card, index) =>  {

          return <h1>{card.question}</h1>;
            
      })}
      {/* {flashCards ? <div>{flashcards[1]}</div> : <div> no cards</div>} */}
    </>
  );
}
