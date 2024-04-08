

document.getElementById("searchButton").addEventListener("click", function () {
    const characterName = document.getElementById("characterName").value.trim();
    const apiUrl = `https://www.swapi.tech/api/people/?name=${encodeURIComponent(characterName)}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.result && data.result.length > 0) {
          const characterData = data.result[0].properties;
          const outputText = `Name: ${characterData.name}\nGender: ${characterData.gender}\nHeight: ${characterData.height}\nHaircolor: ${characterData.hair_color}\nEyecolor: ${characterData.eye_color}`;
          document.getElementById("resultOutput").value = outputText;
        } else {
          document.getElementById("resultOutput").value = "Character not found.";
        }
      })
      .catch(err => {
        console.error('Error:', err);
        document.getElementById("resultOutput").value = 'Error fetching character data.';
      });
  });
