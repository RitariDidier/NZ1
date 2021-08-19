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

const CreateMCQQuestion = () => {
  return (
    <PageWrapper>
      <Link to="/admin/create-question">Back</Link>
      <FormWrapper>
        <h2>Add MCQ Challenge Question</h2>
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
              label="Question Description"
              multiline
              rows={6}
              variant="outlined"
            />
          </div>

          <div className="input-field correct-choice">
            <FormField
              id="outlined-multiline-flexible"
              className="correct-choice"
              label="Correct Choice"
              multiline
              maxRows={4}
              variant="outlined"
            />
          </div>

          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Choice #1"
              multiline
              maxRows={4}
              variant="outlined"
            />
          </div>

          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Choice #2 (Optional)"
              multiline
              maxRows={4}
              variant="outlined"
            />
          </div>

          <div className="input-field">
            <FormField
              id="outlined-multiline-flexible"
              label="Choice #3 (Optional)"
              multiline
              maxRows={4}
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

export default CreateMCQQuestion;
