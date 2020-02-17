import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Store } from 'store';
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
  const [technologyFieldForm, setTechnologyFieldForm] = useState('');
  const [technologyStackForm, setTechnologyStackForm] = useState('');

  const handleTechnologyFieldForm = (e: any) => {
    setTechnologyFieldForm(e.target.value);
  };
  const handleTechnologyStackForm = (e: any) => {
    setTechnologyStackForm(e.target.value);
  };

  const { dispatch } = useContext(Store);

  const clickSaveButton = () => {
    dispatch.profile({
      type: 'SAVE',
      state: {
        technologyField: technologyFieldForm,
        technologyStack: technologyStackForm,
      },
    });
  };
  const clickDeleteButton = () => {
    dispatch.profile({
      type: 'DELETE',
      state: {
        technologyField: '',
        technologyStack: '',
      },
    });

    setTechnologyFieldForm('');
    setTechnologyStackForm('');
  };

  return (
    <FormWrapper>
      <InputText
        placeholder="Technology field"
        width="375px"
        borderRadius="30px"
        margin="0 0 1rem"
        value={technologyFieldForm}
        onChange={handleTechnologyFieldForm}
      />
      <InputText
        placeholder="Technology stack"
        width="375px"
        borderRadius="30px"
        margin="0 0 1rem"
        value={technologyStackForm}
        onChange={handleTechnologyStackForm}
      />
      <Button
        width="375px"
        borderRadius="30px"
        color="darkgreen"
        margin="0 0 1rem"
        onClick={clickSaveButton}
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
        onClick={clickDeleteButton}
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
