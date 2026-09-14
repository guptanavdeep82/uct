const API_ORIGIN =
  typeof window === "undefined"
    ? process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"
    : process.env.NEXT_PUBLIC_API_URL || "";

export function apiUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_ORIGIN}${normalized}`;
}

export async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
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

export async function getJson(path) {
  const response = await fetch(apiUrl(path), {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
