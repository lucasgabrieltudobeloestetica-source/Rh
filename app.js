const STORAGE_KEY = "tudo-belo-rh-demo-v2";

const palette = ["#405c8a", "#a86d5c", "#5b9a85", "#8b6eb9", "#ca8756", "#547caf", "#a45d83", "#698b57"];

const seed = {
  employees: [
    { id: 1, name: "Marina Costa", role: "Gerente de Pessoas", department: "Recursos Humanos", manager: "Lucas Pereira", admission: "2021-03-15", email: "marina.costa@brisa.com", status: "Ativo", color: "#a86d5c", birthday: "18 Out", vacation: "24 dias" },
    { id: 2, name: "Rafael Mendes", role: "Analista de Produto", department: "Produto", manager: "Camila Rocha", admission: "2022-08-01", email: "rafael.mendes@brisa.com", status: "Ativo", color: "#547caf", birthday: "22 Out", vacation: "18 dias" },
    { id: 3, name: "Aline Souza", role: "Designer de Marca", department: "Marketing", manager: "João Silva", admission: "2023-01-09", email: "aline.souza@brisa.com", status: "Férias", color: "#8b6eb9", birthday: "25 Out", vacation: "0 dias" },
    { id: 4, name: "Diego Oliveira", role: "Desenvolvedor Full Stack", department: "Tecnologia", manager: "Camila Rocha", admission: "2020-11-20", email: "diego.oliveira@brisa.com", status: "Ativo", color: "#5b9a85", birthday: "31 Out", vacation: "20 dias" },
    { id: 5, name: "Bianca Ramos", role: "Executiva de Vendas", department: "Comercial", manager: "Felipe Nunes", admission: "2024-02-12", email: "bianca.ramos@brisa.com", status: "Ativo", color: "#ca8756", birthday: "03 Nov", vacation: "15 dias" },
    { id: 6, name: "Gustavo Lima", role: "Assistente Financeiro", department: "Financeiro", manager: "Renata Alves", admission: "2022-05-22", email: "gustavo.lima@brisa.com", status: "Afastado", color: "#a45d83", birthday: "09 Nov", vacation: "11 dias" },
    { id: 7, name: "Carolina Freitas", role: "Coordenadora de Operações", department: "Operações", manager: "Lucas Pereira", admission: "2019-09-18", email: "carolina.freitas@brisa.com", status: "Ativo", color: "#698b57", birthday: "12 Nov", vacation: "28 dias" },
    { id: 8, name: "Henrique Cardoso", role: "Analista de Dados", department: "Tecnologia", manager: "Camila Rocha", admission: "2025-01-06", email: "henrique.cardoso@brisa.com", status: "Ativo", color: "#405c8a", birthday: "16 Nov", vacation: "30 dias" }
  ],
  leaveRequests: [
    { id: 101, employeeId: 2, type: "Férias", start: "2026-11-03", end: "2026-11-14", status: "Pendente" },
    { id: 102, employeeId: 5, type: "Férias", start: "2026-10-26", end: "2026-11-06", status: "Pendente" },
    { id: 103, employeeId: 7, type: "Ausência", start: "2026-10-18", end: "2026-10-18", status: "Pendente" },
    { id: 104, employeeId: 3, type: "Férias", start: "2026-10-06", end: "2026-10-24", status: "Aprovado" },
    { id: 105, employeeId: 6, type: "Afastamento", start: "2026-10-01", end: "2026-10-31", status: "Aprovado" }
  ],
  candidates: [
    { id: 1, name: "Larissa Rocha", role: "Analista de Produto", stage: "Triagem", color: "#8060a4", date: "Hoje" },
    { id: 2, name: "Pedro Martins", role: "Analista de Produto", stage: "Triagem", color: "#588e72", date: "Ontem" },
    { id: 3, name: "Camila Moraes", role: "Analista de Produto", stage: "Entrevista", color: "#b2755d", date: "14 Out" },
    { id: 4, name: "Thiago Fernandes", role: "Analista de Produto", stage: "Entrevista", color: "#5c82ad", date: "13 Out" },
    { id: 5, name: "Ana Beatriz", role: "Analista de Produto", stage: "Desafio", color: "#9a6a99", date: "12 Out" },
    { id: 6, name: "Victor Ramos", role: "Analista de Produto", stage: "Finalista", color: "#5c967f", date: "10 Out" }
  ],
  documents: [
    { id: 1, title: "Política de Férias", category: "Políticas internas", updated: "Atualizado em 01 Out 2026" },
    { id: 2, title: "Manual do Colaborador", category: "Cultura e conduta", updated: "Atualizado em 20 Set 2026" },
    { id: 3, title: "Guia de Onboarding", category: "Admissão", updated: "Atualizado em 16 Set 2026" },
    { id: 4, title: "Política de Segurança", category: "Segurança da informação", updated: "Atualizado em 04 Set 2026" },
    { id: 5, title: "Reembolso de Despesas", category: "Financeiro", updated: "Atualizado em 21 Ago 2026" },
    { id: 6, title: "Código de Conduta", category: "Cultura e conduta", updated: "Atualizado em 08 Ago 2026" }
  ],
  announcements: [
    { id: 1, title: "Feriado de 2 de novembro", body: "Confira como ficará o funcionamento da empresa no feriado.", audience: "Toda a empresa", date: "Hoje", reads: "47 de 52 leram", icon: "◉" },
    { id: 2, title: "Inscrições para o Brisa Talks", body: "Compartilhe conhecimento e inscreva sua apresentação.", audience: "Toda a empresa", date: "Ontem", reads: "38 de 52 leram", icon: "✦" },
    { id: 3, title: "Novo benefício de bem-estar", body: "Conheça o parceiro escolhido para este ciclo.", audience: "Colaboradores ativos", date: "08 Out", reads: "52 de 52 leram", icon: "♡" }
  ],
  activity: [
    { icon: "＋", tone: "green", title: "Henrique Cardoso foi admitido", note: "Tecnologia • Analista de Dados", time: "Hoje, 09:15" },
    { icon: "✓", tone: "blue", title: "Férias de Aline Souza aprovadas", note: "Marketing • 06 a 24 de outubro", time: "Ontem, 16:40" },
    { icon: "↗", tone: "amber", title: "Ciclo de desempenho iniciado", note: "2º semestre de 2026", time: "13 Out, 10:00" }
  ]
};

