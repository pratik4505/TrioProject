import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import NoteState from './context/NoteState';
import { router } from './routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode>
    <NoteState>
    <RouterProvider router={router} />
    </NoteState>
 // </React.StrictMode>,
)