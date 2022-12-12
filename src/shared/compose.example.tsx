import {Simulate} from "react-dom/test-utils";
import {preventDefault} from "../utils/react/preventDefault";
import {stopPropagation} from "../utils/react/stopPropagation";
import input = Simulate.input;
import {getValue} from "../utils/react/pickFromSyntheticEvent";
import {pipe} from "../utils/react/pipe";
import {pick} from "../utils/react/pick";
import {isEqual} from "../utils/react/isEqual";
import React from "react";

export function InputExample({value, onChange}: any) {
  return (
    <div>
    <input
      value={value}
      onChange={preventDefault(stopPropagation(getValue(onChange)))}
    />
    </div>
  );
}

const comments = [{id:22,text:"dd"}]

const createFilterBy = (prop: string) =>(id: any) => pipe(pick(prop), isEqual(id),cond)
const filterById = createFilterBy('id');
const filterByValue = createFilterBy("value");

const filteredComments = comments.filter(filterById(22));

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt
);