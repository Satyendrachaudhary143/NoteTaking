import { useContext, useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { NoteContext } from "./context/Contex";
import { toast } from "react-toastify";

const NoteCard = ({ note }) => {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = async () => {
    try {
      await updateNote(note._id, editData);
      toast.success("Note updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update note.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNote(note._id);
      toast.success("Note deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete note.");
    }
  };

  // Format timestamps
 const createdDate = new Date(note.createdAt).toLocaleDateString("en-IN");
const updatedDate = new Date(note.updatedAt).toLocaleDateString("en-IN");

  return (
    <div className="bg-gray-700 text-white p-4 rounded shadow hover:shadow-lg transition duration-200 relative">
      <div className="absolute top-2 right-2 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="text-green-400 hover:text-green-600"
              title="Save"
            >
              <FaSave size={18} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-yellow-400 hover:text-yellow-600"
              title="Cancel"
            >
              <FaTimes size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:text-blue-600"
              title="Edit"
            >
              <FaEdit size={18} />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-400 hover:text-red-600"
              title="Delete"
            >
              <FaTrash size={18} />
            </button>
          </>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-2 mt-6">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
          />
          <textarea
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Content"
          />
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
          <p className="text-gray-300 mb-4">{note.content}</p>
          <div className="text-sm text-gray-400 mt-auto pt-2  absolute bottom-0.5">
            <p>Created: {createdDate}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default NoteCard;