import db from './Firebase';
import { EMAILS } from './Collections';
import { collection, addDoc, deleteDoc, getDocs, where, query, DocumentReference, DocumentSnapshot } from '@firebase/firestore';

export function addEmailToList(fname: string, lname: string, email: string): Promise<DocumentReference> {
  //TODO possibly check for duplicate emails
  if (!isValidEmail(email))
    return Promise.reject('Invalid email address');

  return addDoc(collection(db, EMAILS), {
    fname: fname,
    lname: lname,
    email: email
  });
}

export function removeEmailFromList(email: string): Promise<boolean> {
  //TODO if we prevent duplicates this function can be simplified
  return new Promise((resolve, reject) => {
    getEmailDocumentSnapshots(email).then((docSnapshots) => {

      docSnapshots.forEach(docSnapshot => {
        deleteDoc(docSnapshot.ref).catch(err => reject(err));
      });

      resolve(true);

    }).catch(err => reject(err));
  });
}

export function getAllEmails(): Promise<Array<string>> {
  return new Promise<Array<string>>((resolve, reject) => {
    const emails = Array<string>();

    getEmailDocumentSnapshots().then((docs) => {

      docs.forEach(doc => {
        const docData = doc.data() as EmailDocument
        emails.push(docData.email);
      });

      resolve(emails);

    }).catch(err => reject(err));
  });
}

function isValidEmail(email: string): boolean {
  const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regexp.test(email);
}

function getEmailDocumentSnapshots(email?: string): Promise<Array<DocumentSnapshot>> {
  return new Promise((resolve, reject) => {
    const docs = Array<DocumentSnapshot>();
    let q = null;

    if (email) {
      q = query(collection(db, EMAILS), where('email', '==', email));
    }

    getDocs(q ? q : collection(db, EMAILS)).then((qs) => {
      qs.forEach(doc => {
        docs.push(doc);
      });
    }).catch(err => reject(err));

    resolve(docs);
  });
}

export type EmailDocument = {
  fname: string,
  lname: string,
  email: string,
}