// Snapshot agregado das fontes recebidas. Não inclua pessoas, documentos brutos,
// identificadores ou datas pessoais neste front-end público.
const orgSnapshot = {
  referenceDate: "13 de outubro de 2026",
  sources: [
    { title: "Organograma corporativo", summary: "8 núcleos estruturais mapeados", detail: "Referência para áreas, camadas de liderança e fluxo de reporte.", status: "Estrutura pronta", tone: "ready" },
    { title: "Listagem operacional", summary: "46 registros detalhados no relatório", detail: "Traz cargo, departamento e admissão; permanece bloqueada para importação privada.", status: "Ambiente privado necessário", tone: "blocked" },
    { title: "Relatório de aniversariantes", summary: "83 ocorrências para conciliação", detail: "Não possui identificador, cargo ou área suficientes para cruzamento automático.", status: "Revisão necessária", tone: "review" }
  ],
  areas: [
    { name: "Gente & Gestão", focus: "Treinamento técnico · Departamento pessoal · Serviços gerais · Aprendizagem", icon: "♙" },
    { name: "Logística", focus: "Estoque · Transporte · Operação e atendimento", icon: "↝" },
    { name: "Financeiro & Crédito", focus: "Financeiro · Crédito e cobrança · Controladoria", icon: "◈" },
    { name: "Comercial — Eletroterapia", focus: "Coordenação · Consultoria comercial · Assistência", icon: "◇" },
    { name: "Comercial — Injetáveis", focus: "Coordenação · Consultoria comercial · Assistência", icon: "◇" },
    { name: "SDR", focus: "Supervisão · Qualificação de oportunidades", icon: "◌" },
    { name: "Marketing & TI", focus: "Martech · Marketing · Tecnologia", icon: "✦" },
    { name: "Taguatinga & Locação", focus: "Vendas · Locação · Entregas", icon: "⌁" }
  ],
  distribution: [
    { label: "Logística", value: 12, tone: "#4f7fd4" },
    { label: "Eletroterapia", value: 9, tone: "#7f66c7" },
    { label: "Injetáveis", value: 6, tone: "#41a37b" },
    { label: "Financeiro", value: 5, tone: "#d69846" },
    { label: "Outras áreas", value: 14, tone: "#9ba8b9" }
  ]
};

let state = loadState();
let currentView = "dashboard";
let employeeFilter = "";
let selectedDepartment = "Todos";

const content = document.querySelector("#app-content");
const title = document.querySelector("#page-title");
const modalRoot = document.querySelector("#modal-root");
const toastRoot = document.querySelector("#toast-root");

const viewInfo = {
  dashboard: { title: "Visão geral", eyebrow: "TUDO BELO / GENTE & GESTÃO" },
  employees: { title: "Colaboradores", eyebrow: "GESTÃO DE PESSOAS" },
  timeoff: { title: "Férias e ausências", eyebrow: "GESTÃO DE PESSOAS" },
  recruitment: { title: "Recrutamento", eyebrow: "GESTÃO DE PESSOAS" },
  performance: { title: "Desempenho", eyebrow: "GESTÃO DE PESSOAS" },
  organization: { title: "Estrutura organizacional", eyebrow: "ORGANIZAÇÃO" },
  documents: { title: "Documentos", eyebrow: "ORGANIZAÇÃO" },
  communications: { title: "Comunicações", eyebrow: "ORGANIZAÇÃO" },
  settings: { title: "Configurações", eyebrow: "ORGANIZAÇÃO" }
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : structuredClone(seed);
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateLeaveCount();
}

function resetState() {
  state = structuredClone(seed);
  saveState();
  render();
  toast("Dados de demonstração restaurados.");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char]);
}

function initials(name) {
  return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function avatar(person, className = "") {
  return `<span class="avatar ${className}" style="background:${escapeHtml(person.color || "#405c8a")}">${initials(person.name)}</span>`;
}

function personById(id) {
  return state.employees.find((employee) => String(employee.id) === String(id));
}

function statusClass(status) {
  return { "Ativo": "active", "Férias": "vacation", "Afastado": "leave", "Pendente": "pending", "Aprovado": "approved", "Reprovado": "rejected" }[status] || "inactive";
}

function statusPill(status) {
  return `<span class="status ${statusClass(status)}">${escapeHtml(status)}</span>`;
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(date).replace(".", "");
}

function daysBetween(start, end) {
  return Math.max(1, Math.round((new Date(`${end}T12:00:00`) - new Date(`${start}T12:00:00`)) / 86400000) + 1);
}

function render() {
  const meta = viewInfo[currentView];
  title.textContent = meta.title;
  document.querySelector("#page-eyebrow").textContent = meta.eyebrow;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === currentView));
  const renderers = { dashboard: renderDashboard, employees: renderEmployees, timeoff: renderTimeOff, recruitment: renderRecruitment, performance: renderPerformance, organization: renderOrganization, documents: renderDocuments, communications: renderCommunications, settings: renderSettings };
  content.innerHTML = renderers[currentView]();
  updateLeaveCount();
  bindViewControls();
}

function pageIntro(heading, copy, action, date = false) {
  return `<div class="page-intro"><div><h2>${heading}</h2><p>${copy}</p></div><div>${date ? '<span class="date-label">◷ Terça-feira, 13 de outubro de 2026</span>' : ""}${action || ""}</div></div>`;
}

