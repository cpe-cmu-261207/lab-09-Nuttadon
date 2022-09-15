import React, { useContext, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todo(props) {
  const { selTheme } = useContext(ThemeContext);
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <li
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
    >
      <span
        className="me-auto"
        style={
          props.completed
            ? { color: selTheme.foreground, textDecoration: "line-through" }
            : { color: selTheme.foreground, textDecoration: "none" }
        }
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button
            className="btn btn-success"
            onClick={() => {
              props.onMark();
            }}
          >
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.onUp();
            }}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.onDown();
            }}
          >
            <IconArrowDown />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.onDelete();
            }}
          >
            {" "}
            <IconTrash />{" "}
          </button>
        </>
      )}
    </li>
  );
}
