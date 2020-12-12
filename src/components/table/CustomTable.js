import React, { useRef } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import * as Icon from 'react-feather';

import Search from './Search';
import { Avatar } from '@material-ui/core';

const iconComponent = props => {
  return (
    <Icon.ChevronDown
      className={props.className}
      style={{ color: 'white', paddingRight: 5, paddingLeft: 5 }}
    />
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  container: {
    maxHeight: 900,
    // maxWidth: 980,
  },
  paginationContainer: {
    marginTop: 20,
    height: 32,
  },

  rowPageContainer: {
    height: '2px',
  },
}));
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    height: '10px',
  },
  input: {
    borderRadius: 4,
    position: 'relative',

    backgroundColor: '#f50057', //theme.palette.background.paper,
    color: '#fff',
    border: '1px solid #ced4da',
    fontSize: '0.875rem',
    padding: '5px 26px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Poppins'].join(','),
    '&:focus': {
      borderRadius: 4,
      //borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#f50057', //theme.palette.background.paper,
      color: '#fff',
    },
  },
}))(InputBase);

export default function CustomTable({
  pagination,
  search,
  pagerows,
  rows,
  columns,
  actions,
  handleLinkClick,
  handleActionClick,
  id,
  withEmoji,
}) {
  const refs = useRef(0);
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = React.useState(rows);
  const [count, setCount] = React.useState(items.length / rowsPerPage);
  const [filter, setFilter] = React.useState('Name');
  console.log(filter);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = event => {
    setPage(1);
    setRowsPerPage(+event.target.value);
  };
  const handleSearchChange = event => {
    let value = event.target.value.toLowerCase();
    if (value) {
      let search = rows.filter(item => item.name.toLowerCase().includes(value));

      setItems(search);
      // Need to correct our pagination to adapt to new search result
      setPage(1);
      setCount(Math.ceil(search.length / rowsPerPage));
    } else {
      // On search empty put everything back to initial stage
      setItems(rows);
      setPage(1);
      setCount(Math.ceil(rows.length / rowsPerPage));
    }
  };
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };
  console.log(handleFilterChange);
  const renderTableColumns = () => {
    let nColumn = null;
    let nActions = null;
    let nEmoji = null;
    console.log(nEmoji);

    const nColumns = columns.map(column => {
      nColumn = column;

      return (
        <TableCell
          key={column.id + id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      );
    });

    if (actions) {
      nActions = (
        <TableCell
          key={nColumn.id + id}
          align={nColumn.align}
          style={{ minWidth: nColumn.minWidth }}
        >
          Actions
        </TableCell>
      );
    }
    // if (withEmoji) {
    //   nEmoji = (
    //     <TableCell
    //       key={nColumn.id + id}
    //       align={nColumn.align}
    //       style={{ minWidth: nColumn.minWidth }}
    //     >
    //       Preview
    //     </TableCell>
    //   );
    // }
    return (
      <TableRow>
        {nColumns}
        {nActions}
      </TableRow>
    );
  };
  const renderTableRows = () => {
    let nColumn = null;
    return items
      .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
      .map(row => {
        return (
          <StyledTableRow role="checkbox" tabIndex={-1} key={row.id + 'Row'}>
            {columns.map(column => {
              nColumn = column;
              const value = row[column.id];

              return (
                <TableCell
                  key={column.id + 'Cell' + id}
                  align={column.align}
                  className={classes.cell}
                  style={{
                    //  color: column.color(value),
                    color: 'blue'
                  }}
                >
                  {column.type && column.type === 'link' ? (
                    <div
                      color="inherit"
                      onClick={e => handleLinkClick(e, row)}
                      style={{ cursor: 'pointer' }}
                    >
                      {value}
                    </div>
                  ) : column.type && column.type === 'image' ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar src={row.src && row.src} className="small" />{''}
                      <span className="px-4">{value}</span>
                    </span>
                  ) : (
                    value
                  )}
                </TableCell>
              );
            })}
            {actions ? (
              <TableCell key={nColumn.id + 'Cell'} align={nColumn.align}>
                {actions.map((action, i) => {
                  return (
                    <IconButton
                      key={i + 'Action' + id}
                      aria-label="upload picture"
                      component="span"
                      style={{ paddingTop: 0, paddingBottom: 0 }}
                      onClick={e =>
                        handleActionClick(e, { type: action, ...row })
                      }
                    >
                      {getActionIconType(action, i)}
                    </IconButton>
                  );
                })}
              </TableCell>
            ) : (
              ''
            )}
          </StyledTableRow>
        );
      });
  };

  const getActionIconType = (type, index) => {
    switch (type) {
      case 'delete':
        return <Icon.Trash2 key={index} color="red" />;
      case 'edit':
        return <Icon.Edit key={index} color="black" />;
      case 'play':
        return <Icon.PlayCircle key={index} color="black" />;
      case 'pause':
        return <Icon.PauseCircle key={index} color="black" />;
      case 'attachment':
        return <Icon.Paperclip key={index} color="blue" />;
      case 'correct':
        return <Icon.CheckCircle key={index} color="green" />;
      case 'close':
        return <Icon.XCircle key={index} color="red" />;
      default: 
      return null
    }
  };
  return (
    <Grid container={true} className="w-full" style={{display:'flex', flexDirection:'column'}}>
      <Grid item>
        <Grid container={true} justify="space-between" alignItems="flex-start">
          <Grid item>
            {search ? <Search handleSearchChange={handleSearchChange} /> : ''}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Paper elevation={1}>
          <TableContainer className={classes.container}>
            <Table>
              <TableHead className={classes.table_head}>
                {renderTableColumns()}
              </TableHead>
              <TableBody ref={refs}>{renderTableRows()}</TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          className={classes.paginationContainer}
        >
          <Grid item>
            {pagination ? (
              <Pagination
                color="secondary"
                shape="rounded"
                count={count}
                page={page}
                showFirstButton
                showLastButton
                onChange={handleChange}
              />
            ) : (
              ''
            )}
          </Grid>
          <Grid item>
            {pagerows ? (
              <FormControl
                className={classes.rowPageContainer}
                style={{ padding: 15 }}
              >
                <Select
                  labelId="customized-select-label"
                  id="customized-select"
                  value={rowsPerPage}
                  IconComponent={iconComponent}
                  onChange={handleChangeRowsPerPage}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
