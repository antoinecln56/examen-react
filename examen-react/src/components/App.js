import './App.css';
import { useState, useEffect, useRef } from 'react';
import { login } from '../services/login';
import LoginForm from './LoginForm';
import { getTerms, getColsByTermId, addTerm } from '../services/TermService';
import Term from './Term';
import Col from './Col'
import Card from './Card';
import AddTermForm from './AddTermForm';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [terms, setTerms] = useState([]);
  const [cols, setCols] = useState([]);
  const [cards, setCards] = useState([])
  const [selectedTermId, setSelectedTermId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const inputRef = useRef(null);


  useEffect(() => {
    (async () => {
      const fetched_terms = await getTerms();
      const fetched_cols = await getColsByTermId(selectedTermId);
      setTerms([...fetched_terms]);
      setCols([...fetched_cols]);
    })();

  }, [selectedTermId]);

  const handleTermSelect = (id) => {
    setSelectedTermId(id);
  }
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    login(e.target.login.value, e.target.pwd.value)
      .then(() => {
        setLoggedIn(true);
        setLoginError(false);
        console.log("Connexion réussie !");
      })
      .catch(() => {
        e.target.login.value = "";
        e.target.pwd.value = "";
        setLoginError(true);
        console.log("Nom d'utilisateur ou mot de passe incorrect.");
      });
  };

  const handleSubmitAddTerm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    // Création d'une tâche
    const new_term = {
      title: inputRef.current.value,
    }
    // Ajout de la tâche au state tasks
    setTerms([...terms, new_term]);
    // Reset de la value du formulaire
    inputRef.current.value = null;
    addTerm(new_term);
  }

  const handleShowForm = () => {
    setShowForm(true)
  }

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <header>
            <h1 className='text-center'> Memopus </h1>
          </header>
          <ul className="nav nav-tabs">
            <button className='btn btn-success' onClick={handleShowForm}>+</button>
            {terms.map((term) => (
              <Term key={term.id} term={term} onClickButton={handleShowForm} onClickTerm={handleTermSelect} />
            ))}
          </ul>
          {showForm && <AddTermForm inputRef={inputRef} onSubmitAddTerm={handleSubmitAddTerm} />}
          <div className='row'>
            <div className='d-flex justify-content-center'>
              {cols
                .filter((col) => col.termId === selectedTermId)
                .map((col) => (
                  <div >
                    <Col key={col.id} title={col.title} />
                    {cards
                      .filter((card) => card.colId === col.id)
                      .map((card) => <Card key={card.id} card={card} />)}
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (

        <LoginForm onSubmitLogin={handleSubmitLogin} loginError={loginError} />


      )}

    </div>
  );
}

export default App;
