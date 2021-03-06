import React from 'react';
import { Button } from '@material-ui/core';
import { PostsContext } from '../contexts/postsContext';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Icon from '../images/check-solid.svg';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const AddPost = () => {

    const { addPost } = React.useContext(PostsContext);

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost({
            name: event.target[0].value,
            type: event.target[1].value,
            pokedex: event.target[2].value
        });
        event.target.reset();
    }

    return (
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
            <h2>Add Pokemon <img width="15px" src={Icon}/></h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Index</TableCell>
                            <TableCell align="center">Add</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" align="center" scope="row"><TextField id="name" label="Name" required={true}/></TableCell>
                            <TableCell align="center"><TextField id="color" label="Color" required={true}/></TableCell>
                            <TableCell align="center"><TextField id="index" label="Index" type="number" required={true}/></TableCell>
                            <TableCell align="center"><Button variant="outlined" color="primary" type="submit">ADD</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    );
}

export default AddPost;