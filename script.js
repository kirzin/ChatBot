const apiKey = 'YOUR_KEY';
const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const prompt = document.getElementById('prompt').value;

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ prompt: prompt })
  })
  .then(response => response.json())
  .then(data => {
    const response = data.choices[0].text;
    document.getElementById('response').innerHTML = response;
  })
  .catch(error => {
    console.log(error);
  });
});