function renderDashboard() {
  const totalRecords = orgSnapshot.distribution.reduce((total, item) => total + item.value, 0);
  return `
    ${pageIntro("Estrutura organizada", "Resumo agregado das fontes recebidas. O cadastro nominativo permanece fora da versão pública.", '<button class="primary-button" data-view-link="organization"><span>⌘</span>Ver estrutura</button>', true)}
    <div class="metric-grid">
      <article class="metric-card"><header><span>FONTES CATALOGADAS</span><span class="metric-icon blue">▤</span></header><strong>3</strong><footer>Organograma, lista operacional e aniversariantes</footer></article>
      <article class="metric-card"><header><span>NÚCLEOS MAPEADOS</span><span class="metric-icon green">⌘</span></header><strong>8</strong><footer>Referência estrutural do organograma</footer></article>
      <article class="metric-card"><header><span>REGISTROS DETALHADOS</span><span class="metric-icon amber">♙</span></header><strong>${totalRecords}</strong><footer>Relatório operacional de ${orgSnapshot.referenceDate}</footer></article>
      <article class="metric-card"><header><span>OCORRÊNCIAS A CONCILIAR</span><span class="metric-icon purple">◌</span></header><strong>83</strong><footer>Lista sem identificador comum para vínculo automático</footer></article>
    </div>
    <div class="dashboard-grid source-dashboard-grid">
      <article class="card"><div class="card-title"><div><h3>Registros por agrupamento</h3><p>Distribuição agregada da lista operacional</p></div><span class="date-chip">${orgSnapshot.referenceDate}</span></div>
        <div class="distribution-list">${orgSnapshot.distribution.map((item) => `<div class="distribution-row"><span>${escapeHtml(item.label)}</span><div class="distribution-track"><i style="width:${Math.round(item.value / totalRecords * 100)}%;background:${item.tone}"></i></div><b>${item.value}</b></div>`).join("")}</div>
        <p class="privacy-footnote">A lista não informa status de vínculo. Os números representam registros do relatório, não o quadro ativo.</p>
      </article>
      <article class="card"><div class="card-title"><div><h3>Próxima decisão</h3><p>O que falta para importar registros reais</p></div><span class="status pending">Atenção</span></div><div class="decision-stack"><div><span>1</span><p><b>Restringir acesso</b><small>Manter dados de pessoas fora desta versão pública.</small></p></div><div><span>2</span><p><b>Conectar ambiente privado</b><small>Autenticação, banco e regras de acesso por perfil.</small></p></div><div><span>3</span><p><b>Validar a conciliação</b><small>Não relacionar as fontes por nome sem um identificador interno.</small></p></div></div><button class="secondary-button full-width" data-action="open-privacy-plan">Ver plano seguro de importação</button></article>
    </div>
    <div class="lower-grid">
      <article class="card"><div class="card-title"><div><h3>Inventário das fontes</h3><p>O que cada arquivo pode alimentar com segurança</p></div><button class="link-button" data-view-link="organization">Ver detalhes</button></div>
      ${orgSnapshot.sources.map((source) => `<div class="source-line"><span class="source-dot ${source.tone}"></span><div><b>${escapeHtml(source.title)}</b><p>${escapeHtml(source.summary)}</p></div><span class="source-status ${source.tone}">${escapeHtml(source.status)}</span></div>`).join("")}</article>
      <article class="card privacy-card-large"><div class="card-title"><div><h3>Privacidade por padrão</h3><p>Proteção necessária antes do cadastro real</p></div><span>⌾</span></div><p>O site público mostra somente a estrutura agregada. Nomes, contatos, datas e identificadores ficam fora do navegador, do repositório e da implantação até existir um ambiente autenticado.</p><ul><li>Supabase Auth para identidade e perfis</li><li>RLS para separar RH, gestor e colaborador</li><li>Storage privado e trilha de auditoria</li></ul><button class="link-button" data-action="open-privacy-plan">Entender a implantação segura</button></article>
    </div>`;
}

function renderEmployees() {
  const departments = ["Todos", ...new Set(state.employees.map((employee) => employee.department))];
  const filtered = state.employees.filter((employee) => {
    const matchesText = `${employee.name} ${employee.role} ${employee.email}`.toLowerCase().includes(employeeFilter.toLowerCase());
    return matchesText && (selectedDepartment === "Todos" || employee.department === selectedDepartment);
  });
  return `${pageIntro("Colaboradores", "O diretório real será liberado no ambiente autenticado; abaixo há somente registros fictícios para demonstrar a interface.", '<button class="primary-button" data-action="open-privacy-plan"><span>⌾</span>Preparar importação</button>')}
    <div class="demo-banner"><span>⌾</span><p><b>Dados de demonstração</b> — não cadastre informações pessoais nesta versão pública. A importação oficial será feita em área protegida.</p></div>
    <div class="toolbar"><label class="search-field"><span>⌕</span><input id="employee-search" type="search" value="${escapeHtml(employeeFilter)}" placeholder="Buscar por nome, cargo ou e-mail" /></label><select class="filter-button" id="department-filter">${departments.map((department) => `<option ${department === selectedDepartment ? "selected" : ""}>${escapeHtml(department)}</option>`).join("")}</select><button class="filter-button" data-action="export-employees">⇩ Exportar</button></div>
    <div class="card table-card"><table class="data-table"><thead><tr><th>Colaborador</th><th>Cargo e setor</th><th>Admissão</th><th>Gestor</th><th>Status</th><th></th></tr></thead><tbody>
    ${filtered.length ? filtered.map((employee) => `<tr><td><div class="employee-cell">${avatar(employee)}<div class="person-copy"><b>${escapeHtml(employee.name)}</b><small>${escapeHtml(employee.email)}</small></div></div></td><td><b>${escapeHtml(employee.role)}</b><br><small>${escapeHtml(employee.department)}</small></td><td>${formatDate(employee.admission)}</td><td>${escapeHtml(employee.manager)}</td><td>${statusPill(employee.status)}</td><td><button class="row-menu" data-action="employee-detail" data-id="${employee.id}" aria-label="Ver detalhes de ${escapeHtml(employee.name)}">⋯</button></td></tr>`).join("") : '<tr><td colspan="6"><div class="empty-state"><b>Nenhum colaborador encontrado</b>Ajuste a busca ou os filtros para continuar.</div></td></tr>'}
    </tbody></table><div class="table-footer"><span>Exibindo ${filtered.length} de ${state.employees.length} colaboradores</span><div class="pagination"><button class="page-number active">1</button><button class="page-number">2</button><button class="page-number">›</button></div></div></div>`;
}

