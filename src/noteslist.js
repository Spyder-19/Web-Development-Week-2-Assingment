import React from 'react';

const Noteslist = ({ notes, title, handleDelete }) => {
    return (
        <div className="notes-list">
            <h2>{title}</h2>
            {notes.map(note => (
                <div className="note-preview" key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Noteslist;