# Pagarme_MCP

Este repositório contém um agente IA no formato MCP (Model Context Prompt) para interagir com a API da Pagar.me v5.

## Funcionalidades

- Criação de pedidos e cobranças
- Gerenciamento de clientes e cartões
- Webhooks e notificações
- Split de pagamentos e transferências
- Assinaturas e planos de recorrência
- Antecipações e consulta de saldo

## Como usar

1. Configure a variável de ambiente `PAGARME_SECRET_KEY_BASE64` com sua chave codificada.
2. Importe o arquivo `agent.yaml` em plataformas como Smithery.ai, Claude Desktop ou Gemini CLI.
3. Utilize os endpoints disponíveis para consultar, criar e gerenciar recursos da API Pagar.me.

> Atenção: nunca exponha sua chave real em arquivos públicos.

## Estrutura

- `agent.yaml` – MCP com todos os endpoints e exemplos da API Pagar.me v5
- `.smithery.json` – Manifesto do projeto (opcional para integração automática)