function renderTimeOff() {
  const pending = state.leaveRequests.filter((request) => request.status === "Pendente");
  const approved = state.leaveRequests.filter((request) => request.status === "Aprovado");
  const renderRequest = (request, actions = true) => { const employee = personById(request.employeeId); return `<div class="request-line">${avatar(employee,"small")}<div class="person-copy"><b>${escapeHtml(employee.name)}</b><small>${request.type} • ${daysBetween(request.start, request.end)} ${daysBetween(request.start, request.end) === 1 ? "dia" : "dias"}</small></div><div class="request-meta"><b>${formatDate(request.start)}</b><span>até ${formatDate(request.end)}</span></div>${actions && request.status === "Pendente" ? `<div class="mini-actions"><button class="round-action yes" data-action="approve-leave" data-id="${request.id}" aria-label="Aprovar">✓</button><button class="round-action no" data-action="reject-leave" data-id="${request.id}" aria-label="Recusar">×</button></div>` : statusPill(request.status)}</div>`; };
  return `${pageIntro("Férias e ausências", "Acompanhe saldos, solicitações e o calendário do time.", '<button class="primary-button" data-action="open-leave-modal"><span>＋</span>Nova solicitação</button>')}
    <div class="section-tabs"><button class="tab-button active">Visão geral</button><button class="tab-button">Calendário</button><button class="tab-button">Políticas</button></div>
    <div class="timeoff-layout"><div><article class="card balance-card"><div class="card-title"><div><h3>Saldo médio de férias</h3><p>Colaboradores ativos em 13 de outubro</p></div><span>◷</span></div><div class="balance-big"><b>21,4 dias</b><span>por colaborador</span></div><div class="balance-stats"><div><b>${approved.length}</b><small>em férias agora</small></div><div><b>${pending.length}</b><small>solicitações pendentes</small></div><div><b>6</b><small>vencem em 90 dias</small></div></div></article><article class="card" style="margin-top:17px"><div class="card-title"><div><h3>Solicitações pendentes</h3><p>Decida antes das datas previstas</p></div><button class="link-button" data-action="open-leave-modal">Adicionar</button></div>${pending.length ? pending.map((request) => renderRequest(request)).join("") : '<div class="empty-state"><b>Tudo em dia!</b>Não há solicitações pendentes.</div>'}</article></div>
    <article class="card"><div class="card-title"><div><h3>Próximas ausências</h3><p>Já aprovadas pelo RH</p></div><button class="link-button" data-action="open-leave-modal">Nova</button></div>${approved.map((request) => renderRequest(request, false)).join("")}<div class="card-title" style="margin-top:19px"><div><h3>Resumo de outubro</h3><p>Distribuição de ausências</p></div></div><div class="rating-list"><div class="rating-row"><span>Férias</span><div class="rating-bar"><i style="width:72%"></i></div><b>18</b></div><div class="rating-row"><span>Atestados</span><div class="rating-bar"><i style="width:28%;background:#e8a14d"></i></div><b>7</b></div><div class="rating-row"><span>Outros</span><div class="rating-bar"><i style="width:16%;background:#9871d4"></i></div><b>4</b></div></div></article></div>`;
}

function renderRecruitment() {
  const stages = ["Triagem", "Entrevista", "Desafio", "Finalista"];
  return `${pageIntro("Recrutamento", "Acompanhe o funil da vaga de Analista de Produto.", '<button class="primary-button" data-action="open-job-modal"><span>＋</span>Nova vaga</button>')}
    <article class="card"><div class="kanban-meta"><span class="status active">Vaga ativa</span><b>Analista de Produto Pleno</b><span style="color:#8794a8;font-size:10px">• Produto • São Paulo / Híbrido</span><select class="select-lite"><option>Analista de Produto</option></select></div><div class="kanban-board">${stages.map((stage) => { const candidates = state.candidates.filter((candidate) => candidate.stage === stage); return `<section class="kanban-column"><header><h4>${stage}</h4><span>${candidates.length}</span></header>${candidates.map((candidate) => `<article class="candidate-card"><div class="person-line">${avatar(candidate,"small")}<div class="person-copy"><b>${escapeHtml(candidate.name)}</b><small>${escapeHtml(candidate.role)}</small></div></div><footer><span class="stage-tag">${stage}</span><span>${candidate.date}</span></footer></article>`).join("")}<button class="add-candidate" data-action="open-candidate-modal" data-stage="${stage}">＋ Adicionar candidato</button></section>`; }).join("")}</div></article>
    <div class="recruitment-summary"><article class="summary-mini"><b>${state.candidates.length}</b><span>Candidatos no processo</span></article><article class="summary-mini"><b>12 dias</b><span>Tempo médio de contratação</span></article><article class="summary-mini"><b>83%</b><span>Taxa de avanço na triagem</span></article></div>`;
}

