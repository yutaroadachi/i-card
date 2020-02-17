export type ProfileState = {
  technologyField: string;
  technologyStack: string;
};

export type ProfileAction = {
  type: 'SAVE' | 'DELETE';
  state: ProfileState;
};

export const initialProfileState: ProfileState = {
  technologyField: 'Engineer',
  technologyStack: 'Hello World!',
};

export const profileReducer = (
  oldState: ProfileState,
  action: ProfileAction,
) => {
  switch (action.type) {
    case 'SAVE':
      return action.state;
    case 'DELETE':
      return initialProfileState;
    default:
      throw new TypeError(`Illegal type of action: ${action.type}`);
  }
};
