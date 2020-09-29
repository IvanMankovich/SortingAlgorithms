import React, { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Main/Modal';

const App = React.memo(props => {
    const [isModalOpen, setModalOpen] = useState('closed'),
          [modalText, setModalText] = useState('');

    const handleShowModal = (text = 'Unknown message.') => {
        if (isModalOpen === 'closed') {
            setModalText(text);
            setModalOpen('open');
        } else {
            setModalOpen('closed');
            setModalText('');
        }
    };

    return (
        <React.Fragment>
            <Header />
            <Main handleShowModal={handleShowModal}/>
            <Footer />
            {isModalOpen === 'open' ? <Modal handleShowModal={handleShowModal} modalText={modalText}/> : null}
        </React.Fragment>
    )
});

export default App;