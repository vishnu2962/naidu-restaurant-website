import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CrudDemo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = text;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, text]);
    }

    setText("");
  };

  const handleEdit = (index) => {
    setText(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  };

  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: "120px" }}>
        <h1>CRUD Demo</h1>
        <p>Add, edit and delete items.</p>

        <div className="crud-container">
          <div className="crud-input">
            <input
              type="text"
              placeholder="Enter item..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddOrUpdate}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>

          <div className="crud-list">
            {items.length === 0 && <p>No items added yet</p>}

            {items.map((item, index) => (
              <div key={index} className="crud-item">
                <span>{item}</span>
                <div className="crud-actions">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
