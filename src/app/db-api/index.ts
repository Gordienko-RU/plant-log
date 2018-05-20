let db = null;
const DBOpenRequest = window.indexedDB.open('db');

DBOpenRequest.onupgradeneeded = async (e) => {
  const db = DBOpenRequest.result;

  if (db.objectStoreNames.contains('cardsStore')) {
    db.deleteObjectStore('cardsStore');
  }
  db.createObjectStore("cardsStore", { autoIncrement: true });
  db.create
};

DBOpenRequest.onsuccess = (e) => {
  console.log('connected successfully');
  db = DBOpenRequest.result;
};

DBOpenRequest.onerror = (e) => {
  console.log('error while connecting');
};

export const create = (item) => {
  const store = db.transaction('cardsStore', 'readwrite').objectStore('cardsStore');
  const request = store.add(item);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = e => reject(new Error(e.message));
  });
}

export const read = (id) => {
  const store = db.transaction('cardsStore').objectStore('cardsStore');
  const request = store.get(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = e => reject(new Error(e.message));
  });
}

export const deleteItem = (key) => {
  const store = db.transaction('cardsStore').objectStore('cardsStore');
  const request = store.delete(key);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = e => reject(new Error(e.message));
  });
}

export const update = (item, key) => {
  const store = db.transaction('cardsStore').objectStore('cardsStore');
  const request = store.put(item, key);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = e => reject(new Error(e.message));
  });
}

export const readAll = () => {
  const store = db.transaction('cardsStore').objectStore('cardsStore');
  const request = store.openCursor();
  const records = [];

  return new Promise((resolve, reject) => {
    request.onsuccess = (e) => {
      const cursor = e.target.result;

      if (!cursor) {
        resolve(records);
        return;
      }
      records.push(cursor.value);
      cursor.continue();
    };
    request.onerror = e => reject(new Error(e.message));
  });
}
