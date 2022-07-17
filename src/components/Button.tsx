import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { MouseEventHandler } from "react";

type TButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLElement>;
};

const CustomBaseButton = styled(Button)<ButtonProps>(() => ({
  color: "#222",
  backgroundColor: "#eeba0b",
  padding: "0.4rem 1.2rem",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#ffd000",
  },
}));

export default function BaseButton(props: TButtonProps) {
  return (
    <CustomBaseButton
      onClick={props.onClick}
      variant="contained"
      startIcon={<img src="pokeball.png" width="30px" />}
    >
      {props.label}
    </CustomBaseButton>
  );
}
