import { useState } from 'react';

// Material
import {
    alpha, styled, useMediaQuery, useTheme,
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


// Iconify Icons
import { Icon } from '@iconify/react';
import baselineBrightnessHigh from '@iconify/icons-ic/baseline-brightness-high';
import baselineBrightness4 from '@iconify/icons-ic/baseline-brightness-4';

// Context
import { useContext } from 'react';
import { AppContext } from 'src/AppContext';

// Components
import Logo from './Logo';

const HeaderWrapper = styled(AppBar)(({ theme }) => `
    width: 100%;
    background-color: ${theme.colors.nav.background};
    margin-bottom: ${theme.spacing(0)};
    border: none;
    border-radius: 0px;
    border-bottom: 0px solid ${alpha('#CBCCD2', 0.2)};
    // position: -webkit-sticky;
    // position: sticky;
    // top: 0;
    // z-index: 1300;
`
);

export default function Header() {
    /*
    xs: 0,
    mobile: 450,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1840
    */
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { toggleTheme, darkMode } = useContext(AppContext);

    return (
        <HeaderWrapper position="sticky" enableColorOnDark={true} sx={{ py: 1 }}>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Box id='logo-container-laptop'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        <Logo />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <IconButton onClick={() => { toggleTheme() }} >
                            {darkMode ? (
                                <Icon icon={baselineBrightness4} />
                            ) : (
                                <Icon icon={baselineBrightnessHigh} />
                            )}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </HeaderWrapper >
    );
}
