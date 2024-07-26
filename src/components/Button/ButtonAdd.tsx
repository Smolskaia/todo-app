import { FC } from "react";
import Button from "@mui/material/Button";
import { IButtonAddProps } from "../../Interfaces";

const ButtonAdd: FC<IButtonAddProps> = ({onClick}) => {

  return (
    <div>
      <Button variant="contained" onClick={onClick}>Добавить</Button>
    </div>
  );
};

export default ButtonAdd;
