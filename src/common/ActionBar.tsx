import {
    AppBar,
    Breadcrumbs,
    Hidden,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { ReactElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface Breadcrumb {
    label: string;
    route: string;
}

export interface ActionItem {
    label: string;
    icon: ReactElement;
    onClick: () => void;
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
        zIndex: theme.zIndex.drawer,
    },
    breadcrumbs: {
        flexGrow: 1,
    },
}));

interface Props {
    actionItems: ActionItem[];
    breadcrumbs: Breadcrumb[];
    isLoading?: boolean;
}

function ActionBar({ actionItems, breadcrumbs, isLoading }: Props) {
    const classes = useStyles();
    const [selectedMenuItem, setSelectedMenuItem] = useState<null | HTMLElement>(
        null,
    );

    const handleMenuClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedMenuItem(event.currentTarget);
    };

    const handleMenuClosed = () => {
        setSelectedMenuItem(null);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
                    {breadcrumbs.map((breadcrumb, idx) => {
                        const last = idx === breadcrumbs.length - 1;

                        return last ? (
                            <Typography color="textPrimary" key={breadcrumb.route}>
                                {breadcrumb.label}
                            </Typography>
                        ) : (
                            <Link
                                color="inherit"
                                component={RouterLink}
                                to={breadcrumb.route}
                                key={breadcrumb.route}
                            >
                                {breadcrumb.label}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
                <Hidden mdDown>
                    {actionItems.map((actionItem, idx) => (
                        <IconButton
                            onClick={actionItem.onClick}
                            key={idx}
                            disabled={isLoading}
                        >
                            {actionItem.icon}
                        </IconButton>
                    ))}
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="feature flag actions menu"
                        aria-controls="flag-actions-menu"
                        aria-haspopup="true"
                        onClick={handleMenuClicked}
                        disabled={isLoading}
                    >
                        <MoreIcon/>
                    </IconButton>
                    <Menu
                        id="action-menu"
                        anchorEl={selectedMenuItem}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(selectedMenuItem)}
                        onClose={handleMenuClosed}
                        color="primary"
                    >
                        {actionItems.map((actionItem, idx) => (
                            <MenuItem
                                onClick={actionItem.onClick}
                                key={idx}
                                disabled={isLoading}
                            >
                                <ListItemIcon>{actionItem.icon}</ListItemIcon>
                                <ListItemText primary={actionItem.label}/>
                            </MenuItem>
                        ))}
                    </Menu>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default ActionBar;
