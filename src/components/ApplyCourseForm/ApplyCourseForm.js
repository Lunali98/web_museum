import React from 'react';
import {withStyles} from "@mui/styles";
import {Autocomplete, Box, Button, TextField, Typography} from "@mui/material";
import {getImgUrl} from "../../utils/utils";
import SectionTitle from "../SectionTitle";
import coursesData from '../../data/coursesData.json';
import classNames from "classnames";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const styles = theme => ({
    container: {
        height: '473px',
        width: '100%',
        background: 'rgba(196, 196, 196, 0.23)',
        position: 'relative',
        overflow: 'hidden',

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box'
    },
    imageLeft: {
        position: 'absolute',
        left: '0'
    },
    imageRight: {
        position: 'absolute',
        right: '0'
    },
    textField: {
        height: '35px',
        width: '386px !important',
        background: '#FFF',
        borderRadius: '20px',
        paddingRight: '8px !important'
    },
    textFieldError: {
        border: '1px solid red !important'
    },
    input: {
        paddingLeft: '16px'
    },
    button: {
        height: '50px',
        padding: '6px 24px !important',
        borderRadius: "30px !important",
        backgroundColor: theme.palette.primary.main + '!important',
        color: '#000 !important'
    },
    dropdownIcon: {
        fontSize: '28px',
        color: '#494949',
    },
    successBlock: {
        background: '#FFF',
        width: '420px',
        height: '337px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative'
    },
    successTitle: {
        fontSize: '22px !important',
        lineHeight: '30px !important',
        textAlign: 'center'
    },
    successText: {
        fontSize: '12px !important',
        lineHeight: '28px !important',
        textAlign: 'center'
    },
    successCross: {
        position: 'absolute',
        top: '2px',
        right: '2px'
    }
})


const GoogleSheetsAPI = 'https://v1.nocodeapi.com/lunali98/google_sheets/MppHbAoFIUDExJSD?tabId=sheet';

class ApplyCourseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: props.courseName || '',
            courseInput: props.courseName || '',
            name: '',
            email: '',

            courseError: false,
            nameError: false,
            emailError: false,

            successOpen: false
        }

        this.courseOptions = coursesData.courses.map(el => el.title);
    }

    onCourseChange = (event, value) => {
        this.setState(state =>({ course: value }))
    }

    onCourseInputChange = (event, value) => {
        if (!event) { return; }
        this.setState(state => ({ courseInput: value, courseError: !state.courseError ? false : !(state.courseError && value) }))
    }

    onNameChange = event => {
        this.setState(state => ({ name: event.target.value, nameError: !state.nameError ? false : !(state.nameError && event.target.value) }))
    }

    onEmailChange = event => {
        this.setState(state => ({ email: event.target.value, emailError: !state.emailError ? false : !(state.emailError && event.target.value) }))
    }

    validateFields = () => {
        this.setState(state => ({
            courseError: !state.course,
            nameError: !state.name,
            emailError: !state.email
        }));

        return !!(this.state.course && this.state.name && this.state.email);
    }

    onApply = () => {
        if (!this.validateFields()) { return; }
        const { name, email, course } = this.state;

        fetch(GoogleSheetsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([[email, name, course]])
        }).then(result => {
            this.toggleSuccessBlock();
            this.setState({
                course: this.props.courseName || '',
                courseInput: this.props.courseName || '',
                name: '',
                email: '',
            })
        }, error => {
            console.log(error);
        })
    }

    toggleSuccessBlock = () => {
        this.setState(state => ({ successOpen: !state.successOpen }));
    }

    getSuccessBlock = () => {
        const { classes } = this.props;

        return (
            <div className={classes.successBlock}>
                <img src={getImgUrl('/cross.svg')} className={classes.successCross} onClick={this.toggleSuccessBlock} />
                <img src={getImgUrl('/applySuccess.png')} />
                <Box mt={1}>
                    <Typography variant={'h2'} className={classes.successTitle}>Готово!</Typography>
                    <Typography variant={'body2'} className={classes.successText}>Вы получите письмо на указанную почту перед началом курса</Typography>
                </Box>
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        const { course, courseInput, name, email,
            successOpen, courseError, nameError, emailError } = this.state;
        return (
            <React.Fragment>
                <Box className={classes.container} pt={5.75}>
                    <img className={classes.imageLeft} src={getImgUrl('applyFormLeft.png')} />
                    <img className={classes.imageRight} src={getImgUrl('applyFormRight.png')} />

                    <SectionTitle>ЗАПОЛНИТЕ ФОРМУ И МЫ ОБЯЗАТЕЛЬНО СВЯЖЕМСЯ С ВАМИ</SectionTitle>

                    {!successOpen ? (
                        <>
                            <Box mt={8}>
                                <Autocomplete
                                    // openOnFocus={true}
                                    popupIcon={<ArrowDropDownIcon className={classes.dropdownIcon} />}
                                    options={this.courseOptions}
                                    value={course}
                                    onChange={this.onCourseChange}
                                    inputValue={courseInput}
                                    onInputChange={this.onCourseInputChange}

                                    renderInput={(params) => {
                                        let customParams = Object.assign(params);
                                        customParams.InputProps.className = classNames(customParams.InputProps.className, classes.input);
                                        return <TextField
                                            {...customParams}
                                            variant={'standard'}
                                            className={classNames(classes.textField, courseError && classes.textFieldError)}
                                            placeholder={'Выберите курс'}

                                            InputProps={{
                                                // className: classes.input,
                                                disableUnderline: true,
                                                ...customParams.InputProps
                                            }}
                                        />
                                    }}
                                />

                                <Box mt={2}>
                                    <TextField
                                        variant={'standard'}
                                        className={classNames(classes.textField, nameError && classes.textFieldError)}
                                        placeholder={'Имя'}

                                        value={name}
                                        onChange={this.onNameChange}

                                        InputProps={{
                                            className: classes.input,
                                            disableUnderline: true
                                        }}
                                    />
                                </Box>

                                <Box mt={2}>
                                    <TextField
                                        variant={'standard'}
                                        className={classNames(classes.textField, emailError && classes.textFieldError)}
                                        placeholder={'Почта'}

                                        value={email}
                                        onChange={this.onEmailChange}

                                        InputProps={{
                                            className: classes.input,
                                            disableUnderline: true
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box mt={3}>
                                <Button className={classes.button} onClick={this.onApply}>
                                    <Typography variant={'button'}>
                                        Записаться на курс
                                    </Typography>
                                </Button>
                            </Box>
                        </>
                    ) : this.getSuccessBlock()}
                </Box>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ApplyCourseForm);