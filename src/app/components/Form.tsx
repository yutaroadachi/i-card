import React from 'react';
import styled from 'styled-components';
import { InputText } from 'ui/Form';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 3rem;
`;

const Form = () => {
  return (
    <FormWrapper>
      <InputText
        placeholder="Technology field"
        width="375px"
        borderRadius="30px"
        margin="0 0 1rem"
      />
      <InputText
        placeholder="Technology stack"
        width="375px"
        borderRadius="30px"
        margin="0 0 1rem"
      />
    </FormWrapper>
  );
};

export default Form;
