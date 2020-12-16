import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SigninElements";

function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">CoSpaces</Icon>

        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your Account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">SignIn</FormButton>
            <Text>Forgot password?</Text>
          </Form>
          <Icon to="/Dashboard">Dashboard</Icon>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