function renderPerformance() {
  return `${pageIntro("Desempenho", "Promova conversas contínuas e o desenvolvimento do time.", '<button class="primary-button" data-action="start-cycle"><span>＋</span>Novo ciclo</button>')}
    <div class="performance-grid"><div><article class="card cycle-hero"><div class="card-title"><div><h3>Ciclo 2º semestre de 2026</h3><p>Autoavaliação, avaliação de gestores e calibração</p></div><span class="status active">Em andamento</span></div><div class="cycle-progress"><div class="progress-track"><div class="progress-fill" style="width:68%"></div></div></div><footer><span><b>68%</b> concluído • 35 de 52 pessoas</span><span>Encerramento em 30 Out</span></footer></article><article class="card pdi-list"><div class="card-title"><div><h3>Planos de desenvolvimento</h3><p>Itens que pedem acompanhamento</p></div><button class="link-button">Ver PDIs</button></div><div class="pdi-line"><span class="pdi-check">✓</span><div class="pdi-copy"><b>Marina Costa • Liderança inclusiva</b><small>Curso concluído, aguardando conversa com o gestor.</small></div><span class="due-date">Hoje</span></div><div class="pdi-line"><span class="pdi-check">↗</span><div class="pdi-copy"><b>Rafael Mendes • Visão de negócio</b><small>Apresentar descoberta de produto no Brisa Talks.</small></div><span class="due-date">18 Out</span></div><div class="pdi-line"><span class="pdi-check">○</span><div class="pdi-copy"><b>Bianca Ramos • Negociação consultiva</b><small>Mentoria com Felipe Nunes.</small></div><span class="due-date">24 Out</span></div></article></div><article class="card"><div class="card-title"><div><h3>Competências avaliadas</h3><p>Média do ciclo atual</p></div></div><div class="rating-list"><div class="rating-row"><span>Colaboração</span><div class="rating-bar"><i style="width:89%"></i></div><b>4,5</b></div><div class="rating-row"><span>Entrega</span><div class="rating-bar"><i style="width:83%"></i></div><b>4,2</b></div><div class="rating-row"><span>Comunicação</span><div class="rating-bar"><i style="width:78%"></i></div><b>3,9</b></div><div class="rating-row"><span>Inovação</span><div class="rating-bar"><i style="width:72%"></i></div><b>3,6</b></div></div><div class="card-title" style="margin-top:26px"><div><h3>Feedbacks recentes</h3><p>Últimos 7 dias</p></div></div><div class="person-line"><span class="avatar small" style="background:#547caf">RM</span><div class="person-copy"><b>Rafael recebeu um feedback</b><small>De Camila Rocha • há 2 dias</small></div></div><div class="person-line"><span class="avatar small" style="background:#a86d5c">MC</span><div class="person-copy"><b>Marina enviou um reconhecimento</b><small>Para Bianca Ramos • há 4 dias</small></div></div></article></div>`;
}

function renderOrganization() {
  return `${pageIntro("Estrutura organizacional", "Mapa agregado criado a partir das fontes recebidas. Relações com nomes ficam reservadas ao ambiente privado.", '<button class="primary-button" data-action="open-privacy-plan"><span>⌾</span>Plano de importação</button>')}
    <div class="security-banner"><span class="metric-icon blue">⌾</span><div><b>Visão pública e agregada</b><p>Esta página organiza áreas, frentes e camadas de trabalho sem publicar colaboradores, documentos brutos ou identificadores.</p></div><span class="status approved">Protegido</span></div>
    <div class="metric-grid compact-metrics">
      <article class="metric-card"><header><span>NÚCLEOS ESTRUTURAIS</span><span class="metric-icon blue">⌘</span></header><strong>8</strong><footer>Referência do organograma</footer></article>
      <article class="metric-card"><header><span>DEPARTAMENTOS NO RELATÓRIO</span><span class="metric-icon green">▦</span></header><strong>10</strong><footer>Classificação operacional, sujeita à revisão</footer></article>
      <article class="metric-card"><header><span>REGISTROS DETALHADOS</span><span class="metric-icon amber">▤</span></header><strong>46</strong><footer>Relatório de ${orgSnapshot.referenceDate}</footer></article>
      <article class="metric-card"><header><span>CONCILIAÇÃO</span><span class="metric-icon purple">◌</span></header><strong>Pendente</strong><footer>Não há ID comum entre as fontes</footer></article>
    </div>
    <div class="organization-layout">
      <article class="card org-map-card"><div class="card-title"><div><h3>Mapa por área</h3><p>Escopo funcional extraído do organograma — sem relações nominais</p></div><span class="date-chip">Atualizado em ${orgSnapshot.referenceDate}</span></div><div class="org-area-grid">${orgSnapshot.areas.map((area) => `<section class="org-area"><span>${area.icon}</span><div><h4>${escapeHtml(area.name)}</h4><p>${escapeHtml(area.focus)}</p></div></section>`).join("")}</div></article>
      <aside class="org-side-stack"><article class="card"><div class="card-title"><div><h3>Camadas de trabalho</h3><p>Modelo observado nas áreas mapeadas</p></div></div><ol class="layer-list"><li><span>1</span><div><b>Direção e coordenação</b><small>Orientação de negócio e definição de prioridades.</small></div></li><li><span>2</span><div><b>Gestão e supervisão</b><small>Desdobramento operacional e acompanhamento do time.</small></div></li><li><span>3</span><div><b>Especialistas e operação</b><small>Análise, atendimento, vendas, suporte e execução.</small></div></li></ol></article><article class="card caution-card"><div class="card-title"><div><h3>Regra de conciliação</h3><p>Evita criar vínculos indevidos</p></div><span>!</span></div><p>Não associe registros por aproximação de nome. O relatório de aniversariantes não traz cargo, área ou identificador para um cruzamento confiável.</p></article></aside>
    </div>
    <article class="card import-inventory"><div class="card-title"><div><h3>Inventário de importação</h3><p>Estado de cada fonte antes do cadastro definitivo</p></div></div><div class="source-inventory">${orgSnapshot.sources.map((source) => `<section class="source-inventory-item"><span class="source-dot ${source.tone}"></span><div><h4>${escapeHtml(source.title)}</h4><b>${escapeHtml(source.summary)}</b><p>${escapeHtml(source.detail)}</p></div><span class="source-status ${source.tone}">${escapeHtml(source.status)}</span></section>`).join("")}</div></article>`;
}

