import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './components/screens/LangingPage/LandingPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import MyNotes from "./components/screens/MyNotes/MyNotes"
import LoginScreen from "./components/screens/LoginScreen/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen"
import CreateNote from "./components/screens/CreateNote/CreateNote"
import SingleNote from "./components/screens/SingleNote/SingleNote"
import ProfileScreen from "./components/screens/ProfileScreen/ProfileScreen"
import { useState } from 'react'

function App() {

  const [search,setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/profile" element={<ProfileScreen />} exact />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
