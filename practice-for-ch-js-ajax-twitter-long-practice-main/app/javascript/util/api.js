const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
    // food: "lots:"
  };
  console.log("before error?")
  return await fetch(url, options);
}

// export const foo = "bar";

export function followUser(id) {
  console.log("follwo user?")
  return customFetch(`/users/${id}/follow`, {
    method: "POST"
    // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  });
}

export function unFollowUser(id) {
  // console.log("follow the trail")
  return customFetch(`/users/${id}/follow`, {
    method: "DELETE"
    
    // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  });
}

