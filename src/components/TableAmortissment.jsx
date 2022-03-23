import { TableContainer,Table ,TableCell,TableHead, TableRow,TableBody, TableFooter} from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';
import { blue } from "@mui/material/colors";

const TableAmortissment =({length,data})=>{

    const createArray=(length )=>{
        return [...Array(length)];
    }
    return(
        <TableContainer component={Paper}>
            <Table>
            <TableHead sx={{background:"#ECDBBA"}} >
            <TableCell>Ans</TableCell>
            <TableCell>Capital Restant</TableCell>
                <TableCell>Annuite</TableCell>
                <TableCell>Ammortisment</TableCell>
                <TableCell>Interet</TableCell>
                
            </TableHead>
            <TableBody>
            {length?createArray(length).map(
                (item,index)=><TableRow key={index}>
                   <TableCell>{index+1}</TableCell>
                    <TableCell>{data.capital_restant[index]}</TableCell>
                    
                <TableCell>{data.annuite[index]}</TableCell>
                <TableCell>{data.amortissement[index]}</TableCell>
                <TableCell>{data.interet[index]}</TableCell>
                
                </TableRow>
            ):null}
            <TableRow sx={{background:blue["A100"]}}>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
                <TableCell>{data.total_annuite} Dh</TableCell>
                <TableCell>{data.total_amortissement} Dh</TableCell>
                <TableCell>{data.total_interet} Dh</TableCell>
            </TableRow>
                 </TableBody>
                 </Table>
        </TableContainer>
    )
}

export default TableAmortissment;