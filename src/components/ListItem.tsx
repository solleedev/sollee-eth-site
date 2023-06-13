import { ReactNode } from 'react';
import { LiHTMLAttributes } from 'react';
import { twMerge } from 'tw-merge';

export function ListItem(props: LiHTMLAttributes<HTMLElement>) {
  return (
    <li className={twMerge('list-item ' + props.className)} {...props}>
      {props.children}
    </li>
  );
}
