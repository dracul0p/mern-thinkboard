import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-content/10 border-t-4 border-solid border-[#00FF9D]">
      <div className="card-body">
        {/* Title */}
        <Link to={`/note/${note._id}`}>
          <h2 className="card-title text-lg font-bold hover:text-primary transition">
            {note.title}
          </h2>
        </Link>

        {/* Content */}
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4">
          {/* Date */}
          <span className="text-xs text-base-content/50">
            {new Date(note.createdAt).toLocaleDateString()}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to={`/note/${note._id}`}
              className="p-2 rounded-lg hover:bg-base-300 transition"
            >
              <PenSquareIcon className="size-4 text-primary" />
            </Link>

            <button className="p-2 rounded-lg hover:bg-red-500/10 transition">
              <Trash2Icon className="size-4 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
