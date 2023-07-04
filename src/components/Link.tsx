import { LinkHTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tw-merge';

export function ExternalLink(props: LinkHTMLAttributes<HTMLAnchorElement>) {
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

export function InternalLink(props: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return (
    <Link
      {...props}
      className={twMerge(
        'text-orange-500 underline hover:text-red-600 cursor-pointer ' + props.className
      )}
    >
      {props.children}
    </Link>
  );
}
