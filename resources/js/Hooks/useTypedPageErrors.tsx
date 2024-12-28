import { usePage } from '@inertiajs/react';
import { InertiaSharedProps } from '@/types';

export default function useTypedPageErrors<T>() {
  const page = usePage<InertiaSharedProps<T>>();

  const errors = Object.values(page.props.errors);

  return errors;
}
