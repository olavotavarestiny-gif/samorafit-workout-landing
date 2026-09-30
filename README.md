# SamoraFit Workout — Landing Page e Checkout

Repositório exclusivo da landing page do **SamoraFit Workout Online**.

Este projeto não contém a landing page Fit 90. Inclui apenas:

- apresentação do Workout Online;
- quatro opções de acesso;
- recolha e validação dos dados do cliente;
- resumo do pedido;
- endpoint seguro para iniciar o checkout;
- ponto único para integração do gateway de pagamento.

## Executar localmente

```bash
npm install
npm run dev
```

A landing page abre em `http://localhost:3000/`.

## Rotas principais

- `/` — landing page Workout;
- `/workout/checkout?plan=1-month` — checkout com o plano selecionado;
- `POST /api/workout/checkout` — endpoint de criação da sessão de pagamento.

## Integração do pagamento

O layout e o fluxo de checkout estão prontos. O gateway ainda não está ligado e,
por segurança, o endpoint responde `503 GATEWAY_NOT_CONFIGURED` até que a equipa
implemente `lib/workout/payment-gateway.ts`.

O contrato do gateway e os requisitos de webhook, idempotência e confirmação de
pagamento estão descritos em `docs/WORKOUT-CHECKOUT-GATEWAY.md`.

## Testes e build

```bash
npm test
npm run build:vercel
```
