import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Form } from "../style/QuizPage/SelectStyle";
import { selectAction } from "../Actions/SelectAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, ButtonUnable, Input, SelectBox } from "../style/Global/GlobleStyle";

export default function Select() {
  const [categories, setCategories] = useState();
  const [amount, setAmount] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStart = () => {
    console.log("Start");
    navigate("/quiz");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amountEl.current.value);
    console.log(categoryEl.current.value);
    dispatch(
      selectAction({
        category: categoryEl.current.value,
        amount: amountEl.current.value,
      })
    );
    navigate("/quiz");
  };
  const categoryEl = useRef();
  const amountEl = useRef();

  // const category = categoryEl.current.value;
  // const amount =amountEl.current.value

  const getCategories = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api_category.php");
      console.log(response.data.trivia_categories);
      setCategories(response.data.trivia_categories);
    } catch (err) {
      console.log(err);
    }
  };

  const getAmount =  (e) => {
   setAmount(e.target.value)
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log(amount)

  return (
    <Form className="header" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <SelectBox id="category" ref={categoryEl}>
          {categories
            ? categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })
            : null}
        </SelectBox>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number of Questions</label>
        <Input
          type="number"
          id="amount"
          min="1"
          step="1"
          value={amount}
          // defaultValue={10}
          ref={amountEl}
          onChange={getAmount}
        />
      </div>
      <div className="form-group btn">
        {amount ?  <Button className="btn">Start</Button> : <ButtonUnable className="btn" disabled={true}>start</ButtonUnable>}
        {/* <Button className="btn">Start</Button> */}
      </div>
    </Form>
  );
}
