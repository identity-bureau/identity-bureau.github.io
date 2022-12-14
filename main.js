/* Create 'Generate magic link' button that upon click makes an API post request to 'https://realquickapp.stradum-dev.io/api/v1/transactions' and displays the response below button. */
var generateMagicLink = document.createElement('button');
// generateMagicLinkButton.style.backgroundColor = 'blue';
// generateMagicLinkButton.style.color = 'white';
// generateMagicLinkButton.style.fontSize = '20px';
// generateMagicLinkButton.style.padding = '10px';
// generateMagicLinkButton.style.borderRadius = '5px';
// generateMagicLinkButton.style.border = 'none';
// generateMagicLinkButton.style.margin = '10px';
generateMagicLink.innerHTML = 'Generate magic link';
document.body.appendChild(generateMagicLink);
var response = document.createElement('div');
document.body.appendChild(response);
generateMagicLink.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://realquickapp.stradum-dev.io/api/v1/transactions', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      response.innerHTML = xhr.responseText;
    }
  }
  xhr.send(JSON.stringify({
    "amount": "100",
    "currency": "USD",
    "description": "Test transaction",
    "email": "test@test.com"
  }));
});
