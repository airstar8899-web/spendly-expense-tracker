import { useState, useEffect } from "react";

const STORAGE_KEY = "SPENDLY";

const RecurringItem = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    current: "",
    usual: "",
    unit: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem() {
    const current = parseFloat(form.current);
    const usual = parseFloat(form.usual);
    if (!form.name || !current || !usual) return;

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: form.name,
        current,
        usual,
        unit: form.unit || "units",
      },
    ]);

    setForm({ name: "", current: "", usual: "", unit: "" });
    setShowModal(false);
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateStock(id, delta) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, current: Math.max(0, item.current + delta) }
          : item
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#efece5] p-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-3xl font-extrabold text-[#684C6B]">
            Recurring Items
          </h1>
          <p className="text-sm text-[#6b6b7a]">
            Track household essentials and reorder schedules
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#684C6B] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#57405a] flex items-center gap-2"
        >
          <span className="text-lg">+</span> Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 text-center text-[#6b6b7a] bg-white border border-[#e0dccf] rounded-2xl py-10 px-6 font-medium">
          No recurring items tracked yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {items.map((item) => {
            const ratio = item.current / item.usual;
            const low = ratio <= 0.5;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 relative border border-[#eee6d8]"
              >
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute top-3 right-3 text-[#c9c2d6] hover:text-[#e8746a] text-sm"
                >
                  ×
                </button>

                <h3 className="font-semibold text-[#684C6B]">{item.name}</h3>
                <p className="text-sm text-[#6b6b7a] mb-3">
                  {item.current} {item.unit} left · usually {item.usual}
                </p>

                <div className="w-full bg-[#f0e9dc] rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${
                      low ? "bg-[#e8746a]" : "bg-[#684C6B]"
                    }`}
                    style={{
                      width: `${Math.min(100, ratio * 100)}%`,
                    }}
                  />
                </div>

                {low && (
                  <p className="text-xs text-[#e8746a] font-medium mb-3">
                    Running low — time to reorder
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => updateStock(item.id, -1)}
                    className="flex-1 py-1 rounded-lg border border-[#eee6d8] text-[#6b6b7a] hover:bg-[#f5f0e6]"
                  >
                    −1
                  </button>
                  <button
                    onClick={() => updateStock(item.id, 1)}
                    className="flex-1 py-1 rounded-lg border border-[#eee6d8] text-[#6b6b7a] hover:bg-[#f5f0e6]"
                  >
                    +1
                  </button>
                  <button
                    onClick={() =>
                      setItems((prev) =>
                        prev.map((it) =>
                          it.id === item.id
                            ? { ...it, current: it.usual }
                            : it
                        )
                      )
                    }
                    className="flex-1 py-1 rounded-lg bg-[#f0e9dc] text-[#684C6B] hover:bg-[#e8e0d0]"
                  >
                    Restock
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-11/12 max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#684C6B]">
              Add Recurring Item
            </h3>

            <label className="block text-sm text-[#6b6b7a] mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Diapers"
              className="w-full border border-[#eee6d8] rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#684C6B]"
            />

            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-sm text-[#6b6b7a] mb-1">
                  Current qty
                </label>
                <input
                  type="number"
                  value={form.current}
                  onChange={(e) =>
                    setForm({ ...form, current: e.target.value })
                  }
                  className="w-full border border-[#eee6d8] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#684C6B]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-[#6b6b7a] mb-1">
                  Usual qty
                </label>
                <input
                  type="number"
                  value={form.usual}
                  onChange={(e) =>
                    setForm({ ...form, usual: e.target.value })
                  }
                  className="w-full border border-[#eee6d8] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#684C6B]"
                />
              </div>
            </div>

            <label className="block text-sm text-[#6b6b7a] mb-1">
              Unit (optional)
            </label>
            <input
              type="text"
              value={form.unit}
              onChange={(e) => setForm({ ...form, unit: e.target.value })}
              placeholder="e.g. packs, rolls"
              className="w-full border border-[#eee6d8] rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#684C6B]"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-[#eee6d8] text-[#6b6b7a] hover:bg-[#f5f0e6]"
              >
                Cancel
              </button>
              <button
                onClick={addItem}
                className="flex-1 py-2 rounded-lg bg-[#684C6B] text-white hover:bg-[#57405a]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurringItem;