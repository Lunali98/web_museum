import React from "react";
import {styled, withStyles} from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {Box, Typography} from "@mui/material";
import courseStyles from "../courseStyles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: 'none !important',
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowDropDownIcon style={{ fontSize: '38px', color: '#494949' }} />}
        {...props}
    />
))(({ theme }) => ({
    border: 'none',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    border: 'none !important',
    padding: '0 24px 30px 24px !important'
}));

class LecturesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accordionState: props.lectures.map((lecture, index) => ({ expanded: false }))
        };
    }

    toggleLecture = index => {
        this.setState(state => ({
            accordionState: state.accordionState.map((el, i) => ({ expanded: index === i ? !state.accordionState[i].expanded : state.accordionState[i].expanded }))
        }))
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                {this.props.lectures.map((lecture, index) => {
                    const expanded = this.state.accordionState[index].expanded;
                    return (
                        <Accordion expanded={expanded} onChange={() => this.toggleLecture(index)}>
                            <AccordionSummary>
                                <Typography variant={'body2'} className={classes.lectureNumber}>Лекция {index + 1}. <span className={classes.lectureTitle}>{lecture.title}</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {lecture.description.split('\n\n').map(paragraph => (
                                    <Box mt={3.75}>
                                        <Typography variant={'body2'} className={classes.lectureDescription}>{paragraph}</Typography>
                                    </Box>
                                    ))}
                            </AccordionDetails>
                        </Accordion>
                    )
                    }
                )}
                </React.Fragment>
        )
    }
}

export default withStyles(courseStyles)(LecturesList);