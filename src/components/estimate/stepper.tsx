'use client';
import {
  Alert,
  Backdrop,
  CircularProgress,
  Grid,
  Snackbar,
  StepLabel,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import Stepper from '@mui/material/Stepper';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import data from './estimate_data.json';
import EstimateCard from './estimateCard';
import {
  BuildFire,
  Estimation,
  Features,
  Integration,
  MaintenanceHosting,
  Monetizations,
  Start,
  Users,
} from '../app_icons';
import useAuth from '../context/useAuth';

const steps = [
  'Start',
  'Features',
  'Users',
  'Integrations',
  'Monetization',
  'Maintenance & Hosting',
  'BuildFire Services',
  'Estimation',
];

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 35,
  height: 35,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: '#005c8c',
    boxShadow: '0 4p 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: '#005c8c',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Start />,
    2: <Features />,
    3: <Users />,
    4: <Integration />,
    5: <Monetizations />,
    6: <MaintenanceHosting />,
    7: <BuildFire />,
    8: <Estimation />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#005c8c',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#005c8c',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));
const EstimateStepper = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    setEstimateImage,
    setEstimateState,
    setSelectedFeatures,
    selectedFeatures,
  } = useAuth();
  const [activeStep, setActiveStep] = React.useState(0);
  const [filterStepperState, setFilterStepperState] = React.useState('all');
  const [handleOpenBackdrop, setHandleOpenBackdrop] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState<{
    show: boolean;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  const [jsonData, setJsonData] = React.useState(data);

  const handleStep = (step: React.SetStateAction<number>) => () => {
    setActiveStep(step);
  };
  const handleStepNextButton = () => {
    setActiveStep(activeStep + 1);
  };
  const handleStepBackButton = () => {
    setActiveStep(activeStep - 1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectFeatureFunction = (selectItem: any, id: any) => {
    let hover = 0;
    let money = 0;
    let selectedImage = '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newState = jsonData?.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let child: any[] = [];
      if (selectItem?.question === item?.question) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        child = item?.children?.map((children: { child: any[] }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const newChildren = children?.child?.map((ch: any) => {
            if (id === ch?.id) {
              if (!ch?.selected) selectedImage = ch?.imageLink;
              return {
                ...ch,
                selected: !ch?.selected,
              };
            } else return ch;
          });
          return {
            ...children,
            child: newChildren,
          };
        });
        return {
          ...item,
          children: child,
        };
      } else return item;
    });
    if (selectedImage !== '') {
      setEstimateImage(selectedImage);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectedFeatures: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newState?.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      item?.children?.map((children: { child: any[] }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children?.child?.map((child: any) => {
          if (child?.selected) {
            selectedFeatures.push(child);
            hover += child?.hover;
            money += child?.money;
          }
        });
      });
    });
    setSelectedFeatures(selectedFeatures);
    setEstimateState({
      hover,
      money,
    });
    setJsonData(newState);
  };

  const handleSelectFilerFunction = (event: React.MouseEvent) => {
    setFilterStepperState(event.currentTarget?.id);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setHandleOpenBackdrop(true);
    try {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const formData = { data, selectedFeatures };
      await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setShowNotification({
        show: true,
        type: 'success',
        message: 'Your estimate is successfully saved.',
      });
    } catch (err) {
      setShowNotification({
        show: true,
        type: 'error',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        message: err?.message,
      });
    }

    setHandleOpenBackdrop(false);
  };
  const handleClose = () => {
    setShowNotification({
      show: false,
      message: '',
      type: 'success',
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        justifyContent: 'center',
        display: 'grid',
        position: 'relative',
        paddingBottom: '2rem',
      }}
      pt={5}
    >
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={handleOpenBackdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Box width='fit-content' justifySelf='center'>
        <Stepper
          nonLinear={true}
          activeStep={activeStep}
          alternativeLabel={true}
          connector={<ColorlibConnector />}
          sx={{
            display: 'flex',
          }}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={index <= activeStep}
              sx={{ cursor: 'pointer', color: '#333333' }}
            >
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                onClick={handleStep(index)}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Snackbar
        open={showNotification?.show}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert
          onClose={handleClose}
          severity={showNotification?.type}
          sx={{ width: '100%' }}
        >
          {showNotification?.message}
        </Alert>
      </Snackbar>
      {steps?.length - 1 !== activeStep && (
        <Box
          sx={{ height: '50vh', overflowY: 'auto' }}
          className='estimateStepper'
        >
          {activeStep === 1 && (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                margin: '1rem ',
              }}
            >
              <Box
                sx={{
                  height: '30px',
                  borderRadius: '15px',
                  backgroundColor:
                    filterStepperState === 'all' ? '#005c8c' : '#e6e6e6',
                  color: filterStepperState === 'all' ? '#FFF' : '#333333',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 15px',
                  marginRight: '25px',
                  marginBottom: '15px',
                  cursor: 'pointer',
                  transition: 'all .3s ease-in-out',
                  whiteSpace: 'nowrap',
                  width: 'fit-content',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                    color: '#fff',
                  },
                }}
                id='all'
                onClick={handleSelectFilerFunction}
              >
                All
              </Box>
              {activeStep === 1 &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                jsonData?.[1]?.children?.map((item: any) => {
                  return (
                    <Box
                      sx={{
                        height: '30px',
                        borderRadius: '15px',
                        backgroundColor:
                          filterStepperState === item?.title
                            ? '#005c8c'
                            : '#e6e6e6',
                        color:
                          filterStepperState === item?.title
                            ? '#FFF'
                            : '#333333',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 10px',
                        marginRight: '15px',
                        marginBottom: '15px',
                        cursor: 'pointer',
                        transition: 'all .3s ease-in-out',
                        whiteSpace: 'nowrap',
                        width: 'fit-content',
                        '&:hover': {
                          backgroundColor: '#005c8c',
                          color: '#fff',
                        },
                      }}
                      key={item?.question}
                      id={item?.title}
                      onClick={handleSelectFilerFunction}
                    >
                      {item?.title}
                    </Box>
                  );
                })}
            </Box>
          )}
          <React.Fragment>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {jsonData?.map((item: any, index) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    // marginTop: "2rem",
                    flexWrap: 'wrap',
                  }}
                  pl={2}
                  key={item?.question}
                >
                  {activeStep === index && (
                    <Box
                      sx={{
                        alignItems: 'start',
                        marginTop: '2.5rem',
                        display: 'grid',
                        marginRight: '1rem',
                      }}
                    >
                      <Typography variant='h6'>{item?.question}</Typography>
                      <Typography variant='body2' pt='15px' pb='15px'>
                        {item?.description}
                      </Typography>
                    </Box>
                  )}
                  {activeStep === index &&
                    item?.child?.map(
                      (child: {
                        iconLink: string | StaticImport;
                        title: string | undefined;
                        description: string | undefined;
                        id: string;
                        selected: boolean | undefined;
                        hover: number | undefined;
                        money: number | undefined;
                      }) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <EstimateCard
                            Icon={
                              <Image
                                src={child?.iconLink}
                                width={50}
                                height={50}
                                alt='another estimate'
                              />
                            }
                            title={child?.title}
                            description={child?.description}
                            selectItemFunction={handleSelectFeatureFunction}
                            item={item}
                            id={child?.id}
                            selected={child.selected}
                            hover={child?.hover}
                            cost={child?.money}
                          />
                        );
                      }
                    )}

                  {activeStep === index &&
                    item?.children?.map(
                      (children: {
                        title:
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactElement<
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              any,
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | Promise<React.AwaitedReactNode>
                          | null
                          | undefined;
                        description:
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactElement<
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              any,
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | Promise<React.AwaitedReactNode>
                          | null
                          | undefined;
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        child: any[];
                      }) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <Box pl={2}>
                            {(filterStepperState === 'all' ||
                              children?.title === filterStepperState ||
                              activeStep !== 1) &&
                              children?.title && (
                                <Typography variant='h5' pt='50px' pb='10px'>
                                  {children?.title}
                                </Typography>
                              )}
                            {(filterStepperState === 'all' ||
                              children?.title === filterStepperState ||
                              activeStep !== 1) &&
                              children?.description && (
                                <Typography variant='body2' pt='10px' pb='10px'>
                                  {children?.description}
                                </Typography>
                              )}
                            {(filterStepperState === 'all' ||
                              children?.title === filterStepperState ||
                              activeStep !== 1) &&
                              children?.child?.map(
                                (child: {
                                  iconLink: string | StaticImport;
                                  title: string | undefined;
                                  description: string | undefined;
                                  id: string;
                                  selected: boolean | undefined;
                                  hover: number | undefined;
                                  money: number | undefined;
                                }) => {
                                  return (
                                    // eslint-disable-next-line react/jsx-key
                                    <EstimateCard
                                      Icon={
                                        <Image
                                          src={child?.iconLink}
                                          width={30}
                                          height={30}
                                          alt='another estimate'
                                        />
                                      }
                                      title={child?.title}
                                      description={child?.description}
                                      selectItemFunction={
                                        handleSelectFeatureFunction
                                      }
                                      item={item}
                                      id={child?.id}
                                      selected={child.selected}
                                      hover={child?.hover}
                                      cost={child?.money}
                                    />
                                  );
                                }
                              )}
                          </Box>
                        );
                      }
                    )}
                </Box>
              );
            })}
          </React.Fragment>
        </Box>
      )}

      {steps?.length - 1 === activeStep && (
        <Box pb={5} mt={10}>
          {/* @ts */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography>
                  Enter data to get a detailed breakdown of your app cost.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder='First Name'
                  fullWidth={true}
                  size='medium'
                  {...register('firstName', { required: true })}
                  type='text'
                />
                {errors?.firstName?.type === 'required' && (
                  <Typography variant='body2' pt={1} fontSize='12px'>
                    This field is required!
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder='Last Name'
                  fullWidth={true}
                  size='medium'
                  {...register('lastName', { required: true })}
                  type='text'
                />
                {errors?.lastName?.type === 'required' && (
                  <Typography variant='body2' pt={1} fontSize='12px'>
                    This field is required!
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder='Email'
                  fullWidth={true}
                  size='medium'
                  {...register('email', { required: true })}
                  type='email'
                />
                {errors?.email?.type === 'required' && (
                  <Typography variant='body2' pt={1} fontSize='12px'>
                    This field is required!
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder='App Name'
                  fullWidth={true}
                  size='medium'
                  {...register('appName', { required: true })}
                  type='text'
                />
                {errors?.appName?.type === 'required' && (
                  <Typography variant='body2' pt={1} fontSize='12px'>
                    This field is required!
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6} sx={{ margin: 'auto' }}>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth={true}
                  size='medium'
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          paddingLeft: '30px',
          paddingRight: '30px',
          boxShadow: '0 -5px 10px rgb(0 0 0 / 10%)',
          height: '60px',
          alignItems: 'center',
          zIndex: 10,
          // maxWidth:"var(--maxWidthApp)",
          [theme.breakpoints.down('lg')]: {
            // width:"93%"
          },
        }}
      >
        <Button
          variant='outlined'
          onClick={handleStepBackButton}
          disabled={activeStep < 1}
        >
          Back
        </Button>
        <Button
          variant='contained'
          onClick={handleStepNextButton}
          disabled={steps?.length - 1 === activeStep}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default EstimateStepper;
