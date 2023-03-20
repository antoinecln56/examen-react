import './App.css';
import { useState, useEffect, useRef } from 'react';
import { login } from '../services/login';
import LoginForm from './LoginForm';
import { getTerms, getColsByTermId, addTerm, deleteTerm, updateTerm } from '../services/TermService';
import Term from './Term';
import Col from './Col'
import Card from './Card';
import AddTermForm from './AddTermForm';
import { addCard, getCardsByTermId } from '../services/CardService';
import CardFormAdd from './CardFormAdd';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [terms, setTerms] = useState([]);
  const [cols, setCols] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedTermId, setSelectedTermId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const inputRef = useRef(null);
  const [showCardFormAdd, setShowCardFormAdd] = useState(false);


  useEffect(() => {
    (async () => {
      const fetched_terms = await getTerms();
      const fetched_cols = await getColsByTermId(selectedTermId);
      const fetched_cards = await getCardsByTermId(selectedTermId);
      setTerms(fetched_terms);
      setCols(fetched_cols);
      setCards(fetched_cards)
    })();

  }, [selectedTermId]);


  const handleTermSelect = (id) => {
    setSelectedTermId(id);
    console.log('Id : ', id);
  }

  // Login
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


  // Ajout Term
  const handleSubmitAddTerm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const new_term = {
      title: inputRef.current.value,
    }
    setTerms([...terms, new_term]);
    inputRef.current.value = null;
    addTerm(new_term);
    setShowForm(false);
  }


  // Suppression Term
  const handleSubmitDeleteTerm = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette thématique ?")) {
      await deleteTerm(id);
      setTerms(terms.filter((term) => term.id !== id));
    }
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
          <ul className="nav nav-tabs  d-flex justify-content-center">
            <button className='btn btn-success' onClick={handleShowForm}>+</button>
            {terms.map((term) => (
              <Term key={term.id} term={term} onClickButton={handleShowForm} onClickTerm={handleTermSelect} onClickDelete={handleSubmitDeleteTerm} />
            ))}
          </ul>
          {showForm && <AddTermForm inputRef={inputRef} onSubmitAddTerm={handleSubmitAddTerm} />}
          <div className='row'>
            {cols.map(col => {
              return <div className='col-lg-3'>
                <Col
                  key={col.id}
                  title={col.title}
                  id={col.id}
                  cols={col}
                  setCards={setCards}
                  cards={cards}
                />
              </div>
            })}
          </div>
          <div className='row'>
            {selectedTermId &&
              cards.filter(card => card.termId === selectedTermId)
                .map(card => {
                  return <div className='col-lg-3' key={card.id}>
                    <Card
                      key={card.id}
                      card={card}
                      question={card.question}
                      answer={card.answer}
                      colId={card.colId} />
                  </div>
                })}
          </div>
        </>
      ) : (

        <LoginForm onSubmitLogin={handleSubmitLogin} loginError={loginError} />


      )}

    </div>
  );
}

export default App;