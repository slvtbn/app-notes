import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../components/organisms/MainPage';
import NotesPage from '../components/organisms/NotesPage';
import PageAdmin from '../components/organisms/PageAdmin';
import Account from '../pages/Account/account';
import AddNotes from '../pages/Notes/create';
import EditNotes from '../pages/Notes/edit';
import Notes from '../pages/Notes/notes';
import AllNotes from '../pages/admin/all-notes';
import Users from '../pages/admin/users';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Register from '../pages/register';
import { AdminPrivateRoute, ClientPrivateRoute } from './privateRoutes';

export default function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ClientPrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="/notes" element={<NotesPage />}>
            <Route index element={<Notes />} />
            <Route path="/notes/add" element={<AddNotes />} />
            <Route path="/notes/edit" element={<EditNotes />} />
          </Route>
          <Route path="/account" element={<Account />} />
        </Route>
      </Route>

      <Route element={<AdminPrivateRoute />}>
        <Route path="/admin" element={<PageAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/notes" element={<NotesPage />}>
            <Route index element={<Notes />} />
            <Route path="/admin/notes/add" element={<AddNotes />} />
            <Route path="/admin/notes/edit" element={<EditNotes />} />
          </Route>
          <Route path="/admin/account" element={<Account />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/all-users-notes" element={<AllNotes />} />
        </Route>
      </Route>
    </Routes>
  );
}
