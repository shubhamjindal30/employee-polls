import { TableCell, TableCellProps, makeStyles } from '@material-ui/core';

const StyledTableCell = (props: TableCellProps) => {
  const classes = useStyles();
  return (
    <TableCell className={classes.styledCell} {...props}>
      {props.children}
    </TableCell>
  );
};

const useStyles = makeStyles((theme) => ({
  styledCell: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    fontSize: 'medium'
  }
}));

export default StyledTableCell;
