import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';

interface MultipleSelectProps {
  title: string;
  options: string[];
  onSubmit: (selected: string[]) => void;
}

export const MultipleSelect: React.FC<MultipleSelectProps> = ({
  title,
  options,
  onSubmit,
}) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '500px' }}>
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSubmit(selectedValues)}
      >
        Submit
      </Button>
    </div>
  );
};
