import React, { PropsWithChildren } from 'react';
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormProviderProps {
  methods: object;
  onSubmit(): void;
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: PropsWithChildren<FormProviderProps>) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
