const LEGACY_DEMO_STORAGE_KEY = 'tudo-belo-rh-demo-v2';
const palette = ['#405c8a', '#a86d5c', '#5b9a85', '#8b6eb9', '#ca8756', '#547caf', '#a45d83', '#698b57'];

// Diretório consolidado da Listagem Simples em 13/10/2026.
// Campos limitados a nome, cargo e departamento.
const roster = [
  ['Aline Araujo Pereira', 'Auxiliar de Serviços Gerais', 'RH'],
  ['Ana Caroline Castro dos Santos', 'Analista de SAC', 'Logística'],
  ['Ana Raquel Campos de Oliveira', 'Analista de Pós de Vendas', 'Logística'],
  ['Anna Larissa Pedrosa Elias', 'Analista de Controladoria', 'Financeiro'],
  ['Arthur Vinicios Vieira', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Bruno Rodrigues de Brito', 'Consultor(a) de Vendas Internas', 'Injetáveis'],
  ['Cleber Frizo', 'Supervisor de Logística', 'Logística'],
  ['Cristiane Meira Gomes', 'Consultor(a) de Vendas Internas', 'Injetáveis'],
  ['Daniele Fernandes Pereira da Silva', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['David Dias de Souza', 'Consultor(a) de Vendas Internas', 'Injetáveis'],
  ['Edilson da Rocha', 'Analista de Crédito', 'Crédito e Cobrança'],
  ['Eleusa de Freitas Silva', 'Auxiliar de Serviços Gerais', 'RH'],
  ['Eliel Rodrigues Rabelo Junior', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Elisa Sjobom Silva', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Fabio Fernandes da Silva', 'Aux. de Estoque I', 'Logística'],
  ['Guilherme Barros Nunes', 'Aux. de Estoque I', 'Logística'],
  ['Guilherme de Oliveira Cavalcante', 'Consultor(a) de Vendas Internas', 'Comercial Taguatinga'],
  ['Henrique Teixeira Teles', 'Analista Financeiro', 'Financeiro'],
  ['Jennifer Tavares de Souza', 'Analista de Contas a Pagar', 'Financeiro'],
  ['Jessika Gomes Rocha', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Jorge Carneiro Castilho', 'Aux. de Estoque I', 'Logística'],
  ['Julia Angela de Rezende e Silva', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Julia Gabrielly Carvalho da Silva', 'Assistente de Dep. Pessoal I', 'RH'],
  ['Juscidalia Moreira Moura', 'Assistente Comercial I', 'Injetáveis'],
  ['Kelly Ferraz de Sousa', 'Consultor(a) de Vendas Internas', 'Injetáveis'],
  ['Leonardo de Sousa Novais', 'Consultor(a) de Vendas Internas', 'Eletroterapia'],
  ['Lidiane Maria de Souza', 'Auxiliar de Serviços Gerais', 'RH'],
  ['Lorrainy Souza Alves', 'Social Media', 'Marketing'],
  ['Lucas de Moura Nogueira', 'Motorista', 'Logística'],
  ['Marcus Vinicius de Souza Mesquita', 'Consultor de Vendas e Locação', 'Comercial Taguatinga'],
  ['Natalia Moura Fe Fernandes', 'Consultor(a) de Vendas Internas', 'SDR'],
  ['Nayane de Jesus Souza', 'SDR', 'SDR'],
  ['Paulo Gomes de Melo', 'Entregador', 'Logística'],
  ['Polliana Carla Silva e Silva', 'Analista Financeiro', 'Crédito e Cobrança'],
  ['Priscilla Freire Fernandes', 'Analista Financeiro', 'Financeiro'],
  ['Rafael Luis Carbonezi', 'Assistente Logística I', 'Logística'],
  ['Sinval Nunes Fernandes', 'Aux. de Estoque I', 'Logística'],
  ['Sinval Pereira Ferreira', 'Assistente Comercial I', 'Eletroterapia'],
  ['Tatiane Rodrigues das Neves Teles', 'Assistente Comercial II', 'Eletroterapia'],
  ['Valeria Rodrigues Lima', 'Assistente Comercial I', 'Comercial Taguatinga'],
  ['Vinicios Rafael da Costa', 'Motorista', 'Logística'],
  ['Walber de Oliveira', 'Consultor(a) de Vendas Internas', 'Injetáveis'],
  ['Wanesssa Carolina Gomes Teles', 'Analista de Crédito', 'Financeiro'],
  ['Warley Ferreira Leite', 'Analista de Eventos', 'Marketing'],
  ['Weber Ferreira Souza', 'Analista de Compras II', 'Logística'],
  ['Ygor Ribeiro de Assis', 'Motorista', 'Locação']
];

const REAL_EMPLOYEES = roster.map(function (row, index) {
  return { id: index + 1, name: row[0], role: row[1], department: row[2], color: palette[index % palette.length] };
});

const orgSnapshot = {
  referenceDate: '13 de outubro de 2026',
  areas: [
    { name: 'Gente & Gestão', focus: 'Treinamento técnico · Departamento pessoal · Serviços gerais · Aprendizagem', icon: '♙' },
    { name: 'Logística', focus: 'Estoque · Transporte · Operação e atendimento', icon: '↝' },
    { name: 'Financeiro & Crédito', focus: 'Financeiro · Crédito e cobrança · Controladoria', icon: '◈' },
    { name: 'Comercial — Eletroterapia', focus: 'Coordenação · Consultoria comercial · Assistência', icon: '◇' },
    { name: 'Comercial — Injetáveis', focus: 'Coordenação · Consultoria comercial · Assistência', icon: '◇' },
    { name: 'SDR', focus: 'Supervisão · Qualificação de oportunidades', icon: '◌' },
    { name: 'Marketing & TI', focus: 'Martech · Marketing · Tecnologia', icon: '✦' },
    { name: 'Taguatinga & Locação', focus: 'Vendas · Locação · Entregas', icon: '⌁' }
  ],
  sources: [
    { title: 'Diretório de colaboradores', summary: '46 registros organizados', detail: 'Exibe somente nome, cargo e departamento.', status: 'Organizado', tone: 'ready' },
    { title: 'Organograma corporativo', summary: '8 núcleos estruturais mapeados', detail: 'Referência para áreas, camadas e fluxo de reporte.', status: 'Referência', tone: 'ready' },
    { title: 'Relatório de aniversariantes', summary: '83 ocorrências para conciliação', detail: 'Não foi usado para criar ou complementar cadastros no diretório.', status: 'Não incorporado', tone: 'review' }
  ]
};

let currentView = 'employees';
let employeeFilter = '';
let selectedDepartment = 'Todos';

const content = document.querySelector('#app-content');
const title = document.querySelector('#page-title');
const eyebrow = document.querySelector('#page-eyebrow');
const modalRoot = document.querySelector('#modal-root');
const toastRoot = document.querySelector('#toast-root');

const viewInfo = {
  dashboard: { title: 'Visão geral', eyebrow: 'TUDO BELO / GENTE & GESTÃO' },
  employees: { title: 'Colaboradores', eyebrow: 'GESTÃO DE PESSOAS' },
  timeoff: { title: 'Férias e ausências', eyebrow: 'GESTÃO DE PESSOAS' },
  recruitment: { title: 'Recrutamento', eyebrow: 'GESTÃO DE PESSOAS' },
  performance: { title: 'Desempenho', eyebrow: 'GESTÃO DE PESSOAS' },
  organization: { title: 'Estrutura organizacional', eyebrow: 'ORGANIZAÇÃO' },
  documents: { title: 'Documentos', eyebrow: 'ORGANIZAÇÃO' },
  communications: { title: 'Comunicações', eyebrow: 'ORGANIZAÇÃO' },
  settings: { title: 'Configurações', eyebrow: 'ORGANIZAÇÃO' }
};

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, function (character) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character];
  });
}

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  return ((parts[0] || '')[0] || '') + ((parts[parts.length - 1] || '')[0] || '');
}

