import React from 'react';
import {noop} from "../../utils/react/noop";

export interface IItem {
  text: JSX.Element;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

export interface IGenericListProps {
  list: IItem[];
}

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'div', text, onClick = noop, className, href, id}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
