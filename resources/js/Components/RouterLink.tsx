import React, { forwardRef } from 'react';
import { Link } from '@inertiajs/react';

// eslint-disable-next-line react/display-name
const RouterLink: React.FC = forwardRef(
  ({ href, ...other }: { href: string }, ref) => {
    return <Link ref={ref} href={href} {...other} />;
  },
);

export default RouterLink;
