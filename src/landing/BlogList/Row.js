import { useState, useEffect } from 'react';
import React, { Suspense } from "react";

// Iconify
import { Icon } from '@iconify/react';
import arrowsExchange from '@iconify/icons-gg/arrows-exchange';
import rippleSolid from '@iconify/icons-teenyicons/ripple-solid';

// Material
import { withStyles } from '@mui/styles';
import {
    styled,
    Avatar,
    IconButton,
    Link,
    Stack,
    Grid,
    TableCell,
    TableRow,
    Tooltip,
    Typography,
    Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VerifiedIcon from '@mui/icons-material/Verified';

// Components

// Utils
import { formatDateTime, formatMonthYearDate } from 'src/utils/formatTime';
import { fNumber, fIntNumber, fPercent, fVolume } from 'src/utils/formatNumber';

const StickyTableCell = withStyles((theme) => ({
    head: {
        position: "sticky",
        zIndex: 100,
        top: 0,
        left: 24
    },
    body: {
        position: "sticky",
        zIndex: 100,
        left: 24
    }
})) (TableCell);

const TransitionTypo = styled(Typography)(
    () => `
        -webkit-transition: background-color 300ms linear, color 1s linear;
        -moz-transition: background-color 300ms linear, color 1s linear;
        -o-transition: background-color 300ms linear, color 1s linear;
        -ms-transition: background-color 300ms linear, color 1s linear;
        transition: background-color 300ms linear, color 1s linear;
    `
);

const CardOverlay = styled('div')(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: black;
    inset: 0;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.5s;
    // border-radius: 20px;
    &:hover {
        opacity: 0.3;
    }
`
);

const CardWrapper = styled('div')(
    ({ theme }) => `
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        backdrop-filter: blur(50px);
        background: rgb(2, 0, 36);
        padding: 10px;
        text-align: center;
        object-fit: cover;
        cursor: pointer;
        overflow: hidden;
        transition: width 1s ease-in-out, height .5s ease-in-out !important;
        -webkit-tap-highlight-color: transparent;
        &:hover, &.Mui-focusVisible {
            z-index: 1;
            & .MuiImageBackdrop-root {
                opacity: 0.1;
            }
            & .MuiIconEditButton-root {
                opacity: 1;
            }
        }
  `
);

const IconCover = styled('div')(
    ({ theme }) => `
        width: 72px;
        height: 72px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        border: 1px solid ${theme.colors.alpha.black[50]};
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 8%) 0px 5px 10px;
        background-color: ${theme.colors.alpha.white[70]};
        position: relative;
        overflow: hidden;
        transition: width 1s ease-in-out, height .5s ease-in-out !important;
        -webkit-tap-highlight-color: transparent;
        &:hover, &.Mui-focusVisible {
            z-index: 1;
            & .MuiImageBackdrop-root {
                opacity: 0.1;
            }
            & .MuiIconEditButton-root {
                opacity: 1;
            }
        }
    `
);

const IconWrapper = styled('div')(
    ({ theme }) => `
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        width: 70px;
        height: 70px;
  `
);

const IconImage = styled('img')(
    ({ theme }) => `
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px; height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 0px;
  `
);

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
}));




export default function Row({ item }) {
    const {
        id,
        slug,
        title,
        excerpt,
        imageUrl,
        categories
    } = item;

    return (
        <TableRow
            hover
            // key={uuid}
            style={{cursor: 'pointer'}}
        >
            <TableCell align="center" sx={{padding:{xs:'3px', md:'10px'}}}><Typography variant="subtitle2">{id}</Typography></TableCell>
            <TableCell sx={{padding:{xs:'2px', md:'10px'}}}>
              <img src={`${imageUrl}`} width='100%' className='h-[10rem] md:h-[18rem]'/>
            </TableCell>
            <TableCell className='justify-between '>
                <Typography variant='h3'>{title}</Typography>
                <br/>
                <Typography variant='s4'>{excerpt}</Typography>
            </TableCell>

            {/* <TableCell align="left"><Typography variant="subtitle2">{id}</Typography></TableCell>

            <TableCell align="left" sx={{p:0}}>
                <Typography variant="s5" noWrap>{title}</Typography>
            </TableCell>

            <TableCell align="left" sx={{pl:0, pr:0}}>
                <IconImage src={`${imageUrl}`}/>
            </TableCell>

            <TableCell align="left" sx={{pl:0, pr:0}}>
                <Typography variant="s8" noWrap>{excerpt}</Typography>
            </TableCell> */}

            {/* <TableCell align="left" sx={{pl:0, pr:0}}>
                {tradeMethods && tradeMethods.map((row) => {
                    const {
                        identifier
                    } = row;
                    return (
                        <>
                            <Chip label={identifier} color="warning" variant="outlined" size="small" />
                        </>
                    )
                })
                }
            </TableCell> */}
        </TableRow>
    );
};
