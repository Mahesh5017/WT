window.runSimpleFetch = function() {
  let request = new Request('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  fetch(request)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById('log').textContent += "\nSimple Fetch Result: " + JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('log').textContent += "\nError: " + error;
    });
};

let controller = new AbortController();

window.fetchWithAbort = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal: controller.signal });

    const reader = response.body.getReader();
    let decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value);
      console.log('Received chunk:', result);
      document.getElementById('log').textContent += "\nReceived chunk: " + result;

      if (result.length > 50) {
        console.log('Aborting fetch...');
        document.getElementById('log').textContent += "\nAborting fetch...";
        controller.abort();
      }
    }

    console.log('Final result:', result);
    document.getElementById('log').textContent += "\nFinal result: " + result;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
      document.getElementById('log').textContent += "\nFetch aborted";
    } else {
      console.error('Fetch error:', err);
      document.getElementById('log').textContent += "\nFetch error: " + err;
    }
  }
};
