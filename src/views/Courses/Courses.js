import React  from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import coursesStyles from "./coursesStyles";
import {makeStyles, withStyles} from "@mui/styles";
import classNames from "classnames";
import {getImgUrl} from "../../utils/utils";
import SectionTitle from "../../components/SectionTitle";
import coursesData from '../../data/coursesData.json';
import AlgorithmStepper from "../../components/AlgorithmStepper";
import ApplyCourseForm from "../../components/ApplyCourseForm/ApplyCourseForm";
import {Link} from "react-router-dom";

function CoursePreview({ course }) {
    const { id, title, lecturesCount } = course;

    const classes = makeStyles(coursesStyles)();

    return (
        <React.Fragment>
            <Link to={`/courses/${id}`}>
                <Box className={classes.previewInfoContainer}>
                    <img src={getImgUrl(`coursesPreviewImages/${id}.png`)}/>
                    <Box ml={1.25}>
                        <Typography variant={'subtitle1'}>
                            {title}
                        </Typography>

                        <Typography variant={'body2'} className={classes.lecturesCountInfo}>
                            {lecturesCount} лекций
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </React.Fragment>
    )
}

class Courses extends React.Component {
    toApply = () => {
        window.scrollTo(0, document.body.scrollHeight - 893);
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Box className={classes.titleBlock}>
                    <Box className={classes.titleContainer}>
                        <Typography variant={'h1'} className={classes.title}>
                            Лекционные
                        </Typography>
                        <Typography variant={'h1'} className={classNames(classes.title, classes.colorPrimary)}>
                            циклы
                        </Typography>
                        <Typography variant={'h1'} className={classes.title}>
                            музея истории
                        </Typography>
                        <Typography variant={'h1'} className={classes.title}>
                            религии
                        </Typography>

                        <Box mt={4} className={classes.courseButtonContainer}>
                            <Button className={classes.courseButton} onClick={this.toApply}>
                                <Typography variant={'button'}>
                                    Записаться на курс
                                </Typography>
                            </Button>
                        </Box>
                    </Box>

                    <img src={getImgUrl('mainLogo.png')} />
                </Box>

                <Box className={classes.content}>
                    <Box mt={6.25} display={'flex'} justifyContent={'center'}>
                        <SectionTitle>Курсы</SectionTitle>
                    </Box>

                    <Box width={1} mt={6.25}>
                        <Grid container component={Box} spacing={1}>
                            {coursesData.courses.map(course => (
                                <Grid item xs={4}>
                                    <CoursePreview course={course} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box mt={9}>
                        <SectionTitle>О локации</SectionTitle>
                    </Box>

                    <Box mt={6.25} className={classes.locationInfoContainer}>
                        <Box width={1/2} pr={2.5}>
                            <Typography variant={'body2'} className={classes.locationInfo}>
                                Ежегодно на базе Государственного музея истории религии проходят лекционные курсы на самые разные темы, так или иначе касающиеся темы религии.
                            </Typography>
                            <Box mt={3}>
                                <Typography variant={'body2'} className={classes.locationInfo}>
                                    Наш Музей расположен в самом центре Санкт-Петербурга,
                                    в пяти минутах ходьбы от Исаакиевского собора. Лекторий проводится в специально оборудованном зале со всеми необходимыми удобствами по адресу Почтамтская ул., 14./5.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant={'body2'} className={classes.locationInfo}>
                                    По завершении цикла у Вас будет возможность получить сертификат о дополнительном образовании.
                                </Typography>
                            </Box>
                        </Box>
                        <Box width={1/2} pl={2.5}>
                            <img src={getImgUrl('museumLocation.png')} />
                        </Box>
                    </Box>

                    <Box mt={9}>
                        <SectionTitle>Как это работает</SectionTitle>
                    </Box>

                    <Box mt={6.25}>
                        <AlgorithmStepper />
                    </Box>
                </Box>

                <Box mt={9}>
                    <ApplyCourseForm />
                </Box>
            </React.Fragment>
        )
    }
}

export default withStyles(coursesStyles)(Courses);