# Tudo Belo Pessoas

MVP navegável de Gestão de Pessoas para a Tudo Belo Estética.

## Incluído nesta primeira versão

- Dashboard de RH com indicadores, atividades e aprovações
- Cadastro e consulta de colaboradores
- Fluxo de férias e ausências com aprovação/reprovação
- Pipeline de recrutamento em Kanban
- Visão de desempenho e PDIs
- Biblioteca de documentos e comunicados
- Preferências de privacidade/LGPD demonstrativas
- Visão agregada da estrutura organizacional e do inventário de fontes
- Layout responsivo para desktop e celular
- Dados gravados no `localStorage` do navegador

## Organização das fontes recebidas

A tela **Estrutura organizacional** consolida somente informações agregadas:

- 8 núcleos mapeados no organograma
- 46 registros no relatório operacional de 13 de outubro de 2026
- 83 ocorrências no relatório de aniversariantes que ainda precisam de conciliação

Ela não contém nomes, e-mails, CPF, PIS, datas de admissão/nascimento, horários, arquivos de origem nem relações nominais de reporte. Os arquivos recebidos não são incluídos neste repositório nem na implantação pública.

## Como executar

Como não há dependências, basta abrir `index.html` no navegador. Para melhor experiência local, sirva a pasta com qualquer servidor HTTP estático.

Exemplo com Node.js:

```powershell
npx serve .
```

## Próxima etapa de produto

Esta é uma demonstração front-end. Antes de importar dados reais, restrinja o acesso e conecte:

- Supabase Auth para login e perfis;
- Postgres com Row Level Security (RLS) para RH, gestores e colaboradores;
- Storage privado para documentos;
- área de staging, identificador interno e revisão humana para conciliar as fontes;
- trilhas de auditoria e integrações com ponto, folha, assinatura digital e eSocial.

> Não use dados pessoais reais na versão demonstrativa.

