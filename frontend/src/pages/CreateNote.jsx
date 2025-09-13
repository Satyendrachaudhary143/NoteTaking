import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { NoteContext } from "../componenets/context/Contex";

const CreateNote = () => {
  const { createNote } = useContext(NoteContext);
  const [noteData, setNoteData] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noteData.title || !noteData.content) {
      toast.error("Both fields are required");
      return;
    }
    try {
      await createNote(noteData);
      toast.success("Note created successfully!");
      setNoteData({ title: "", content: "" }); // Reset form
    } catch (error) {
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Create Note</h2>

        <input
          type="text"
          placeholder="Title"
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Content"
          value={noteData.content}
          onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
          rows={5}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNote;