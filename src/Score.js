import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Score() {
  const score = useSelector(state=>state)
  return (
    <div>My score : {score}</div>
  )
}
