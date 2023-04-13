import { useState } from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthLayout from '@/layouts/AuthLayout';

import { Box, Button, Grid, TextField, Typography, Link, Chip, Divider, Fab, useTheme, colors } from '@mui/material';
import { ErrorOutline, Lock } from '@mui/icons-material';

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginPage: NextPage = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showError, setShowError] = useState(false);

  const onSubmit = (form: FormData) => {
    console.log(form);
  };

  return (
    <AuthLayout title='Ingresar'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            width: 350,
            padding: '30px 20px',

            borderRadius: '5px',
            boxShadow: 3,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              color='primary'
              xs={12}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              gap={1}
            >
              <Fab disabled color='secondary'>
                <Lock color='primary' />
              </Fab>
              <Typography color={colors.grey[100]} variant='h4'>
                Iniciar Sesión
              </Typography>
              <Chip
                label={'No reconocemos ese usuario/contraseña'}
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Correo'
                variant='outlined'
                fullWidth
                {...register('email', {
                  required: 'Este campo es requerido',
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  color: colors.grey[100],
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Contraseña'
                variant='outlined'
                type='password'
                fullWidth
                {...register('password', {
                  required: 'Este campo es requerido',
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  color: colors.grey[100],
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' fullWidth color='primary' variant='outlined'>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
