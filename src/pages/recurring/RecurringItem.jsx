import { useState, useEffect } from "react";

const STORAGE_KEY = "SPENDLY_RECURRING";

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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Recurring Items
          </h1>
          <p className="text-sm text-gray-500">
            Track household essentials and reorder schedules
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          + Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <div className="mt-12 text-center text-gray-400">
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
                className="bg-white rounded-xl shadow-sm p-4 relative"
              >
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute top-3 right-3 text-gray-300 hover:text-red-500 text-sm"
                >
                  ✕
                </button>

                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {item.current} {item.unit} left · usually {item.usual}
                </p>

                <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${
                      low ? "bg-red-500" : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min(100, ratio * 100)}%`,
                    }}
                  />
                </div>

                {low && (
                  <p className="text-xs text-red-500 font-medium mb-3">
                    Running low — time to reorder
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => updateStock(item.id, -1)}
                    className="flex-1 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    −1
                  </button>
                  <button
                    onClick={() => updateStock(item.id, 1)}
                    className="flex-1 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
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
                    className="flex-1 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
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
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Add Recurring Item
            </h3>

            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Diapers"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Current qty
                </label>
                <input
                  type="number"
                  value={form.current}
                  onChange={(e) =>
                    setForm({ ...form, current: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Usual qty
                </label>
                <input
                  type="number"
                  value={form.usual}
                  onChange={(e) =>
                    setForm({ ...form, usual: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <label className="block text-sm text-gray-600 mb-1">
              Unit (optional)
            </label>
            <input
              type="text"
              value={form.unit}
              onChange={(e) => setForm({ ...form, unit: e.target.value })}
              placeholder="e.g. packs, rolls"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addItem}
                className="flex-1 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
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