function avatar(employee) {
  return '<span class="avatar" style="background:' + employee.color + '">' + escapeHtml(initials(employee.name).toUpperCase()) + '</span>';
}

function departmentCounts() {
  const counts = new Map();
  REAL_EMPLOYEES.forEach(function (employee) {
    counts.set(employee.department, (counts.get(employee.department) || 0) + 1);
  });
  return Array.from(counts, function (entry) {
    return { name: entry[0], count: entry[1] };
  }).sort(function (a, b) {
    return b.count - a.count || a.name.localeCompare(b.name, 'pt-BR');
  });
}

function filteredEmployees() {
  const term = normalize(employeeFilter.trim());
  return REAL_EMPLOYEES.filter(function (employee) {
    const inDepartment = selectedDepartment === 'Todos' || employee.department === selectedDepartment;
    const searchable = normalize(employee.name + ' ' + employee.role + ' ' + employee.department);
    return inDepartment && (!term || searchable.includes(term));
  });
}

function pageIntro(heading, copy, action, showDate) {
  return '<div class="page-intro"><div><h2>' + escapeHtml(heading) + '</h2><p>' + escapeHtml(copy) + '</p></div><div>' +
    (showDate ? '<span class="date-label">◷ Referência: ' + orgSnapshot.referenceDate + '</span>' : '') + (action || '') + '</div></div>';
}

