import { HTMLAttributes } from 'react';
import { twMerge } from 'tw-merge';

export function List(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      {...props}
      className={twMerge(
        'list-disc list-inside xl:text-base text-lg scrollbar scrollbar-thumb-orange-500 scrollbar-track-gray-100 ' +
          props.className
      )}
    >
      {props.children}
    </ul>
  );
}
