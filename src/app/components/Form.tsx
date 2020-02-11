import React from 'react';
import styled from 'styled-components';
import { InputText } from 'ui/Form';
import { Button } from 'ui/Button';
import MaterialIcons from 'ui/MaterialIcons';

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
      <Button
        width="375px"
        borderRadius="30px"
        color="darkgreen"
        margin="0 0 1rem"
      >
        <MaterialIcons
          color="darkgreen"
          fontSize="1rem"
          lineHeight="1.2rem"
          margin="0 10px 0"
        >
          save_alt
        </MaterialIcons>
        Save
      </Button>
      <Button
        width="375px"
        borderRadius="30px"
        color="darkred"
        margin="0 0 1rem"
      >
        <MaterialIcons
          color="darkred"
          fontSize="1rem"
          lineHeight="1.2rem"
          margin="0 10px 0"
        >
          delete
        </MaterialIcons>
        Delete
      </Button>
    </FormWrapper>
  );
};

export default Form;
