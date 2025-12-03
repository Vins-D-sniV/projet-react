function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Toutes
      </button>

      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Actives
      </button>

      <button
        onClick={() => setFilter("done")}
        className={filter === "done" ? "active" : ""}
      >
        Terminées
      </button>
    </div>
  );
}

export default FilterBar;
