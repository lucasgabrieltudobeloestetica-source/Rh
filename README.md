# RH Flow

MVP navegável de um sistema de Gestão de Recursos Humanos para empresas brasileiras.

## Incluído nesta primeira versão

- Dashboard de RH com indicadores, atividades e aprovações
- Cadastro e consulta de colaboradores
- Fluxo de férias e ausências com aprovação/reprovação
- Pipeline de recrutamento em Kanban
- Visão de desempenho e PDIs
- Biblioteca de documentos e comunicados
- Preferências de privacidade/LGPD demonstrativas
- Layout responsivo para desktop e celular
- Dados gravados no `localStorage` do navegador

## Como executar

Como não há dependências, basta abrir `index.html` no navegador. Para melhor experiência local, sirva a pasta com qualquer servidor HTTP estático.

Exemplo com Node.js:

```powershell
npx serve .
```

## Próxima etapa de produto

Esta é uma demonstração front-end. Para produção, recomenda-se conectar autenticação, banco de dados, controle de permissões, armazenamento de documentos, trilhas de auditoria e integrações com ponto, folha, assinatura digital e eSocial.

> Não use dados pessoais reais na versão demonstrativa.

