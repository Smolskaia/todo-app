import { FC } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IInputTaskProps } from "../../Interfaces";

const InputTask: FC<IInputTaskProps> = ({ value, onChange }) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="введи задачу"
            multiline
            maxRows={4}
            value={value}
            onChange={onChange}
          />
        </div>
      </Box>
    </div>
  );
};

export default InputTask;
