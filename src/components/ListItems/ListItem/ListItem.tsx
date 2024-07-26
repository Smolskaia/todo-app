import React, { FC, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITask } from "../../../Interfaces";


interface Props {
  task?: ITask;
}
// const [checked, setChecked] = useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

const TodoTask = ({task}:Props) => {
  return (
    <div>
      <ListItem
        // key={value}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          // onClick={handleToggle(value)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              // inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText
            // id={labelId}
            primary={task?.taskName}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default TodoTask;
