import axios from 'axios'
import { useState, useEffect } from 'react';

// Material
import {
    Box,
    Table,
    TableBody,
    Typography
} from '@mui/material';

// Components
import Row from './Row';
import ListHead from './ListHead';
import BlogToolbar from './BlogToolbar'

export default function BlogList({title, categories}) {
    // const BASE_URL = 'http://localhost:5000/api';
    const BASE_URL = 'https://blog-backend-wfo2.onrender.com/api';


    const [page, setPage] = useState(0);
    const [rows, setRows] = useState(10);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);


    useEffect(() => {
        function getBlogs() {
            const body = {
                page: page + 1,
                rows,
                title,
                categories
            };
            axios.post(`${BASE_URL}/blog`, body)
                .then(res => {
                    let ret = res.status === 200 ? res.data : undefined;
                    if (ret) {
                        setCount(ret.total);
                        setData(ret.page_data);
                        // if(page === 0){
                        //     console.log(ret.data.data[0])
                        //     setLowestprice(ret.data.data[0].adv.price);
                        // }
                        console.log(`Get blogs - ${ret.total}`);
                    }
                }).catch(err => {
                    console.log("Error on getting blogs!!!", err);
                }).then(function () {
                    // always executed
                });
        }
        getBlogs();

        const timer = setInterval(getBlogs, 1000);

        return () => {
            clearInterval(timer);
        }

    }, [page, rows, title, categories]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    py: 1,
                    overflow: "auto",
                    width: "100%",
                    "& > *": {
                        scrollSnapAlign: "center",
                    },
                    "::-webkit-scrollbar": { display: "none" },
                }}
            >
                <Table>
                    <ListHead />
                    <TableBody>
                        {
                            data.map((row, idx) =>
                                <Row
                                    item={row}
                                    key = {idx}
                                />
                            )
                        }
                    </TableBody>
                </Table>
            </Box>
            <BlogToolbar
                count={count}
                rows={rows}
                setRows={setRows}
                page={page}
                setPage={setPage}
            />
        </>
    )
};
