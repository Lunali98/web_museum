import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box, Typography} from "@mui/material";
import {getImgUrl} from "../utils/utils";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dotContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: '22px',
        lineHeight: '50px !important',
        textTransform: 'uppercase',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }
}));

function SectionTitle({ children }) {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <img src={getImgUrl('dot.svg')} />
            <Box pl={2}>
                <Typography variant={'h2'} className={classes.text}>
                    {children}
                </Typography>
            </Box>
            <Box pl={2} className={classes.dotContainer}>
                <img src={getImgUrl('dot.svg')} />
            </Box>
        </Box>
    )
}

export default SectionTitle;