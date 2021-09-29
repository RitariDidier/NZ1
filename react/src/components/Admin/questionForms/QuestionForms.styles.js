import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const PageWrapper = styled.div`
  margin: 16px;
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled(TextField)`
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;

  #outlined-multiline-flexible-label {
    font-size: 12px;
  }
  .input-field {
    margin-top: 16px;
  }

  .correct-choice {
    margin-top: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .button {
    font-size: 16px;
  }
`;
