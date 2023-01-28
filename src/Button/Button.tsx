import React, { type HTMLAttributes } from "react";
import { createUseStyles } from "react-jss";

interface StylesProps {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "danger";
}

export type Props = StylesProps & HTMLAttributes<HTMLButtonElement>;

const useStyles = createUseStyles({
  button: ({ variant }: StylesProps) => ({
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
  }),
});

const Button = ({
  children = "Click me!",
  size = "md",
  variant = "primary",
  ...props
}: Props): JSX.Element => {
  const classes = useStyles({ variant, size });
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
