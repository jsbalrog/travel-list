export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list</p>
    );

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({percentage}%) of them.
      </em>
    </footer>
  );
}
