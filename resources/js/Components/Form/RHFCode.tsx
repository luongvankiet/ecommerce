import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MuiOtpInput } from 'mui-one-time-password-input';
// @mui
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

interface RHFCodeProps {
  name: string;
}

export default function RHFCode({ name, ...other }: RHFCodeProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <MuiOtpInput
            {...field}
            autoFocus
            gap={1.5}
            length={6}
            TextFieldsProps={{
              error: !!error,
              placeholder: '-',
            }}
            {...other}
          />

          {error && (
            <FormHelperText sx={{ px: 2 }} error>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
