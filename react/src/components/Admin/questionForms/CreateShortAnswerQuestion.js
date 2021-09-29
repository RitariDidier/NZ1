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

const CreateShortAnswerQuestion = () => {
  return (
    <PageWrapper>
      <Link to="/admin/create-question">Back</Link>
      <FormWrapper>
        <h2>Add Short Answer Question</h2>
        <InputWrapper>
          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Question Title"
              multiline
              maxRows={4}
              variant="outlined"
            />
          </div>
          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Question Category"
              multiline
              maxRows={4}
              variant="outlined"
            />
          </div>

          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Question displayed to Inspector"
              multiline
              rows={6}
              variant="outlined"
            />
          </div>

          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Desired answer (for marking)"
              multiline
              rows={6}
              variant="outlined"
            />
          </div>
        </InputWrapper>
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

export default CreateShortAnswerQuestion;
