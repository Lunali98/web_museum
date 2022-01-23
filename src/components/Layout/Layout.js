import React from 'react';
import {AppBar, Box, Divider, Typography} from "@mui/material";
import {withStyles} from '@mui/styles';
import layoutStyles from "./layoutStyles";
import {getImgUrl} from "../../utils/utils";
import classNames from "classnames";
import {withRouter} from "../../utils/routerUtils";

class Layout extends React.Component {
    navLinks = [
        { name: 'Курсы', action: () => { this.props.navigate('/courses'); setTimeout(() => window.scrollTo(0, Math.max(window.innerHeight, 777)), 200); }},
        { name: 'Сайт музея', action: () => { window.open('http://gmir.ru/') } },
        { name: 'Контакты', action: () => { window.scrollTo(0, document.body.scrollHeight - 77); } }
    ];

    contactLinks = [
        { name: 'facebook', action: () => { window.open('https://www.facebook.com/religionmuseum') } },
        { name: 'instagram', action: () => { window.open('https://www.instagram.com/religionmuseum/') } },
        { name: 'twitter', action: () => { window.open('https://twitter.com/Museum_Religion') } },
        { name: 'youtube', action: () => { window.open('https://www.youtube.com/channel/UCXD3moNEHul7y4bioiELgxA') } },
        { name: 'vk', action: () => { window.open('https://vk.com/religionmuseum') } },
    ]

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Box className={classes.content}>
                    <AppBar className={classes.appBar}>
                        <img className={classes.logo} src={getImgUrl('logo.svg')} />
                        <Box className={classes.navLinksContainer}>
                            {this.navLinks.map(link =>
                                <Box pl={14} onClick={link.action}>
                                    <Typography variant={'h4'} className={classes.navLink}>
                                        {link.name}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </AppBar>

                    <Box mt={-0.25}>
                        {this.props.children}
                    </Box>

                    <Box className={classes.footer} pt={6} pb={3}>
                        <Box width={1} className={classes.footerInfoRow}>
                            <img className={classes.logo} src={getImgUrl('logo.svg')} />
                            <Box pl={4}>
                                <Typography variant={'h3'} className={classes.museumName}>
                                    ГОСУДАРСТВЕННЫЙ МУЗЕЙ
                                </Typography>
                                <Typography variant={'h3'} className={classes.museumName}>
                                    ИСТОРИИ РЕЛИГИИ
                                </Typography>
                            </Box>
                        </Box>

                        <Box width={1} className={classNames(classes.footerInfoRow, classes.justifyBetween)} mt={8}>
                            <Box display={'flex'}>
                                <Box pr={0.5} display={'flex'} alignItems={'center'}>
                                    <img src={getImgUrl('locationIcon.svg')} />
                                </Box>
                                <Typography variant={'body1'} className={classes.contactInfo}>
                                    190000 Санкт-Петербург, Почтамтская ул., 14/5
                                </Typography>
                            </Box>

                            <Box display={'flex'}>
                                <Box pr={0.5} display={'flex'} alignItems={'center'}><img src={getImgUrl('phoneIcon.svg')} /></Box>
                                <Typography variant={'body1'} className={classes.contactInfo}>
                                    (812) 315-30-80
                                </Typography>
                            </Box>

                            <Typography variant={'body1'} className={classes.contactInfo}>
                                gmir@relig-museum.ru
                            </Typography>
                        </Box>

                        <Box width={1} mt={4.5}>
                            <Divider className={classes.divider} />
                        </Box>

                        <Box width={1} className={classes.footerInfoRow} mt={7}>
                            {this.contactLinks.map(link => <Box px={2}><img onClick={link.action} src={getImgUrl(`${link.name}.svg`)} /></Box>)}
                        </Box>

                        <Box width={1} className={classes.footerInfoRow} mt={7}>
                            <Typography variant={'body1'} className={classes.contactInfo}>
                                © Государственный музей истории религии, 2021
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(layoutStyles)(Layout));