function renderDocuments() {
  return `${pageIntro("Documentos", "Organize políticas, manuais e arquivos importantes da empresa.", '<button class="primary-button" data-action="upload-document"><span>＋</span>Enviar documento</button>')}
    <div class="toolbar"><label class="search-field"><span>⌕</span><input type="search" placeholder="Buscar um documento" /></label><button class="filter-button">▤ Categoria</button><button class="filter-button">↕ Mais recentes</button></div><div class="document-grid">${state.documents.map((document) => `<article class="card document-card"><span class="document-icon">PDF</span><h3>${escapeHtml(document.title)}</h3><p>${escapeHtml(document.category)}</p><footer><span class="doc-type">${escapeHtml(document.updated)}</span><button class="download" data-action="download-document" data-title="${escapeHtml(document.title)}" aria-label="Baixar ${escapeHtml(document.title)}">⇩</button></footer></article>`).join("")}</div>
    <article class="card storage-bar"><header><span>Armazenamento de documentos</span><b>1,8 GB de 5 GB</b></header><div class="progress-track"><div class="progress-fill" style="width:36%"></div></div></article>`;
}

function renderCommunications() {
  return `${pageIntro("Comunicações", "Mantenha o time informado e acompanhe a leitura dos avisos.", '<button class="primary-button" data-action="open-announcement-modal"><span>＋</span>Novo comunicado</button>')}
    <div class="announcement-list">${state.announcements.map((announcement) => `<article class="announcement"><span class="announcement-icon">${announcement.icon}</span><div class="person-copy"><b>${escapeHtml(announcement.title)}</b><small>${escapeHtml(announcement.body)} • ${escapeHtml(announcement.audience)}</small></div><span class="read-count">${escapeHtml(announcement.reads)}</span><time>${escapeHtml(announcement.date)}</time><button class="row-menu" data-action="announcement-detail" data-id="${announcement.id}" aria-label="Mais opções">⋯</button></article>`).join("")}</div>`;
}

function renderSettings() {
  return `${pageIntro("Configurações", "Defina como o RH Flow funciona para a sua organização.", "")}
    <div class="settings-grid"><article class="card"><div class="card-title"><div><h3>Fluxos e aprovações</h3><p>Configurações operacionais da empresa</p></div></div><div class="setting-row"><span class="metric-icon blue">◷</span><div class="person-copy"><b>Aprovação de férias pelo gestor</b><small>Envie a solicitação primeiro ao gestor direto.</small></div><button class="switch on" data-action="toggle-switch"><i></i></button></div><div class="setting-row"><span class="metric-icon green">◉</span><div class="person-copy"><b>Lembrete de comunicados</b><small>Lembre quem ainda não confirmou leitura.</small></div><button class="switch on" data-action="toggle-switch"><i></i></button></div><div class="setting-row"><span class="metric-icon purple">↗</span><div class="person-copy"><b>Feedback contínuo</b><small>Permite feedbacks fora dos ciclos de avaliação.</small></div><button class="switch" data-action="toggle-switch"><i></i></button></div></article><article class="card"><div class="card-title"><div><h3>Privacidade e dados</h3><p>Controles essenciais de LGPD</p></div></div><div class="setting-row"><span class="metric-icon amber">⌾</span><div class="person-copy"><b>Logs de auditoria</b><small>Registrar alterações em dados sensíveis.</small></div><button class="switch on" data-action="toggle-switch"><i></i></button></div><div class="setting-row"><span class="metric-icon blue">▤</span><div class="person-copy"><b>Retenção de documentos</b><small>Alertar o RH antes de vencer o prazo de guarda.</small></div><button class="switch on" data-action="toggle-switch"><i></i></button></div><div class="setting-row"><span class="metric-icon green">✦</span><div class="person-copy"><b>Dados de demonstração</b><small>Restaure o estado inicial da demonstração.</small></div><button class="secondary-button" data-action="reset-demo">Restaurar</button></div></article></div>`;
}

function bindViewControls() {
  const employeeSearch = document.querySelector("#employee-search");
  if (employeeSearch) employeeSearch.addEventListener("input", (event) => { employeeFilter = event.target.value; render(); document.querySelector("#employee-search")?.focus(); });
  const departmentFilter = document.querySelector("#department-filter");
  if (departmentFilter) departmentFilter.addEventListener("change", (event) => { selectedDepartment = event.target.value; render(); });
}

function updateLeaveCount() {
  const pending = state.leaveRequests.filter((request) => request.status === "Pendente").length;
  const el = document.querySelector("#leave-count");
  if (el) el.textContent = pending;
}

