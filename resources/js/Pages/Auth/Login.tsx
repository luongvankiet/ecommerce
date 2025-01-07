import FormProvider from '@/Components/Form/FormProvider';
import RHFTextField from '@/Components/Form/RHFTextField';
import { Iconify } from '@/Components/Icons';
import RouterLink from '@/Components/RouterLink';
import { useBoolean } from '@/Hooks/useBoolean';
import useRoute from '@/Hooks/useRoute';
import useTypedPageErrors from '@/Hooks/useTypedPageErrors';
import AuthLayout from '@/Layouts/Auth';
import { routes } from '@/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Head, router } from '@inertiajs/react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();

  const password = useBoolean();

  const errors = useTypedPageErrors();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: false,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async data => {
    try {
      await router.post(route(routes.auth.login), {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }} alignItems="center">
      <Typography variant="h3">Sign In</Typography>

      <Stack direction="row" spacing={0.5} justifyContent="center">
        <Typography variant="body1">Not a member?</Typography>

        <Link
          component={RouterLink}
          href={route(routes.auth.register)}
          variant="subtitle1"
        >
          Create an account
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errors.length &&
        errors.map((msg: string, key: number) => (
          <Alert severity="error" key={key}>
            {msg}
          </Alert>
        ))}

      <RHFTextField name="email" label="Email address" />

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
                    password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {canResetPassword && (
        <Link
          component={RouterLink}
          href={route(routes.auth.forgotPassword)}
          variant="body2"
          color="inherit"
          underline="always"
          sx={{ alignSelf: 'flex-end' }}
        >
          Forgot password?
        </Link>
      )}

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  return (
    <AuthLayout>
      <Head title="Login" />

      <Box sx={{ my: 'auto', width: 350 }}>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          {renderHead}

          {!!status && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {status}
            </Alert>
          )}

          <Alert severity="info" sx={{ mb: 3 }}>
            Use email : <strong>test@example.com</strong> / password :
            <strong> password</strong>
          </Alert>

          {renderForm}
        </FormProvider>
      </Box>
    </AuthLayout>
  );
}
