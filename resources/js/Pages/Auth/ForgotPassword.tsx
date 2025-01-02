import FormProvider from '@/Components/Form/FormProvider';
import RHFTextField from '@/Components/Form/RHFTextField';
import { PasswordIcon } from '@/Components/Icons';
import RouterLink from '@/Components/RouterLink';
import useRoute from '@/Hooks/useRoute';
import AuthLayout from '@/Layouts/Auth/AuthLayout';
import { routes } from '@/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Head, router } from '@inertiajs/react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface Props {
  status: string;
}

export default function ForgotPassword({ status }: Props) {
  const route = useRoute();

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
  });

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async data => {
    try {
      await router.post(route(routes.auth.forgotPassword), data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <AuthLayout>
      <Head title="Forgot Password" />

      <Box sx={{ my: 'auto' }}>
        <Stack spacing={3} alignItems="center" sx={{ mb: 3 }}>
          <PasswordIcon sx={{ height: 96 }} />

          <Typography variant="h3">Forgot your password?</Typography>

          <Typography variant="body1">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </Typography>

          {status && <Alert severity="success">{status}</Alert>}
        </Stack>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3}>
            <RHFTextField name="email" label="Email address" />

            <Stack direction="row" spacing={2}>
              <LoadingButton
                color="inherit"
                size="large"
                fullWidth
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ textWrap: 'nowrap', px: 10 }}
              >
                Email Password Reset Link
              </LoadingButton>

              <Button
                component={RouterLink}
                color="inherit"
                size="large"
                fullWidth
                variant="soft"
                href={route('login')}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
}
