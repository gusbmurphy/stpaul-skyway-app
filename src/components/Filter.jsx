import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const { filterState, setFilterState } = props;
  // const [state, setState] = React.useState({});

  const handleChange = (event) => {
    const filter = event.target.name;
    setFilterState({
      // ...filterState,
      [filter]: event.target.value,
    });
  };

  return (
    <div className={classes.flex}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-map-filter">Filter</InputLabel>
        <Select
          native
          value={filterState.filter}
          onChange={handleChange}
          label="filter"
          inputProps={{
            name: 'filter',
            id: 'outlined-map-filter',
          }}
        >
          <option aria-label="None" value={0} />
          <option value={10}>Restaurants</option>
          <option value={20}>Retail</option>
        </Select>
      </FormControl>
    </div>
  );
}
