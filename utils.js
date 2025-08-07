export function setUserToLocal(name, role) {
  localStorage.setItem('user', JSON.stringify({ name, role }));
}

export function getUserFromLocal() {
  return JSON.parse(localStorage.getItem('user')) || {};
}