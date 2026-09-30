# Workout Online — publicação e checkout

A página inicial deste repositório é exclusivamente dedicada ao Workout Online.

- Landing page Workout: `/`
- Rota de compatibilidade: `/workout`
- Os botões dos planos abrem `/workout/checkout?plan=<id>` com o período escolhido.
- `/workout/checkout` recolhe e valida nome, email e telefone, apresenta o resumo e chama o endpoint do servidor.
- `POST /api/workout/checkout` está activo e preparado para receber o adaptador do gateway. Enquanto esse adaptador não for ligado, responde `503` com `GATEWAY_NOT_CONFIGURED` e não cria encomendas nem efectua cobranças.

O catálogo de preços permanece em `app/workout/catalog.ts`.

O ponto de integração da equipa de pagamentos é `lib/workout/payment-gateway.ts`. O contrato, as garantias já implementadas e o trabalho pendente estão descritos em [WORKOUT-CHECKOUT-GATEWAY.md](WORKOUT-CHECKOUT-GATEWAY.md).

## Vercel

Para verificar localmente, executar `npm run build:vercel`. A configuração usa Next.js e não exige variáveis de ambiente enquanto o gateway estiver no modo seguro, ainda não configurado. As futuras credenciais do fornecedor de pagamentos devem existir apenas no servidor.
