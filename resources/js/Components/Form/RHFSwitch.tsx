import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

interface RHFSwitchProps {
  helperText: string;
  name: string;
}

export default function RHFSwitch({
  name,
  helperText,
  ...other
}: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
