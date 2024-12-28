import FormProvider from '@/Components/Form/FormProvider';
import RHFTextField from '@/Components/Form/RHFTextField';
import { Iconify, PasswordIcon } from '@/Components/Icons';
import { useBoolean } from '@/Hooks/useBoolean';
import useRoute from '@/Hooks/useRoute';
import useTypedPageErrors from '@/Hooks/useTypedPageErrors';
import AuthLayout from '@/Layouts/Auth/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Head, router } from '@inertiajs/react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export default function ConfirmPassword() {
  const errors = useTypedPageErrors();

  const route = useRoute();

  const password = useBoolean();

  const ConfirmPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
  });

  const methods = useForm({
    resolver: yupResolver(ConfirmPasswordSchema),
    defaultValues: { password: '' },
  });

  const onSubmit = methods.handleSubmit(data => {
    router.post(route('password.confirm'), data);
  });

  return (
    <AuthLayout>
      <Head title="Secure Area" />

      <Box sx={{ my: 'auto' }}>
        <Stack spacing={3} alignItems="center" sx={{ mb: 3 }}>
          <PasswordIcon sx={{ height: 96 }} />

          <Typography variant="h3">Confirm password</Typography>

          <Typography variant="body1">
            This is a secure area of the application. Please confirm your
            password before continuing.
          </Typography>
        </Stack>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3}>
            {!!errors.length &&
              errors.map((msg: string, key: number) => (
                <Alert severity="error" key={key}>
                  {msg}
                </Alert>
              ))}

            <RHFTextField
              name="password"
              label="Password"
              type={password.value ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={password.onToggle} edge="end">
                      <Iconify
                        icon={
                          password.value
                            ? 'solar:eye-bold'
                            : 'solar:eye-closed-bold'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              fullWidth
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
            >
              Confirm
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
}
