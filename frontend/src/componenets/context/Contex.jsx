import { createContext, use, useEffect, useState } from "react";
import baseURL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    // get all notes
    const getNotes = async () => {
        setLoading(true);
        try {
            const res = await baseURL.get("get-notes");
            setNotes(res.data.notes);
            
        } catch (error) {
            console.log("Error fetching notes:", error);
            
        } finally {
            setLoading(false);
        }
    }
    
    
    // create note 
    const createNote = async (note) => {
        try {
            const response = await baseURL.post("create-note", note);
            setNotes([...notes, response.data.note]);
        } catch (error) {
            console.log("Error creating note:", error);
            
        }
    }
    
    // update Note 
    const updateNote = async (id, note) => {
        try {
            const response = await baseURL.put(`update-note/${id}`, note);
            const updatedNotes = notes.map((n) => (n._id === id ? response.data.note : n));
            setNotes(updatedNotes);
        } catch (error) {
            console.log("Error updating note ", error);
            
        }
    }
    
    // delete Note 
    const deleteNote = async (id) => {
        try {
            const response = await baseURL.delete(`delete-note/${id}`);
            const filteredNotes = notes.filter((n) => n._id !== id);
            setNotes(filteredNotes);
            
        } catch (error) {
            console.log("Error deleting note ", error);
        }
     }
    useEffect(() => { 
                getNotes();
            }, []);

    return (
        <NoteContext.Provider value={{
            notes,
            loading,
            createNote,
            updateNote,
            deleteNote,
        }}>
            {children}
        </NoteContext.Provider>
    )
}