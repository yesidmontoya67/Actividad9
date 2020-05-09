import React, {useState, useEffect} from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });



function ordersInfo(){
    return window.fetch("http://localhost:28080/api/v1/products/",{
        method:"GET",
        headers:{
            "content-type": "application/json;charset=UTF-8",
        }
}).then(response => response.json());
}

const useOrders = () => {
    const [orders,setOrders]= useState([]);
    useEffect(()=>{
        ordersInfo().then(ordersData=> {setOrders(ordersData)});
    },[setOrders]);

    return {orders};
};



const OrdersInfo = () => {
    const {orders}= useOrders();   
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">BasePrice</StyledTableCell>
              <StyledTableCell align="right">TaxRate</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.basePrice}</TableCell>
                <TableCell align="right">{row.taxRate}</TableCell>
                <TableCell align="right">{row.productStatus}</TableCell>
                <TableCell align="right">{row.inventoryQueantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
       
        
    
};

export default OrdersInfo;
