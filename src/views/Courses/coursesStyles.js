const coursesStyles = theme => ({
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
        textAlign: 'center'
    },
    colorPrimary: {
        color: theme.palette.primary.main
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
    courseButtonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    titleContainer: {
        position: 'relative',
        left: '100px',
        bottom: '24px'
    },
    lecturesCountInfo: {
        color: '#786B6B',
        lineHeight: '34px'
    },
    locationInfo: {
        fontSize: '20px !important',
        lineHeight: '28px !important'
    },
    locationInfoContainer: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
})

export default coursesStyles;