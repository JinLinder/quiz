import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import {ListWrapper} from "./style/StyleCardList";
import axios from "axios";

export default function FlashCardList({ flashcards }) {
  return (
    <ListWrapper>
      {flashcards.map((card) => {
        return <FlashCard flashcard={card} key={card.id} />;
      })}
    </ListWrapper>
  );
}
