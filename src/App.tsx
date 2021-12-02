import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import EmailForm, { EmailFormData } from "./components/EmailForm";
import { addEmailToList, getAllEmails, removeEmailFromList } from './firebase/EmailList';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import PageNotFound from "./pages/PageNotFound";


async function onSubmit(data: EmailFormData) {
  console.log('called')
  await addEmailToList(data.fname, data.lname, data.email).then(() => console.log('added')).catch(err => console.error(err));
  await getAllEmails().then((emails) => { console.log(emails); }).catch(err => console.error(err));
  await removeEmailFromList(data.email).then(() => { console.log('removed') }).catch(err => console.error(err))
}

function App() {

  return (
    <div className="App">
      <Navigation />


      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
