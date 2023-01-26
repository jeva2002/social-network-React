import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactData } from '../../model/types';

interface InitialValues {
  contactData: (ContactData | undefined)[] | undefined;
}

const initialValues: InitialValues = {
  contactData: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValues,
  reducers: {
    setContacts: (
      state,
      action: PayloadAction<(ContactData | undefined)[] | undefined>
    ) => {
      state.contactData = action.payload;
    },
  },
});

export const getAllContacts = (state: any) => state.contacts.contactData;

export const { setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
