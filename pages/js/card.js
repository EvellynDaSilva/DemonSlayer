export const card = async() => {
    const url = `{https://demon-slayer-api.onrender.com/v1/`
    const response = await fetch(url)
    const card = await response.json()

    return card
}