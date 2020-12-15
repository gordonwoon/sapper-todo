export async function fetchAPI(url) {
  try {
    const res = await fetch(url)
    const json = await res.json()

    if (res.ok) {
      return { data: json }
    } else {
      const text = res.text()
      throw new Error(text)
    }
  } catch (error) {
    return { error }
  }
}