function render() {
  const info = viewInfo[currentView] || viewInfo.employees;
  title.textContent = info.title;
  eyebrow.textContent = info.eyebrow;
  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.classList.toggle('active', item.dataset.view === currentView);
  });

  const renderers = {
    dashboard: renderDashboard,
    employees: renderEmployees,
    organization: renderOrganization,
    timeoff: function () { return renderUnavailable('Férias e ausências'); },
    recruitment: function () { return renderUnavailable('Recrutamento'); },
    performance: function () { return renderUnavailable('Desempenho'); },
    documents: function () { return renderUnavailable('Documentos'); },
    communications: function () { return renderUnavailable('Comunicações'); },
    settings: function () { return renderUnavailable('Configurações'); }
  };

  content.innerHTML = renderers[currentView]();
  const globalSearch = document.querySelector('#global-search');
  if (globalSearch) globalSearch.value = employeeFilter;
  bindViewControls();
}

function renderDashboard() {
  const departments = departmentCounts();
  const largestDepartment = Math.max.apply(null, departments.map(function (item) { return item.count; }));
  const roleCount = new Set(REAL_EMPLOYEES.map(function (employee) { return employee.role; })).size;
  const distribution = departments.map(function (item, index) {
    return '<div class="distribution-row"><span>' + escapeHtml(item.name) + '</span><div class="distribution-track"><i style="width:' +
      Math.round((item.count / largestDepartment) * 100) + '%;background:' + palette[index % palette.length] + '"></i></div><b>' + item.count + '</b></div>';
  }).join('');

  return pageIntro('Diretório organizado', 'Resumo da lista oficial de colaboradores com os campos mínimos para consulta.',
    '<button class="primary-button" type="button" data-view-link="employees"><span>♙</span>Ver colaboradores</button>', true) +
    '<div class="metric-grid">' +
      '<article class="metric-card"><header><span>Registros no diretório</span><span class="metric-icon blue">♙</span></header><strong>' + REAL_EMPLOYEES.length + '</strong><footer>Nome, cargo e departamento</footer></article>' +
      '<article class="metric-card"><header><span>Departamentos</span><span class="metric-icon green">⌘</span></header><strong>' + departments.length + '</strong><footer>Distribuição calculada da listagem</footer></article>' +
      '<article class="metric-card"><header><span>Funções listadas</span><span class="metric-icon purple">◈</span></header><strong>' + roleCount + '</strong><footer>Sem inferência de status ou liderança</footer></article>' +
      '<article class="metric-card"><header><span>Base de referência</span><span class="metric-icon amber">◷</span></header><strong>13 out</strong><footer>Relatório de 2026</footer></article>' +
    '</div>' +
    '<div class="dashboard-grid source-dashboard-grid">' +
      '<article class="card"><div class="card-title"><div><h3>Distribuição por departamento</h3><p>Contagem dos 46 registros organizados</p></div><button class="link-button" type="button" data-view-link="employees">Abrir diretório</button></div><div class="distribution-list">' + distribution + '</div></article>' +
      '<article class="card privacy-card-large"><div class="card-title"><div><h3>Dados mínimos</h3><p>Uso consciente da informação</p></div><span>⌾</span></div><p>Este diretório mostra somente as informações solicitadas para identificação profissional.</p><ul><li>Nome completo</li><li>Cargo ou função</li><li>Departamento</li></ul><button class="secondary-button full-width" type="button" data-action="open-privacy-plan">Ver escopo de privacidade</button></article>' +
    '</div>';
}

function employeeRows(employees) {
  if (!employees.length) {
    return '<tr><td colspan="3"><div class="empty-state"><b>Nenhum colaborador encontrado</b>Ajuste a busca ou o filtro de departamento.</div></td></tr>';
  }
  return employees.map(function (employee) {
    return '<tr><td><div class="employee-cell">' + avatar(employee) + '<div class="person-copy"><b>' + escapeHtml(employee.name) + '</b></div></div></td><td>' +
      escapeHtml(employee.role) + '</td><td>' + escapeHtml(employee.department) + '</td></tr>';
  }).join('');
}

