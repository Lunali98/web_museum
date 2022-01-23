import React from 'react';
import {makeStyles, styled} from "@mui/styles";
import {Box, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, Typography} from "@mui/material";
import {getImgUrl} from "../utils/utils";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    position: 'relative',
    top: '28px !important',
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1,
    },
}));

const CustomStepIconRoot = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    color: '#000',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
}));

const useStyles = makeStyles(theme => ({
    stepLabel: {
        fontSize: '30px !important'
    },
    stepBottomLabel: {
        fontSize: '20px !important',
        lineHeight: '28px !important',
        color: '#000',
    },
}));

function AlgorithmStepper({ children }) {
    const classes = useStyles();

    const steps = [
        'Выберите интересный Вам курс',
        'Оставьте заявку',
        'Мы сообщим Вам о старте курса на почту',
        'Приходите на лекцию'
    ];

    return (
        <Stepper alternativeLabel activeStep={1} connector={<CustomConnector />}>
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={
                        () =>
                            <CustomStepIconRoot>
                                <Typography variant={'h4'} className={classes.stepLabel}>
                                    {index + 1}
                                </Typography>
                            </CustomStepIconRoot>
                    } className={classes.stepLabelComp}>
                        <Typography variant={'body2'} className={classes.stepBottomLabel}>
                            {label}
                        </Typography>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default AlgorithmStepper;