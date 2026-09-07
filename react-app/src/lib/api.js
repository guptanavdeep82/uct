const API_URL = import.meta.env.VITE_API_URL || "";

export async function postJson(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const firstError = data.errors ? Object.values(data.errors)[0]?.[0] : null;
    throw new Error(firstError || data.message || "Could not save your details. Please try again.");
  }
  return data;
}
