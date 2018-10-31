import Firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

Firebase.initializeApp(config);

export const $auth = Firebase.auth();

const $db = Firebase.firestore();
$db.settings({ timestampsInSnapshots: true });

export const $usersCollection = $db.collection('users');
export const $teamsCollection = $db.collection('teams');
export const $projectsCollection = $db.collection('projects');
export const $tasksCollection = $db.collection('tasks');
export const $relationsCollection = $db.collection('relations');
