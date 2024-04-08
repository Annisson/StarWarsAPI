

document.getElementById("searchButton").addEventListener("click", function () {
    const characterName = document.getElementById("characterName").value.trim();
    const apiUrl = `https://www.swapi.tech/api/people/?name=${encodeURIComponent(characterName)}`;
  
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
        })
        .then(data => {
        if (data && data.result && data.result.length > 0) {
            const characterData = data.result[0].properties;
            const outputText = `Name: ${characterData.name}\nGender: ${characterData.gender}\nMass: ${characterData.mass}\nHeight: ${characterData.height}\nHaircolor: ${characterData.hair_color}\nEyecolor: ${characterData.eye_color}`;
            document.getElementById("resultOutput").value = outputText;
        } 
        else {
            const characterName = document.getElementById("characterName").value.trim();
            document.getElementById("resultOutput").value = `The character "${characterName}" was not found`;
        }
    })
        .catch(err => {
        console.error('Error:', err);
        document.getElementById("resultOutput").value = 'Error fetching data';
    });
});
