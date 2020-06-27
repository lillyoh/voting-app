import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 900,
  },
});

function SimpleTable(props) {
  const { classes, record } = props;


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Bill </TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Vote</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell align="right">Link</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {record.map(row => (
            <TableRow key={row.vote_uri}>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.result}</TableCell>
              <TableCell align="right">
                <a href={`https://www.congress.gov/bill/116th-congress/senate-bill/${row.bill.number.slice(2)}`}>
                  SN{row.bill.number.slice(2)}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
