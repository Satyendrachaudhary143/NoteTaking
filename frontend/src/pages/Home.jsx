import { useContext } from "react";
import { NoteContext } from "../componenets/context/Contex";
import NoteCard from "../componenets/NoteCard";

function Home() {
  const { notes, loading } = useContext(NoteContext);
  console.log("Fetched notes:", notes);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">No notes available</p>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))
     }
    </div>
  );
}

export default Home;  