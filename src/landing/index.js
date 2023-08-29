import React from 'react';
import { useState, useRef } from 'react';

// Material
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    styled,
    Avatar,
    IconButton,
    Link,
    Select,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
    Typography,
    InputAdornment,
    Grid,
    Box
} from '@mui/material';

// Context
import { useContext } from 'react';
import { AppContext } from 'src/AppContext';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FactCheckIcon from '@mui/icons-material/FactCheck';

// Components
import BlogList from './BlogList';


const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline' : {
        // border: 'none'
    }
}));

export default function Landing() {
    const { openSnackbar } = useContext(AppContext);
    const [title, setTitle] = useState(null);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [showFilter, setShowFilter] = useState(true);


    const handleShowFilter = (e) => {
        setShowFilter(!showFilter);
    }
    const handleChangeSearch = (e) => {
        setTitle(e.target.value);
    }
    const handleFlagChange = (e) => {
        const value = Number(e.target.value);
        const state = e.target.checked;
        let newFilter = categories;
        if(!state){
            const index = newFilter.indexOf(value);
            newFilter = newFilter.splice(index, 1);
        }
        else{
            if(!categories.includes(value)) newFilter.push(value);
            setCategories(newFilter);
        }
        console.log(categories)
    }

    return (
        <Stack sx={{mt:1, minHeight: '50vh'}}>
            <Stack spacing={1} sx={{mb:2}}>
                <Typography variant="h1a">Find Blog</Typography>
            </Stack>

            <Stack spacing={2} mb={0.5}>
                <Box
                    display="flex"
                    alignItems="center"
                // sx={{ margin: 1, padding: 1 }}
                >
                    <IconButton
                        aria-label='filter'
                        onClick={handleShowFilter}
                    >
                        <FilterListIcon fontSize="large" />
                    </IconButton>
                    <TextField
                        id='textFilter'
                        // autoFocus
                        fullWidth
                        variant='outlined'
                        placeholder='Search by title'
                        margin='dense'
                        onChange={handleChangeSearch}
                        autoComplete='new-password'
                        inputProps={{ autoComplete: 'off' }}
                        value={title}
                        onFocus={event => {
                            event.target.select();
                        }}
                        sx={{ pl: 2, pr: 0, pt: 0, pb: 0, mt: 0 }}
                        onKeyDown={(e) => e.stopPropagation()}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ mr: 0.7 }}>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">
                                    {loading && <ClipLoader color='#ff0000' size={15} />}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Stack>

            <Grid container justifyContent='space-between' spacing={2} mb={3}>
                {showFilter &&
                    <Grid item xs={12} md={2} xl={1}>
                        <Stack sx={{ pr: 0 }}>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Stack spacing={2} direction='row'>
                                        <FactCheckIcon />
                                        <Typography variant='s3'>Categories</Typography>
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* owners, pendingNfts, buyWithMints, boughtWithMints, onSaleCount */}
                                    <FormGroup sx={{ flexDirection: 'col' }}>
                                        <FormControlLabel
                                            label={
                                                <Stack direction="row" spacing={0.5}>
                                                    <Typography variant='s3'>Books</Typography>
                                                </Stack>
                                            }
                                            value={3}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />
                                        <FormControlLabel
                                            label={
                                                <Stack direction="row" spacing={0.5}>
                                                    <Typography variant='s3'>Accessories</Typography>
                                                </Stack>
                                            }
                                            value={4}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />
                                        <FormControlLabel
                                            label={<Typography variant='s3'>Music</Typography>}
                                            value={5}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />

                                        <FormControlLabel
                                            label={<Typography variant='s3'>Toys</Typography>}
                                            value={6}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />

                                        <FormControlLabel
                                            label={
                                                <Typography variant='s3'>Audiobooks</Typography>
                                            }
                                            value={7}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />
                                        <FormControlLabel
                                            label={<Typography variant='s3'>News</Typography>}
                                            value={8}
                                            control={<Checkbox onChange={handleFlagChange} />}
                                        />
                                    </FormGroup>


                                </AccordionDetails>
                            </Accordion>

                        </Stack>
                    </Grid>
                }
                <Grid item xs={12} md={showFilter? 10 : 12} xl={showFilter? 11 : 12}>
                    <BlogList title={title} categories={categories}/>
                </Grid>
            </Grid>

        </Stack>
    );
}
