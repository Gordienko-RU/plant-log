import { dbSchema } from '../components/workarea/new-card-form/fields-source';

let db = null;
const DBOpenRequest = window.indexedDB.open('db', 6);

DBOpenRequest.onupgradeneeded = (e) => {
  const db = DBOpenRequest.result;

  if (db.objectStoreNames.contains('cardsStore')) {
    db.deleteObjectStore('cardsStore');
  }
  const objectStore = db.createObjectStore("cardsStore", { keyPath: 'title' });
  const keys = Object.keys(dbSchema);

  keys.forEach((key) => {
    const { name, keyPath, options } = dbSchema[key];
    objectStore.createIndex(name, keyPath, options);
  })
};

const connect = new Promise((resolve, reject) => {
  DBOpenRequest.onsuccess = (e) => {
    console.log('connected successfully');
    db = DBOpenRequest.result;
    resolve();
  }

  DBOpenRequest.onerror = (e) => {
    reject(new Error('error while connecting'));
  };
});

export const checkConnection = () => {
  if (!db) {
    return connect;
  }
}

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

export const deleteItem = (title) => {
  const store = db.transaction('cardsStore', 'readwrite').objectStore('cardsStore');
  const request = store.delete(title);

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
