# 🚀 LANDING PAGE - CONFIGURAÇÃO FINAL

## ✅ INSTALAÇÃO COMPLETA

Todas as 4 tarefas foram concluídas com sucesso!

### 📦 O que foi criado:

1. **API Backend** (`api/order.js`)
   - Serverless Function para processar pedidos
   - Integração com Dr.Cash API
   - Token e Stream Code já configurados

2. **Formulários Atualizados** (`index.html`)
   - 2 formulários convertidos para usar `/api/order`
   - Campo hidden `subacc` para rastreamento de ClickID
   - Method POST configurado

3. **Google Ads Tracking** (`index.html`)
   - Global Site Tag (gtag.js) instalado no `<head>`
   - Pixel de conversão configurado
   - Captura automática de `clickid` e `gclid`

4. **Modal de Sucesso** (`index.html`)
   - Modal moderno e responsivo
   - Aparece automaticamente após pedido bem-sucedido
   - Limpa a URL após exibição

---

## ⚠️ ATENÇÃO: VOCÊ PRECISA COMPLETAR ESTAS 2 CONFIGURAÇÕES

### 🔴 1. Google Ads ID (Obrigatório)

**Arquivo:** `index.html`

Procure por `AW-XXXXXXXXXX` (aparece 2 vezes) e substitua pelo seu **Google Ads ID real**.

**Localização no código:**
```html
<!-- Linha ~12 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>

<!-- Linha ~17 -->
gtag('config', 'AW-XXXXXXXXXX'); // SUBSTITUA AQUI
```

**Como encontrar seu Google Ads ID:**
1. Acesse Google Ads → Ferramentas → Medição → Conversões
2. O ID está no formato: `AW-123456789`

---

### 🔴 2. Label de Conversão (Obrigatório)

**Arquivo:** `index.html`

Procure por `AW-XXXXXXXXXX/YYYYYYYYYY` e substitua pelo seu **Label completo de conversão**.

**Localização no código:**
```javascript
// Linha ~932 aproximadamente
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYY', // SUBSTITUA AQUI
  'value': 39,
  'currency': 'EUR',
  'transaction_id': Date.now()
});
```

**Como encontrar seu Label:**
1. Acesse Google Ads → Ferramentas → Medição → Conversões
2. Clique na sua ação de conversão
3. Copie o valor "Tag de evento de conversão" (Ex: `AW-123456789/AbC123DeFg`)

---

## 💡 COMO USAR O CLICKID DO GOOGLE ADS

Quando você criar campanhas no Google Ads, adicione este parâmetro na URL de destino:

```
https://seusite.com/?clickid={gclid}
```

OU

```
https://seusite.com/?gclid={gclid}
```

O script captura automaticamente esse valor e envia para o Dr.Cash no campo `sub1`.

---

## 🧪 COMO TESTAR

### Teste Local (Sem servidor real):
1. Abra `index.html` no navegador
2. Preencha o formulário
3. **NOTA:** O envio falhará porque `/api/order` só funciona na Vercel

### Teste na Vercel (Recomendado):
1. Faça deploy na Vercel:
   ```bash
   vercel --prod
   ```
2. Acesse seu site na Vercel
3. Preencha e envie o formulário
4. Você será redirecionado com `?status=success`
5. O modal aparecerá automaticamente

### Teste de Conversão Google Ads:
1. Depois de fazer as alterações acima
2. Envie um pedido de teste
3. Vá em Google Ads → Ferramentas → Medição → Conversões
4. Verifique se a conversão apareceu (pode levar até 24h)

---

## 📋 DADOS CONFIGURADOS

✅ **Dr.Cash Token:** `YTFKNZQZMZETNMIXZS00ZGM4LWI5NTCTYWYWZDI5ZJAYMMNJ`  
✅ **Stream Code:** `ucqfl`  
✅ **Preço do Produto:** `39`  
✅ **Moeda:** `EUR`  
❌ **Google Ads ID:** `AW-XXXXXXXXXX` ← **VOCÊ PRECISA ALTERAR**  
❌ **Label de Conversão:** `AW-XXXXXXXXXX/YYYYYYYYYY` ← **VOCÊ PRECISA ALTERAR**

---

## 🚀 PRÓXIMOS PASSOS

1. ✏️ Edite `index.html` e substitua os IDs do Google Ads
2. 📤 Faça commit das alterações no Git
3. 🌐 Deploy na Vercel
4. 🧪 Teste enviando um pedido
5. 📊 Monitore as conversões no Google Ads

---

## 🆘 TROUBLESHOOTING

### Problema: Formulário não envia
- ✓ Verifique se está na Vercel (não funciona localmente)
- ✓ Confirme que `api/order.js` existe
- ✓ Veja os logs no Vercel Dashboard

### Problema: Conversão não aparece no Google Ads
- ✓ Confirme que substituiu `AW-XXXXXXXXXX`
- ✓ Confirme que substituiu o Label completo
- ✓ Aguarde até 24h (conversões podem demorar)
- ✓ Use Google Tag Assistant para verificar

### Problema: Modal não aparece
- ✓ Verifique se a URL contém `?status=success`
- ✓ Abra o Console do navegador (F12) e veja erros

---

## 📞 SUPORTE

Se precisar de ajuda:
1. Verifique os logs da Vercel
2. Abra o Console do navegador (F12) para ver erros JavaScript
3. Teste a API diretamente: `https://seusite.vercel.app/api/order?name=Test&phone=123456789`

**Boa sorte com suas campanhas! 🎉**
