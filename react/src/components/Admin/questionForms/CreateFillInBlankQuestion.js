import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  FormField,
  FormWrapper,
  InputWrapper,
  PageWrapper,
} from "./QuestionForms.styles";

const CreateFillInBlankQuestion = () => {
  return (
    <PageWrapper>
      <Link to="/admin/create-question">Back</Link>
      <FormWrapper>
        <h2>Add Short Answer Question</h2>
        <h3>Coming Soon</h3>
        {/* <InputWrapper></InputWrapper> */}
        <ButtonWrapper>
          <Button className="button" variant="contained" color="primary">
            Save
          </Button>
          <Button className="button" variant="contained" color="secondary">
            Cancel
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </PageWrapper>
  );
};

export default CreateFillInBlankQuestion;
