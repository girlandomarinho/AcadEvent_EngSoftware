import { useState, useEffect } from "react";
import {
  MdMenu,
  MdHome,
  MdEvent,
  MdManageAccounts,
  MdAssignment,
  MdDashboard,
  MdLogout,
  MdAccountCircle, /* Ícone para Cadastro/Login */
  MdLightbulbOutline, /* Ícone para Inovação */
  MdSecurity, /* Ícone para Segurança */
  MdPeople, /* Ícone para Colaboração */
  MdCheckCircleOutline, /* Ícone para Sucesso */
} from "react-icons/md"; // Importando ícones

// Componente para a página de Login/Registro
function AuthPage({ setPage, handleLogin, handleRegister, feedbackMessage, feedbackType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    handleRegister(regEmail, regPassword);
  };

  return (
    <div className="container">
      <div className="auth-card" role="main">
        {feedbackMessage && (
          <div className={`feedback-message ${feedbackType}`}>
            {feedbackMessage}
          </div>
        )}
        {authMode === "login" && (
          <>
            <h2>Entrar</h2>
            <form onSubmit={handleSubmitLogin} noValidate>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button type="submit">Entrar</button>
            </form>

            <div className="footer-links">
              <button
                className="btn-link"
                onClick={() => setPage("forgot")}
                aria-label="Ir para página Esqueci a senha"
              >
                Esqueci a senha
              </button>
              <button
                className="btn-link"
                onClick={() => setAuthMode("register")}
                aria-label="Ir para página Cadastrar"
              >
                Cadastrar
              </button>
            </div>
          </>
        )}

        {authMode === "register" && (
          <>
            <h2>Cadastrar</h2>
            <form onSubmit={handleSubmitRegister} noValidate>
              <input
                type="email"
                placeholder="Email"
                required
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Senha"
                required
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button type="submit">Cadastrar</button>
            </form>
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <button
                className="btn-link"
                onClick={() => setAuthMode("login")}
                aria-label="Voltar para a página de login"
              >
                Voltar ao login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Componente da Página Inicial (MODIFICADA)
function HomePage() {
  return (
    <div className="page-content">
      <section className="home-intro">
        <h1>Bem-vindo ao AcadEvent!</h1>
        <p>
          Sua plataforma definitiva para organizar, participar e gerenciar eventos acadêmicos com facilidade e eficiência.
          Do planejamento à emissão de certificados, o AcadEvent simplifica todo o processo.
        </p>
      </section>

      <section className="home-section">
        <h2>O Que Oferecemos?</h2>
        <div className="home-features-grid">
          <div className="feature-card">
            <MdEvent className="icon" />
            <h3>Gerenciamento de Eventos</h3>
            <p>Cadastre, edite e organize todos os detalhes dos seus eventos acadêmicos, desde palestras a workshops.</p>
          </div>
          <div className="feature-card">
            <MdPeople className="icon" />
            <h3>Controle de Participantes</h3>
            <p>Gerencie inscrições, presenças e informações dos participantes de forma intuitiva e eficiente.</p>
          </div>
          <div className="feature-card">
            <MdAssignment className="icon" />
            <h3>Emissão de Certificados</h3>
            <p>Gere e distribua certificados personalizados para todos os participantes de forma automática e segura.</p>
          </div>
          <div className="feature-card">
            <MdDashboard className="icon" />
            <h3>Status em Tempo Real</h3>
            <p>Acompanhe métricas e o status geral dos seus eventos com dashboards claros e objetivos.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Por Que Escolher o AcadEvent?</h2>
        <div className="home-features-grid">
          <div className="feature-card">
            <MdCheckCircleOutline className="icon" />
            <h3>Simplicidade</h3>
            <p>Uma interface limpa e intuitiva que facilita a navegação e o uso para organizadores e participantes.</p>
          </div>
          <div className="feature-card">
            <MdLightbulbOutline className="icon" />
            <h3>Inovação</h3>
            <p>Funcionalidades pensadas para otimizar seu tempo e garantir o sucesso de cada evento.</p>
          </div>
          <div className="feature-card">
            <MdSecurity className="icon" />
            <h3>Segurança</h3>
            <p>Proteção dos seus dados e informações dos seus eventos com os mais altos padrões de segurança.</p>
          </div>
          <div className="feature-card">
            <MdAccountCircle className="icon" />
            <h3>Suporte Dedicado</h3>
            <p>Nossa equipe está pronta para te ajudar em cada etapa, garantindo uma experiência sem preocupações.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


// Componente da Página de Cadastro de Eventos
function EventRegistrationPage({ onAddEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [feedback, setFeedback] = useState({ message: '', type: '' });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventTime || !eventLocation) {
      setFeedback({ message: "Por favor, preencha todos os campos obrigatórios (Nome, Data, Hora, Local).", type: "error" });
      return;
    }

    const newEvent = {
      id: Date.now(), // Simples ID baseado no timestamp
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      description: eventDescription,
      participants: Math.floor(Math.random() * 50) + 5, // Simula 5 a 54 participantes
    };
    onAddEvent(newEvent);
    setFeedback({ message: `Evento "${eventName}" cadastrado com sucesso!`, type: "success" });
    // Limpar formulário
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
  };

  return (
    <div className="page-content">
      <h1>Cadastro de Eventos</h1>
      {feedback.message && (
        <div className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Evento"
          required
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          required
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Hora"
          required
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Local"
          required
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <textarea
          placeholder="Descrição (opcional)"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          rows="4" // Aumenta o tamanho da área de texto
        ></textarea>
        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}

// Componente da Página de Gerenciamento de Eventos
function EventManagementPage({ events, onDeleteEvent, onEditEvent }) {
  const [editingEvent, setEditingEvent] = useState(null); // null or event object
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleEditClick = (event) => {
    setEditingEvent({ ...event }); // Create a copy to avoid direct state mutation
    setFeedback({ message: '', type: '' }); // Clear feedback when starting edit
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingEvent.name || !editingEvent.date || !editingEvent.time || !editingEvent.location) {
      setFeedback({ message: "Por favor, preencha todos os campos obrigatórios (Nome, Data, Hora, Local) para editar.", type: "error" });
      return;
    }
    onEditEvent(editingEvent);
    setEditingEvent(null); // Exit editing mode
    setFeedback({ message: `Evento "${editingEvent.name}" atualizado com sucesso!`, type: "success" });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Tem certeza que deseja excluir o evento "${name}"?`)) {
      onDeleteEvent(id);
      setFeedback({ message: `Evento "${name}" excluído com sucesso!`, type: "success" });
    }
  };


  return (
    <div className="page-content">
      <h1>Gerenciamento de Eventos</h1>
      {feedback.message && (
        <div className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
      {events.length === 0 ? (
        <p className="message">Nenhum evento cadastrado ainda.</p>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              {editingEvent && editingEvent.id === event.id ? (
                // Edit form for the specific event
                <form onSubmit={handleSaveEdit}>
                  <input
                    type="text"
                    value={editingEvent.name}
                    onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                    required
                  />
                  <input
                    type="date"
                    value={editingEvent.date}
                    onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                    required
                  />
                  <input
                    type="time"
                    value={editingEvent.time}
                    onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    value={editingEvent.location}
                    onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
                    required
                  />
                   <textarea
                    placeholder="Descrição (opcional)"
                    value={editingEvent.description || ''} // Ensure it's not undefined
                    onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                    rows="3"
                  ></textarea>
                  <div className="actions">
                    <button type="submit">Salvar</button>
                    <button type="button" className="btn-link" onClick={() => setEditingEvent(null)}>Cancelar</button>
                  </div>
                </form>
              ) : (
                // Display mode
                <>
                  <h4>{event.name}</h4>
                  <p>
                    **Data:** {event.date} **Hora:** {event.time}
                  </p>
                  <p>**Local:** {event.location}</p>
                  {event.description && <p>**Descrição:** {event.description}</p>}
                  <p>**Participantes:** {event.participants}</p>
                  <div className="actions">
                    <button className="edit-btn" onClick={() => handleEditClick(event)}>
                      Editar
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(event.id, event.name)}>
                      Excluir
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Componente da Página de Certificados
function CertificatesPage({ events }) {
  // Simula certificados para cada evento. Em um sistema real, seria por participante.
  // Criamos um certificado "fake" para cada evento, como se um participante genérico o tivesse recebido.
  const allCertificates = events.map(event => ({
    id: `cert-${event.id}`,
    eventName: event.name,
    participantName: "Participante Exemplo", // Placeholder para o nome do participante
    dateIssued: new Date().toLocaleDateString('pt-BR'), // Formato de data em português
  }));

  return (
    <div className="page-content">
      <h1>Certificados</h1>
      {allCertificates.length === 0 ? (
        <p className="message">Nenhum certificado disponível ainda. Cadastre eventos para gerar certificados simulados.</p>
      ) : (
        <div className="certificates-grid">
          {allCertificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <h4>{cert.eventName}</h4>
              <p>Para: {cert.participantName}</p>
              <p>Emitido em: {cert.dateIssued}</p>
              <button className="btn-view" onClick={() => alert(`Visualizando certificado para "${cert.participantName}" no evento "${cert.eventName}"`)}>Visualizar Certificado</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Componente da Página de Status da Oficina/Curso
function StatusPage({ events }) {
  const totalEvents = events.length;
  const totalParticipants = events.reduce((sum, event) => sum + event.participants, 0);

  return (
    <div className="page-content">
      <h1>Status Geral</h1>
      <div className="status-info">
        <div className="status-item">
          <h4>Total de Eventos Cadastrados</h4>
          <p>{totalEvents}</p>
        </div>
        <div className="status-item">
          <h4>Total de Participantes (Estimado)</h4>
          <p>{totalParticipants}</p>
        </div>
        <p className="message">
          *Os dados de participantes são simulados para fins de demonstração. Em um sistema real, essa contagem seria mais precisa.
        </p>
      </div>
    </div>
  );
}

// Componente principal da aplicação
export default function App() {
  // Estado para o tema claro/escuro, com persistência no localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  // Estado para o status de login, com persistência no localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });

  // Estado para a página atual, default para 'login' se não estiver logado
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true") {
      return "home"; // Se já está logado, vai para a home
    }
    return "login"; // Caso contrário, vai para a tela de login
  });


  // Estado para controlar a abertura/fechamento do menu lateral
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Estado para armazenar os eventos, com persistência no localStorage (fake backend)
  const [events, setEvents] = useState(() => {
    if (typeof window !== "undefined") {
      const storedEvents = localStorage.getItem("acadevent_events");
      return storedEvents ? JSON.parse(storedEvents) : [];
    }
    return [];
  });

  // Estado para mensagens de feedback global (login/registro)
  const [globalFeedback, setGlobalFeedback] = useState({ message: '', type: '' });

  // Efeito para aplicar o tema ao HTML e salvar no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efeito para salvar o status de login no localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  // Efeito para salvar os eventos no localStorage
  useEffect(() => {
    localStorage.setItem("acadevent_events", JSON.stringify(events));
  }, [events]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Função para simular o login
  const handleLogin = (email, password) => {
    //credenciais de teste
    if (email === "girlando@gmail.com" && password === "12345") {
      setIsLoggedIn(true);
      setCurrentPage("home");
      setGlobalFeedback({ message: "Login efetuado com sucesso!", type: "success" });
    } else {
      setGlobalFeedback({ message: "Email ou senha incorretos.", type: "error" });
    }
  };

  const handleRegister = (email, password) => {
    if (email && password) {
      setGlobalFeedback({ message: `Usuário "${email}" registrado com sucesso! Você pode agora logar.`, type: "success" });
      setCurrentPage("login");
    } else {
      setGlobalFeedback({ message: "Por favor, preencha todos os campos para registrar.", type: "error" });
    }
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
    setGlobalFeedback({ message: "Você foi desconectado.", type: "success" });
  };


  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const editEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };


  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "register_event":
        return <EventRegistrationPage onAddEvent={addEvent} />;
      case "manage_events":
        return (
          <EventManagementPage
            events={events}
            onDeleteEvent={deleteEvent}
            onEditEvent={editEvent}
          />
        );
      case "certificates":
        return <CertificatesPage events={events} />;
      case "status":
        return <StatusPage events={events} />;
      case "forgot":
        return (
          <div className="container">
            <div className="auth-card">
              <h2>Esqueci a senha</h2>
              <p className="message">
                Um link para redefinir sua senha foi enviado para o seu email.
                (Esta é uma funcionalidade simulada).
              </p>
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn-link"
                  onClick={() => { setCurrentPage("login"); setGlobalFeedback({ message: '', type: '' });}}
                  aria-label="Voltar para a página de login"
                >
                  Voltar ao login
                </button>
              </div>
            </div>
          </div>
        );
      case "login":
      case "register":
      default:
        return (
          <AuthPage
            setPage={setCurrentPage}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            feedbackMessage={globalFeedback.message}
            feedbackType={globalFeedback.type}
          />
        );
    }
  };

  return (
    <>
      {/* Botão de alternar tema */}
      <button
        className="toggle-theme-btn"
        onClick={toggleTheme}
        aria-label="Alternar tema claro e escuro"
        title="Alternar tema claro e escuro"
      >
        {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      {!isLoggedIn ? (
        renderPage()
      ) : (

        <div className="app-layout">
          <button
            className="sidebar-toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
            title={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
          >
            <MdMenu />
          </button>

          <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <h3>AcadEvent</h3>
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("home");
                      setIsSidebarOpen(false);
                      setGlobalFeedback({ message: '', type: '' });
                    }}
                    className={currentPage === "home" ? "active" : ""}
                  >
                    <MdHome /> Página Inicial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("status");
                      setIsSidebarOpen(false);
                      setGlobalFeedback({ message: '', type: '' });
                    }}
                    className={currentPage === "status" ? "active" : ""}
                  >
                    <MdDashboard /> Status Geral
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("register_event");
                      setIsSidebarOpen(false);
                      setGlobalFeedback({ message: '', type: '' });
                    }}
                    className={currentPage === "register_event" ? "active" : ""}
                  >
                    <MdEvent /> Cadastrar Evento
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("manage_events");
                      setIsSidebarOpen(false);
                      setGlobalFeedback({ message: '', type: '' });
                    }}
                    className={currentPage === "manage_events" ? "active" : ""}
                  >
                    <MdManageAccounts /> Gerenciar Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("certificates");
                      setIsSidebarOpen(false);
                      setGlobalFeedback({ message: '', type: '' });
                    }}
                    className={currentPage === "certificates" ? "active" : ""}
                  >
                    <MdAssignment /> Certificados
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLogout}
                    aria-label="Sair da conta"
                  >
                    <MdLogout /> Sair
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className={`main-content`}>

            <header className="header">
              <div className="header-left">

                <span className="header-title">AcadEvent</span>
              </div>
              <div className="header-right">
              </div>
            </header>
            {/* Renderiza o conteúdo da página selecionada no menu */}
            {renderPage()}
          </main>
        </div>
      )}
    </>
  );
}