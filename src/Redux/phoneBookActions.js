import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('phoneBook/add');
export const deleteContact = createAction('phoneBook/delete');
export const filter = createAction('phoneBook/filter');