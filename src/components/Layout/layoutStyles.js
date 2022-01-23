const layoutStyles = theme => ({
    justifyBetween: {
        justifyContent: 'space-between !important'
    },
    content: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    appBar: {
        position: 'static !important',
        height: '77px',
        padding: '0 60px',
        backgroundColor: theme.palette.background.dark + ' !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        flexDirection: 'row !important',
        boxShadow: 'none !important',

        borderBottom: `0.5px solid ${theme.palette.primary.main}`,
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(to right, ${theme.palette.background.dark}, ${theme.palette.primary.main}, ${theme.palette.background.dark})`,

        [theme.breakpoints.up(1400)]: {
            paddingLeft: 'calc((100vw - 1400px) / 2 + 60px)',
            paddingRight: 'calc((100vw - 1400px) / 2 + 60px)'
        }
    },
    logo: {
        width: '107px',
        height: '53px'
    },
    navLinksContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    navLink: {
        textTransform: 'uppercase',
        color: '#FFF',
        lineHeight: '50px',
        cursor: 'pointer'
    },
    footer: {
        height: '348px',
        background: theme.palette.background.dark,
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '80px',
        paddingRight: '80px',

        [theme.breakpoints.up(1400)]: {
            paddingLeft: 'calc((100vw - 1400px) / 2 + 80px)',
            paddingRight: 'calc((100vw - 1400px) / 2 + 80px)',
        }
    },
    footerInfoRow: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    museumName: {
        color: '#FFF',
        fontSize: '15px'
    },
    contactInfo: {
        color: '#FFF'
    },
    divider: {
        background: '#FFF'
    }
});

export default layoutStyles;