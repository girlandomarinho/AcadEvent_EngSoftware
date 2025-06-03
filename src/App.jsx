import { useState, useEffect } from "react";

export default function App() {
  // Tema com persistência local
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Tela atual: login, register, forgot
  const [page, setPage] = useState("login");

  // Inputs login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Inputs registro
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // Simula envio de login
  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Tentou logar com:\nEmail: ${email}\nSenha: ${password}`);
  };

  // Simula envio de registro
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Tentou registrar com:\nEmail: ${regEmail}\nSenha: ${regPassword}`);
  };

  return (
    <>
      <button
        className="toggle-theme-btn"
        onClick={toggleTheme}
        aria-label="Alternar tema claro e escuro"
        title="Alternar tema claro e escuro"
      >
        {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      <div className="container">
        <div className="card" role="main">
          {page === "login" && (
            <>
              <h2>Entrar</h2>
              <form onSubmit={handleLogin} noValidate>
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
                  onClick={() => setPage("register")}
                  aria-label="Ir para página Cadastrar"
                >
                  Cadastrar
                </button>
              </div>
            </>
          )}

          {page === "register" && (
            <>
              <h2>Cadastrar</h2>
              <form onSubmit={handleRegister} noValidate>
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
                  onClick={() => setPage("login")}
                  aria-label="Voltar para a página de login"
                >
                  Voltar ao login
                </button>
              </div>
            </>
          )}

          {page === "forgot" && (
            <>
              <h2>Esqueci a senha</h2>
              <p className="message">
                Clique no link enviado ao seu email para recuperar a senha.
              </p>
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn-link"
                  onClick={() => setPage("login")}
                  aria-label="Voltar para a página de login"
                >
                  Voltar ao login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
