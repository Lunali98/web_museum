import React  from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import {makeStyles, withStyles} from "@mui/styles";
import classNames from "classnames";
import {getImgUrl} from "../../utils/utils";
import SectionTitle from "../../components/SectionTitle";
import coursesData from '../../data/coursesData.json';
import AlgorithmStepper from "../../components/AlgorithmStepper";
import ApplyCourseForm from "../../components/ApplyCourseForm/ApplyCourseForm";
import {Link} from "react-router-dom";
import courseStyles from "./courseStyles";
import {withRouterParams} from "../../utils/routerUtils";
import LecturesList from "./components/LecturesList";

class Course extends React.Component {
    course = coursesData.courses.find(el => el.id === +this.props.params.courseId);

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toApply = () => {
        window.scrollTo(0, document.body.scrollHeight - 893);
    }

    render() {
        const { classes } = this.props;
        const { id, shortDescription, lecturesCount, title } = this.course;
        return (
            <React.Fragment>
                <Box className={classes.titleBlock}>
                    <Box className={classes.titleContainer}>
                        <Typography variant={'h1'} className={classes.title}>
                            {title}
                        </Typography>
                        <Box mt={1}>
                            <Typography variant={'body2'} className={classes.lecturesCountInfo}>
                                {lecturesCount} лекций
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant={'body2'} className={classes.shortDescription}>
                                {shortDescription}
                            </Typography>
                        </Box>

                        <Box mt={7}>
                            <Button className={classes.courseButton} onClick={this.toApply}>
                                <Typography variant={'button'}>
                                    Записаться на курс
                                </Typography>
                            </Button>
                        </Box>
                    </Box>

                    <img src={getImgUrl(`coursePage/mainImages/${id}.png`)} />
                </Box>

                <Box className={classes.content}>
                    <Box mt={8}>
                        <SectionTitle>Список лекций</SectionTitle>
                    </Box>

                    <Box mt={5.5}>
                        <LecturesList lectures={this.course.lectures} />
                    </Box>

                    <Box mt={9}>
                        <SectionTitle>Как это работает</SectionTitle>
                    </Box>

                    <Box mt={6.25}>
                        <AlgorithmStepper />
                    </Box>
                </Box>

                <Box mt={9}>
                    <ApplyCourseForm courseName={title} />
                </Box>
            </React.Fragment>
        )
    }
}

export default withRouterParams(withStyles(courseStyles)(Course));