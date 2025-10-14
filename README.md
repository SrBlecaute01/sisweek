<div align="center">
  <img src="./src/assets/logo/logo.svg" alt="Logo SisWeek" width="200"/>
</div>

<h1 align="center">SisWeek 2025</h1>

<p align="center">
  O site oficial da Semana da Inovação e Tecnologia da UFAL - Campus Penedo.
</p>

<!-- BADGES -->
<div align="center">
  <img src="https://img.shields.io/github/license/SrBlecaute01/sisweek" alt="License">
  <img src="https://img.shields.io/github/last-commit/SrBlecaute01/sisweek" alt="Last commit">
  <img src="https://img.shields.io/github/languages/top/SrBlecaute01/sisweek" alt="Top language">
</div>

<br>

![Screenshot da Aplicação](./src/assets/banner.png)

## 📋 Índice

- Sobre o Projeto
  - Tecnologias Utilizadas
- Começando
  - Pré-requisitos
  - Instalação
- Uso
  - Rodando com Docker
- Estrutura de Pastas
- Contribuindo
- Licença

## 💻 Sobre o Projeto

**SisWeek** é o site de divulgação e inscrição para um dos maiores eventos de tecnologia do Baixo São Francisco. Promovido por estudantes de Sistemas de Informação da UFAL - Campus Penedo, o evento tem como objetivo trazer para a comunidade as inovações e os impactos sociais das tecnologias desenvolvidas na universidade.

A plataforma apresenta a programação completa, informações sobre os palestrantes, patrocinadores, premiações e um formulário de inscrição para os participantes.

### ✨ Tecnologias Utilizadas

O projeto foi construído com tecnologias modernas para garantir performance e uma ótima experiência de desenvolvimento.

- **[React](https://reactjs.org/)** - Biblioteca para construir interfaces de usuário.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build para desenvolvimento web moderno.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
- **[React Router](https://reactrouter.com/)** - Para gerenciamento de rotas.
- **[Leaflet](https://leafletjs.com/)** & **[React-Leaflet](https://react-leaflet.js.org/)** - Para exibição de mapas interativos.
- **[Swiper](https://swiperjs.com/)** - Para carrosséis e sliders.
- **[Zod](https://zod.dev/)** & **[React Hook Form](https://react-hook-form.com/)** - Para validação de formulários.
- **[Axios](https://axios-http.com/)** - Para requisições HTTP.
- **[Docker](https://www.docker.com/)** - Para containerização da aplicação.

## 🚀 Começando

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### ✅ Pré-requisitos

- **Node.js** (versão 22.x ou superior)
- **npm** (geralmente instalado com o Node.js)

### 📦 Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/SrBlecaute01/sisweek.git
   cd sisweek
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie uma cópia do arquivo `.env.example` e renomeie para `.env.development` ou `.env.local`.
   ```sh
   cp .env.example .env.development
   ```
   Em seguida, preencha a variável com a URL da API:
   ```env
   VITE_AUTH_API_URL="https://sua-api.com"
   ```

## ▶️ Uso

- **Para rodar em modo de desenvolvimento:**
  ```sh
  npm run dev
  ```
  Abra http://localhost:5173 (ou a porta indicada no terminal) para ver a aplicação.

- **Para gerar a build de produção:**
  ```sh
  npm run build
  ```
  Os arquivos otimizados serão gerados na pasta `dist/`.

- **Para visualizar a build de produção localmente:**
  ```sh
  npm run preview
  ```

- **Para rodar o linter:**
  ```sh
  npm run lint
  ```

### 🐳 Rodando com Docker

O projeto já vem com um `Dockerfile` configurado para produção.

1. **Construa a imagem Docker:**
   ```sh
   docker build -t sisweek .
   ```

2. **Execute o container:**
   ```sh
   docker run -p 8080:80 sisweek
   ```
   A aplicação estará disponível em http://localhost:8080.

## 📁 Estrutura de Pastas

A estrutura de pastas do projeto segue um padrão organizado para facilitar a manutenção:

```
src/
├── assets/         # Imagens, ícones, fontes e outros arquivos estáticos
├── components/     # Componentes React reutilizáveis
├── context/        # Contextos React (ex: AuthContext)
├── data/           # Arquivos de dados estáticos (JSON)
├── hooks/          # Hooks customizados
├── pages/          # Componentes que representam as páginas da aplicação
├── schemas/        # Esquemas de validação (Zod)
├── services/       # Lógica de comunicação com APIs
└── utils/          # Funções utilitárias
```

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua feature (`git checkout -b feature/AmazingFeature`).
3. Faça o **Commit** de suas alterações (`git commit -m 'Add some AmazingFeature'`).
4. Faça o **Push** para a Branch (`git push origin feature/AmazingFeature`).
5. Abra um **Pull Request**.