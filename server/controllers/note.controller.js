import { Note } from "../models/note.model.js";

export const createNote = async (req, res) => { 
    try {
        const { title, content } = req.body;

   if (typeof title !== 'string' || typeof content !== 'string') {
        return res.status(400).json({ message: "Invalid input type" });
    }
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }
    const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({ message: "Note created successfully", note: newNote });
} catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by newest first
        res.status(200).json({ notes });
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (typeof title !== 'string' || typeof content !== 'string') {
            return res.status(400).json({ message: "Invalid input type" });
        }
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, content },
            { new: true, runValidators: true } // runValidators to ensure updated data is valid new: true to return the updated document
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note updated successfully", note: updatedNote });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
 
export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}