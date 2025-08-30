
let request = new Request('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

fetch(request)
  .then(response => response.json())
  .then(data => console.log("Simple Fetch Result:", data))
  .catch(error => console.error('Error:', error));



let controller = new AbortController();

async function fetchWithAbort() {
  try {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      { signal: controller.signal }
    );

    const reader = response.body.getReader();
    let decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      result += decoder.decode(value);
      console.log('Received chunk:', result);

      
      if (result.length > 50) {
        console.log('Aborting fetch...');
        controller.abort();
      }
    }

    console.log('Final result:', result);
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', err);
    }
  }
}

fetchWithAbort();
