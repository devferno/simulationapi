import { TableContainer,Table ,TableCell,TableHead, TableRow,TableBody} from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';

const TableAmortissment =({length,data})=>{

    const createArray=(length )=>{
        return [...Array(length)];
    }
    return(
        <TableContainer component={Paper}>
            <Table>
            <TableHead sx={{background:"#ECDBBA"}} >
                <TableCell>annuite</TableCell>
                <TableCell>ammortisment</TableCell>
                <TableCell>interet</TableCell>
                <TableCell>capital restant</TableCell>
            </TableHead>
            <TableBody>
            {length?createArray(length).map(
                (item,index)=><TableRow key={index}>
                    
                <TableCell>{data.annuite[index]}</TableCell>
                <TableCell>{data.amortissement[index]}</TableCell>
                <TableCell>{data.interet[index]}</TableCell>
                <TableCell>{data.capital_restant[index]}</TableCell>
                </TableRow>
            ):null}
                 </TableBody>
                 </Table>
        </TableContainer>
    )
}

export default TableAmortissment;