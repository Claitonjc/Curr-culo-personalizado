

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Claitonjc/Curriculo-personalizado/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}