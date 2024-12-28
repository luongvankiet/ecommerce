import FormProvider from '@/Components/Form/FormProvider';
import RHFTextField from '@/Components/Form/RHFTextField';
import { Iconify } from '@/Components/Icons';
import SentIcon from '@/Components/Icons/SentIcon';
import RouterLink from '@/Components/RouterLink';
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
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface Props {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: Props) {
  const errors = useTypedPageErrors();

  const route = useRoute();

  const password = useBoolean();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    password_confirmation: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    token,
    email,
    password: '',
    password_confirmation: '',
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async data => {
    try {
      await router.post(route('password.update'), data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <AuthLayout>
      <Head title="Reset Password" />

      <Box sx={{ my: 'auto', width: 370 }}>
        <Stack spacing={3} alignItems="center" sx={{ mb: 5 }}>
          <SentIcon sx={{ height: 96 }} />

          <Typography variant="h3">Reset Password</Typography>
        </Stack>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2.5}>
            {!!errors.length &&
              errors.map((msg: string, key: number) => (
                <Alert severity="error" key={key}>
                  {msg}
                </Alert>
              ))}

            <RHFTextField name="email" label="Email Address" />

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

            <RHFTextField
              name="password_confirmation"
              label="Confirm Password"
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
              color="inherit"
              size="large"
              fullWidth
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ mt: 2 }}
            >
              Reset Password
            </LoadingButton>

            <Button
              component={RouterLink}
              color="inherit"
              size="large"
              fullWidth
              variant="soft"
              href={route('login')}
            >
              Back to Login page
            </Button>
          </Stack>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
}