function renderEmployees() {
  const departments = ['Todos'].concat(departmentCounts().map(function (item) { return item.name; }));
  const employees = filteredEmployees();
  const options = departments.map(function (department) {
    return '<option value="' + escapeHtml(department) + '"' + (department === selectedDepartment ? ' selected' : '') + '>' + escapeHtml(department) + '</option>';
  }).join('');

  return pageIntro('Diretório de colaboradores', 'Consulta de leitura dos registros organizados da Listagem Simples.', '', true) +
    '<div class="security-banner"><span class="metric-icon blue">⌾</span><div><b>Informações limitadas</b><p>Esta visualização contém apenas nome, cargo e departamento. Não há identificadores pessoais, horários, contatos ou datas individuais.</p></div></div>' +
    '<div class="toolbar"><label class="search-field"><span>⌕</span><input id="employee-search" type="search" value="' + escapeHtml(employeeFilter) + '" placeholder="Buscar por nome, cargo ou departamento" autocomplete="off" /></label><select class="filter-button" id="department-filter" aria-label="Filtrar por departamento">' + options + '</select></div>' +
    '<div class="card table-card"><table class="data-table"><thead><tr><th>Colaborador</th><th>Cargo</th><th>Departamento</th></tr></thead><tbody id="employee-table-body">' + employeeRows(employees) + '</tbody></table><div class="table-footer"><span id="employee-result-count">Exibindo ' + employees.length + ' de ' + REAL_EMPLOYEES.length + ' colaboradores</span><span>Dados de referência: 13 out 2026</span></div></div>';
}

function refreshEmployeeDirectory() {
  const employees = filteredEmployees();
  const tableBody = document.querySelector('#employee-table-body');
  const resultCount = document.querySelector('#employee-result-count');
  if (tableBody) tableBody.innerHTML = employeeRows(employees);
  if (resultCount) resultCount.textContent = 'Exibindo ' + employees.length + ' de ' + REAL_EMPLOYEES.length + ' colaboradores';
}

function renderOrganization() {
  const areaCards = orgSnapshot.areas.map(function (area) {
    return '<article class="org-area"><span>' + area.icon + '</span><div><h4>' + escapeHtml(area.name) + '</h4><p>' + escapeHtml(area.focus) + '</p></div></article>';
  }).join('');
  const sourceCards = orgSnapshot.sources.map(function (source) {
    return '<div class="source-inventory-item"><span class="source-dot ' + source.tone + '"></span><div><h4>' + escapeHtml(source.title) + '</h4><b>' + escapeHtml(source.summary) + '</b><p>' + escapeHtml(source.detail) + '</p></div><span class="source-status ' + source.tone + '">' + escapeHtml(source.status) + '</span></div>';
  }).join('');

  return pageIntro('Estrutura organizacional', 'Leitura agregada das áreas mapeadas; as pessoas não são exibidas nesta visão.', '', true) +
    '<div class="security-banner"><span class="metric-icon blue">⌾</span><div><b>Visão agregada</b><p>O organograma organiza núcleos e frentes de trabalho sem adicionar relações nominais de reporte.</p></div></div>' +
    '<div class="metric-grid compact-metrics">' +
      '<article class="metric-card"><header><span>Núcleos mapeados</span><span class="metric-icon blue">⌘</span></header><strong>' + orgSnapshot.areas.length + '</strong><footer>Conforme organograma recebido</footer></article>' +
      '<article class="metric-card"><header><span>Registros organizados</span><span class="metric-icon green">♙</span></header><strong>' + REAL_EMPLOYEES.length + '</strong><footer>Somente campos mínimos</footer></article>' +
      '<article class="metric-card"><header><span>Fontes consultadas</span><span class="metric-icon purple">▤</span></header><strong>' + orgSnapshot.sources.length + '</strong><footer>Sem arquivos brutos publicados</footer></article>' +
      '<article class="metric-card"><header><span>Base temporal</span><span class="metric-icon amber">◷</span></header><strong>2026</strong><footer>Referência de 13 de outubro</footer></article>' +
    '</div>' +
    '<div class="organization-layout"><article class="card"><div class="card-title"><div><h3>Áreas e frentes</h3><p>Estrutura consolidada a partir do organograma</p></div></div><div class="org-area-grid">' + areaCards + '</div></article>' +
      '<div class="org-side-stack"><article class="card"><div class="card-title"><div><h3>Leitura responsável</h3><p>Limites do diretório público</p></div></div><ul class="layer-list"><li><span>1</span><div><b>Dados profissionais mínimos</b><small>Nome, cargo e departamento.</small></div></li><li><span>2</span><div><b>Sem dados individuais extras</b><small>Não há contatos, documentos, horários ou datas pessoais.</small></div></li><li><span>3</span><div><b>Sem hierarquia nominativa</b><small>O organograma permanece em nível de áreas.</small></div></li></ul></article><article class="card caution-card"><div class="card-title"><div><h3>Escopo atual</h3><p>Consulta e organização</p></div><span>!</span></div><p>Os módulos operacionais só devem receber dados após autenticação e uma base privada configurada.</p></article></div></div>' +
    '<article class="card import-inventory"><div class="card-title"><div><h3>Inventário das fontes</h3><p>Como cada material foi tratado</p></div></div><div class="source-inventory">' + sourceCards + '</div></article>';
}

