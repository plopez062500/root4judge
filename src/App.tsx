import { Box } from "@chakra-ui/react";
import EmailForm, { EmailFormData } from "./components/EmailForm";
import { addEmailToList, getAllEmails, removeEmailFromList } from './firebase/EmailList';
import Navigation from './components/Navigation';
import Home from './pages/Home'


async function onSubmit(data: EmailFormData){
  console.log('called')
  await addEmailToList(data.fname, data.lname, data.email).then(() => console.log('added')).catch(err => console.error(err));
  await getAllEmails().then((emails) => { console.log(emails); }).catch(err => console.error(err));
  await removeEmailFromList(data.email).then(() => {console.log('removed')}).catch(err => console.error(err))
}

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Home/>
    </div>
  );
}

export default App;
