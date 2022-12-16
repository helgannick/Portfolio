async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}