function renderUnavailable(moduleName) {
  return pageIntro(moduleName, 'Este módulo não exibe dados até estar ligado a uma base privada e autenticada.', '', false) +
    '<article class="card"><div class="empty-state"><b>Módulo em implantação</b>O diretório de colaboradores é a única área preenchida neste momento. Nenhum dado fictício é mostrado aqui.</div></article>';
}

function bindViewControls() {
  const employeeSearch = document.querySelector('#employee-search');
  const departmentFilter = document.querySelector('#department-filter');
  if (employeeSearch) {
    employeeSearch.addEventListener('input', function (event) {
      employeeFilter = event.currentTarget.value;
      refreshEmployeeDirectory();
    });
  }
  if (departmentFilter) {
    departmentFilter.addEventListener('change', function (event) {
      selectedDepartment = event.currentTarget.value;
      refreshEmployeeDirectory();
    });
  }
}

function modal(contentHtml) {
  modalRoot.innerHTML = '<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">' + contentHtml + '</section></div>';
  const closeButton = modalRoot.querySelector('[data-action="close-modal"]');
  if (closeButton) closeButton.focus();
}

function closeModal() {
  modalRoot.innerHTML = '';
}

function privacyPlanModal() {
  modal('<div class="modal-header"><div><h2 id="modal-title">Escopo de privacidade</h2><p>Informações publicadas neste diretório</p></div><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">×</button></div><div class="detail-card privacy-card-large"><p>O diretório foi limitado aos campos profissionais necessários para a consulta solicitada.</p><ul><li>Inclui somente nome, cargo e departamento.</li><li>Não inclui CPF, PIS, identificador interno, contato, horário, data de admissão ou aniversário.</li><li>Não declara status, gestor, filial ou relação de reporte.</li></ul><p class="modal-note">Para criar, editar ou consultar informações operacionais de RH, a próxima etapa é habilitar autenticação e banco de dados privado.</p></div>');
}

function toast(message) {
  const notice = document.createElement('div');
  notice.className = 'toast';
  notice.innerHTML = '<span>✓</span><div>' + escapeHtml(message) + '</div>';
  toastRoot.append(notice);
  window.setTimeout(function () { notice.remove(); }, 3600);
}

document.addEventListener('click', function (event) {
  const viewButton = event.target.closest('[data-view], [data-view-link]');
  if (viewButton) {
    const view = viewButton.dataset.view || viewButton.dataset.viewLink;
    if (viewInfo[view]) {
      currentView = view;
      const sidebar = document.querySelector('#sidebar');
      if (sidebar) sidebar.classList.remove('open');
      render();
      return;
    }
  }

  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === 'toggle-sidebar') document.querySelector('#sidebar').classList.toggle('open');
  if (action === 'toggle-notifications') document.querySelector('#notification-popover').classList.toggle('hidden');
  if (action === 'mark-read') {
    document.querySelector('#notification-popover').classList.add('hidden');
    toast('Notificações visualizadas.');
  }
  if (action === 'open-privacy-plan') privacyPlanModal();
  if (action === 'close-modal') closeModal();
  if (action === 'company-menu') toast('Organização atual: Tudo Belo Estética.');
  if (action === 'profile-menu') toast('Diretório disponível somente para consulta.');
});

document.querySelector('#global-search').addEventListener('keydown', function (event) {
  if (event.key !== 'Enter') return;
  employeeFilter = event.currentTarget.value;
  selectedDepartment = 'Todos';
  currentView = 'employees';
  render();
  window.requestAnimationFrame(function () {
    const employeeSearch = document.querySelector('#employee-search');
    if (employeeSearch) employeeSearch.focus();
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) sidebar.classList.remove('open');
  }
});

try {
  window.localStorage.removeItem(LEGACY_DEMO_STORAGE_KEY);
} catch {
  // A tela não depende de armazenamento local.
}

render();

