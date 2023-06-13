import { LinkHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tw-merge';

export function Link(props: LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={twMerge(
        'text-orange-500 underline hover:text-red-600 cursor-pointer ' + props.className
      )}
    >
      {props.children}
    </a>
  );
}
