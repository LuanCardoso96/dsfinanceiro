# 💰 DS Financeiro

Sistema de controle financeiro moderno com design vibrante e funcionalidades completas.

## 🚀 Como executar

### Pré-requisitos
- Node.js instalado
- Conta Firebase configurada

### Instalação e execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

## 🔥 Configuração do Firebase

### 1. Criar índices no Firestore

Se você encontrar o erro de índice, siga estes passos:

1. **Acesse o Console do Firebase**: https://console.firebase.google.com/project/dsfinanceiro/firestore/indexes

2. **Clique em "Criar Índice"**

3. **Configure o índice composto**:
   - **Coleção**: `launches`
   - **Campos**:
     - `uid` (Ascendente)
     - `year` (Ascendente) 
     - `month` (Ascendente)
     - `date` (Ascendente)

4. **Clique em "Criar"**

### 2. Link direto para criação automática

Se o erro aparecer no console do navegador, clique no link fornecido para criar o índice automaticamente.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Glassmorphism com gradientes vibrantes
- 📊 **Controle Financeiro**: Entradas, saídas e saldo em tempo real
- 📅 **Filtros**: Por ano, mês e categoria
- 💾 **Persistência**: Dados salvos no Firebase Firestore
- 🔐 **Autenticação**: Login seguro com Firebase Auth
- 📱 **Responsivo**: Funciona em desktop e mobile

## 🎨 Paleta de Cores

- **Background**: Gradiente roxo/azul vibrante
- **Cards**: Glassmorphism com transparência
- **Botões**: Gradientes coloridos com efeitos hover
- **Tipografia**: Fonte Inter moderna

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Firebase (Auth + Firestore)
- **Servidor**: Express.js
- **Design**: Glassmorphism + Gradientes

## 📱 Responsividade

O sistema é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop: Layout em grid completo
- Tablet: Colunas adaptadas
- Mobile: Layout em coluna única

## 🔧 Estrutura do Projeto

```
Ds-financeiro/
├── index.html          # Página de login/cadastro
├── home.html           # Dashboard principal
├── server.js           # Servidor Express
├── package.json        # Dependências e scripts
└── README.md          # Este arquivo
```

## 🚨 Solução de Problemas

### Erro de Índice do Firestore
Se aparecer erro sobre índice composto:
1. Clique no link do erro no console
2. Ou acesse manualmente o console do Firebase
3. Crie o índice composto conforme instruções acima

### npm run dev não funciona
Certifique-se de estar no diretório correto:
```bash
cd "C:\DS ENGSYSTEN\Ds-financeiro"
npm run dev
```

## 🎯 Próximas Funcionalidades

- [ ] Relatórios em PDF
- [ ] Gráficos e dashboards
- [ ] Exportação de dados
- [ ] Categorias personalizáveis
- [ ] Backup automático

---

**Desenvolvido com ❤️ para controle financeiro eficiente**
"# dsfinanceiro" 
