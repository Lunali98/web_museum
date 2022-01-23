const courseStyles = theme => ({
    content: {
        paddingLeft: '80px',
        paddingRight: '80px',

        [theme.breakpoints.up(1400)]: {
            paddingLeft: 'calc((100vw - 1400px) / 2 + 80px)',
            paddingRight: 'calc((100vw - 1400px) / 2 + 80px)',
        }
    },
    titleBlock: {
        width: '100%',
        height: 'calc(100vh - 77px + 3px)',
        minHeight: '700px',
        background: theme.palette.background.dark,
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: '30px !important',
        lineHeight: '34px !important'
    },
    titleContainer: {
        width: '416px',
        paddingRight: '24px'
    },
    colorPrimary: {
        color: theme.palette.primary.main
    },
    lecturesCountInfo: {
        fonsSize: '15px',
        lineHeight: '50px',
        color: theme.palette.primary.main
    },
    shortDescription: {
        fonsSize: '15px',
        lineHeight: '25px',
        color: '#FFF'
    },
    courseButton: {
        height: '50px',
        padding: '6px 24px !important',
        border: "1px solid #DEA900 !important",
        boxSizing: "border-box",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important",
        borderRadius: "30px !important",
        color: '#FFF !important'
    },
    lectureNumber: {
        fontFamily: 'Raleway Bold !important',
        fontSize: '20px !important',
        fontWeight: '700 !important'
    },
    lectureTitle: {
        fontFamily: 'Raleway !important',
        fontSize: '20px !important',
        fontWeight: '400 !important'
    },
    lectureDescription: {
        fontSize: '15px !important',
        lineHeight: '25px !important'
    }
})

export default courseStyles;
