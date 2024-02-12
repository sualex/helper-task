import { Button, ButtonProps } from "@mui/material";

export const LoginLink = ({ ...props }: ButtonProps) => {
  return (
    <Button href="/login" {...props}>
      Войти
    </Button>
  );
};