function modal(content) {
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-label="Janela de ação" data-modal-content>${content}</section></div>`;
  const firstInput = modalRoot.querySelector("input,select,textarea,button");
  firstInput?.focus();
}

function closeModal() { modalRoot.innerHTML = ""; }

function employeeModal() {
  modal(`<div class="modal-header"><div><h2>Adicionar colaborador</h2><p>Inclua os dados essenciais para iniciar a jornada.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><form id="employee-form" class="modal-form"><div class="form-grid"><div class="field full"><label for="employee-name">Nome completo</label><input id="employee-name" name="name" required placeholder="Ex.: Mariana Santos" /></div><div class="field"><label for="employee-email">E-mail corporativo</label><input id="employee-email" name="email" type="email" required placeholder="nome@empresa.com" /></div><div class="field"><label for="employee-admission">Data de admissão</label><input id="employee-admission" name="admission" type="date" required value="2026-10-13" /></div><div class="field"><label for="employee-role">Cargo</label><input id="employee-role" name="role" required placeholder="Ex.: Analista de RH" /></div><div class="field"><label for="employee-department">Departamento</label><select id="employee-department" name="department"><option>Recursos Humanos</option><option>Tecnologia</option><option>Produto</option><option>Marketing</option><option>Comercial</option><option>Financeiro</option><option>Operações</option></select></div><div class="field"><label for="employee-manager">Gestor direto</label><select id="employee-manager" name="manager">${["Lucas Pereira", ...state.employees.map((employee) => employee.name)].map((name) => `<option>${escapeHtml(name)}</option>`).join("")}</select></div><div class="field"><label for="employee-status">Status</label><select id="employee-status" name="status"><option>Ativo</option><option>Férias</option><option>Afastado</option></select></div></div><div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancelar</button><button class="primary-button" type="submit">Adicionar colaborador</button></div></form>`);
}

function leaveModal() {
  modal(`<div class="modal-header"><div><h2>Nova solicitação</h2><p>Registre férias ou uma ausência para aprovação.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><form id="leave-form" class="modal-form"><div class="form-grid"><div class="field full"><label for="leave-employee">Colaborador</label><select id="leave-employee" name="employeeId">${state.employees.filter((employee) => employee.status !== "Afastado").map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)} — ${escapeHtml(employee.department)}</option>`).join("")}</select></div><div class="field"><label for="leave-type">Tipo</label><select id="leave-type" name="type"><option>Férias</option><option>Ausência</option><option>Atestado</option><option>Afastamento</option></select></div><div class="field"><label for="leave-status">Status inicial</label><select id="leave-status" name="status"><option>Pendente</option><option>Aprovado</option></select></div><div class="field"><label for="leave-start">Data inicial</label><input id="leave-start" type="date" name="start" required value="2026-11-03" /></div><div class="field"><label for="leave-end">Data final</label><input id="leave-end" type="date" name="end" required value="2026-11-14" /></div></div><div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancelar</button><button class="primary-button" type="submit">Salvar solicitação</button></div></form>`);
}

function jobModal() {
  modal(`<div class="modal-header"><div><h2>Nova vaga</h2><p>Crie uma oportunidade e comece a receber candidaturas.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><form id="job-form" class="modal-form"><div class="form-grid"><div class="field full"><label for="job-title">Título da vaga</label><input id="job-title" name="title" required placeholder="Ex.: Pessoa Desenvolvedora Front-end" /></div><div class="field"><label for="job-department">Área</label><select id="job-department" name="department"><option>Tecnologia</option><option>Produto</option><option>Marketing</option><option>Comercial</option><option>Recursos Humanos</option></select></div><div class="field"><label for="job-model">Modelo de trabalho</label><select id="job-model" name="model"><option>Híbrido</option><option>Remoto</option><option>Presencial</option></select></div><div class="field full"><label for="job-description">Resumo da vaga</label><textarea id="job-description" name="description" placeholder="Descreva brevemente o desafio da posição."></textarea></div></div><div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancelar</button><button class="primary-button" type="submit">Criar vaga</button></div></form>`);
}

function candidateModal(stage) {
  modal(`<div class="modal-header"><div><h2>Adicionar candidato</h2><p>O candidato entrará na etapa de ${escapeHtml(stage)}.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><form id="candidate-form" class="modal-form"><input type="hidden" name="stage" value="${escapeHtml(stage)}" /><div class="form-grid"><div class="field full"><label for="candidate-name">Nome completo</label><input id="candidate-name" name="name" required placeholder="Ex.: Juliana Martins" /></div><div class="field"><label for="candidate-role">Vaga</label><input id="candidate-role" name="role" value="Analista de Produto" required /></div><div class="field"><label for="candidate-date">Entrada</label><input id="candidate-date" name="date" value="Hoje" required /></div></div><div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancelar</button><button class="primary-button" type="submit">Adicionar ao funil</button></div></form>`);
}

function announcementModal() {
  modal(`<div class="modal-header"><div><h2>Novo comunicado</h2><p>Publique uma mensagem para as pessoas certas.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><form id="announcement-form" class="modal-form"><div class="form-grid"><div class="field full"><label for="announcement-title">Título</label><input id="announcement-title" name="title" required placeholder="Ex.: Atualização importante" /></div><div class="field full"><label for="announcement-body">Mensagem</label><textarea id="announcement-body" name="body" required placeholder="Escreva o comunicado que será enviado ao time."></textarea></div><div class="field"><label for="announcement-audience">Público</label><select id="announcement-audience" name="audience"><option>Toda a empresa</option><option>Colaboradores ativos</option><option>Gestores</option><option>Recursos Humanos</option></select></div><div class="field"><label for="announcement-icon">Tipo</label><select id="announcement-icon" name="icon"><option value="◉">Comunicado</option><option value="✦">Novidade</option><option value="♡">Benefício</option></select></div></div><div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancelar</button><button class="primary-button" type="submit">Publicar comunicado</button></div></form>`);
}

function employeeDetail(employee) {
  modal(`<div class="modal-header"><div><h2>Perfil do colaborador</h2><p>Informações resumidas e status atual.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><div class="detail-card"><div class="detail-identity">${avatar(employee)}<div><h3>${escapeHtml(employee.name)}</h3><p>${escapeHtml(employee.role)} • ${escapeHtml(employee.department)}</p></div>${statusPill(employee.status)}</div><div class="detail-grid"><div><small>E-mail</small><b>${escapeHtml(employee.email)}</b></div><div><small>Admissão</small><b>${formatDate(employee.admission)}</b></div><div><small>Gestor direto</small><b>${escapeHtml(employee.manager)}</b></div><div><small>Saldo de férias</small><b>${escapeHtml(employee.vacation || "30 dias")}</b></div></div><div class="modal-footer"><button class="secondary-button" data-action="close-modal">Fechar</button><button class="primary-button" data-action="open-leave-modal">Registrar ausência</button></div></div>`);
}

