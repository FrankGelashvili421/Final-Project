import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    users: [
        {
            name: 'test',
            surname: 'user'
        }
    ]
  };

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUsers: (state, action) => {
        state.users.push(action.payload);
      },
    }
})


export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;