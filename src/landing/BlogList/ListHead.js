import PropTypes from 'prop-types';
// Material
import { visuallyHidden } from '@mui/utils';
import { withStyles } from '@mui/styles';
import {
    Box,
    TableRow,
    TableCell,
    TableHead,
    TableSortLabel
} from '@mui/material';
// ----------------------------------------------------------------------

const StickyTableCell = withStyles((theme) => ({
    head: {
        position: "sticky",
        zIndex: 1000,
        top: 0
    }
}))(TableCell);

const TABLE_HEAD = [
    { no: 0, id: 'id', label: 'ID', align: 'center', width:'5%' },
    { no: 1, id: 'image', label: 'Preview', align: 'center', width: '45%' },
    { no: 2, id: 'description', label: 'Description', align: 'center', width: '50%' },
];

export default function ListHead({ }) {
    return (
        <TableHead>
            <TableRow
                style={{ background: '#00000000' }}
            >
                {TABLE_HEAD.map((headCell) => (
                    <StickyTableCell
                        key={headCell.id}
                        align={headCell.align}
                        sortDirection={false}
                        width={headCell.width}
                        sx={{
                            padding: 0,
                            py: 1,
                            ...(headCell.no > 0 && {
                                pl: 0,
                                pr: 0,
                            })
                        }}
                    >
                        {headCell.label}
                    </StickyTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