function privacyPlanModal() {
  modal(`<div class="modal-header"><div><h2>Plano seguro de importação</h2><p>O cadastro de pessoas só deve começar em ambiente autenticado e privado.</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><div class="detail-card"><div class="implementation-plan"><div><span>1</span><p><b>Restringir o acesso</b><small>Exigir login antes de exibir diretório, organograma nominativo, documentos ou solicitações.</small></p></div><div><span>2</span><p><b>Conectar Supabase</b><small>Usar Auth, Postgres com RLS, Storage privado e registros de auditoria.</small></p></div><div><span>3</span><p><b>Importar em área de staging</b><small>Manter as fontes separadas até cada registro receber um identificador interno e passar por validação.</small></p></div><div><span>4</span><p><b>Publicar por perfil</b><small>RH, gestores e colaboradores visualizam somente o que sua função permite.</small></p></div></div><div class="modal-note"><b>Importante:</b> não suba CPF, PIS, horários, admissão, aniversários ou arquivos de origem para o repositório público ou para este front-end.</div><div class="modal-footer"><button class="primary-button" data-action="close-modal">Entendi</button></div></div>`);
}

function toast(message) {
  const toastElement = document.createElement("div");
  toastElement.className = "toast";
  toastElement.innerHTML = `<span>✓</span>${escapeHtml(message)}`;
  toastRoot.append(toastElement);
  setTimeout(() => toastElement.remove(), 3600);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-view], [data-view-link]");
  if (!target) return;
  if (target.dataset.view) { currentView = target.dataset.view; document.querySelector("#sidebar").classList.remove("open"); render(); return; }
  if (target.dataset.viewLink) { currentView = target.dataset.viewLink; render(); return; }
  const action = target.dataset.action;
  if (action === "toggle-sidebar") document.querySelector("#sidebar").classList.toggle("open");
  if (action === "toggle-notifications") document.querySelector("#notification-popover").classList.toggle("hidden");
  if (action === "mark-read") { document.querySelector(".notification-button b")?.remove(); toast("Notificações marcadas como lidas."); }
  if (action === "quick-add" || action === "open-employee-modal" || action === "open-privacy-plan") privacyPlanModal();
  if (action === "open-leave-modal") leaveModal();
  if (action === "open-job-modal") jobModal();
  if (action === "open-candidate-modal") candidateModal(target.dataset.stage);
  if (action === "open-announcement-modal") announcementModal();
  if (action === "close-modal") {
    // Só fecha ao clicar no fundo ou em um controle de fechamento; cliques no formulário não devem dispensar o modal.
    if (!target.classList.contains("modal-backdrop") || event.target === target) closeModal();
  }
  if (action === "employee-detail") { const employee = personById(target.dataset.id); if (employee) employeeDetail(employee); }
  if (action === "approve-leave" || action === "reject-leave") { const request = state.leaveRequests.find((item) => String(item.id) === target.dataset.id); if (request) { request.status = action === "approve-leave" ? "Aprovado" : "Reprovado"; saveState(); render(); toast(action === "approve-leave" ? "Solicitação aprovada com sucesso." : "Solicitação recusada."); } }
  if (action === "export-employees") { toast("Exportação preparada. Em uma integração real, o arquivo será baixado aqui."); }
  if (action === "download-document") { toast(`${target.dataset.title} está pronto para download.`); }
  if (action === "upload-document") { toast("Envio de documento disponível na próxima integração com armazenamento seguro."); }
  if (action === "announcement-detail") toast("Detalhes do comunicado disponíveis no modo completo.");
  if (action === "start-cycle") toast("Novo ciclo de avaliação criado como rascunho.");
  if (action === "toggle-switch") target.classList.toggle("on");
  if (action === "reset-demo") resetState();
  if (action === "company-menu" || action === "profile-menu") toast("Troca de contexto disponível na versão conectada.");
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!form.matches("#employee-form, #leave-form, #job-form, #candidate-form, #announcement-form")) return;
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (form.id === "employee-form") {
    state.employees.unshift({ id: Date.now(), ...data, color: palette[state.employees.length % palette.length], birthday: "—", vacation: "30 dias" });
    state.activity.unshift({ icon: "＋", tone: "green", title: `${data.name} foi adicionado(a)`, note: `${data.department} • ${data.role}`, time: "Agora" });
    toast("Colaborador adicionado ao RH Flow.");
  }
  if (form.id === "leave-form") {
    if (new Date(data.end) < new Date(data.start)) { toast("A data final deve ser igual ou posterior à data inicial."); return; }
    state.leaveRequests.unshift({ id: Date.now(), ...data });
    toast("Solicitação registrada com sucesso.");
  }
  if (form.id === "job-form") {
    toast(`A vaga “${data.title}” foi criada como rascunho.`);
  }
  if (form.id === "candidate-form") {
    state.candidates.push({ id: Date.now(), ...data, color: palette[state.candidates.length % palette.length] });
    toast("Candidato adicionado ao funil.");
  }
  if (form.id === "announcement-form") {
    state.announcements.unshift({ id: Date.now(), ...data, date: "Agora", reads: "0 de 52 leram" });
    toast("Comunicado publicado para o público selecionado.");
  }
  saveState();
  closeModal();
  render();
});

document.querySelector("#global-search").addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const query = event.target.value.trim().toLowerCase();
  if (!query) return;
  const person = state.employees.find((employee) => employee.name.toLowerCase().includes(query));
  if (person) { currentView = "employees"; employeeFilter = person.name; render(); toast(`Encontramos ${person.name}.`); } else { toast("Nenhum resultado encontrado na demonstração."); }
});

render();

