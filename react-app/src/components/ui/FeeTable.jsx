export default function FeeTable({ title, rows }) {
  return (
    <div data-animate="fade-up">
      {title && <h3 style={{ marginBottom: "1rem" }}>{title}</h3>}
      <div className="fee-table-wrap">
        <table className="fee-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item}>
                <td>
                  <strong>{row.item}</strong>
                </td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
