import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícones do FontAwesome

import TextInput from './assets/TextInput';

function App() {
  return (
    <div>
          <TextInput
      startIcon={<FontAwesomeIcon icon={faUser} />}
        placeholder="Nome de Usuário"
      />
      <TextInput
      startIcon={<FontAwesomeIcon icon={faLock} />}
        endIcon={<FontAwesomeIcon icon={faEyeSlash} />}
        type="password"
        placeholder="Senha"
      />
    </div>
  );
}

export default App;
