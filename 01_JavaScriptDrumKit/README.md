# 01 - JavaScript Drum Kit

Nesse projeto eu contruí uma bateria virtual, onde cada tecla do teclado toca um som diferente. Funciona no celular também.

## O que eu aprendi

- Atributos `data-*` no HTML (atributos personalizados)
- Atributo `preload="auto"` nas tags `<audio>` (para carregar os sons junto com a página)
- Voltar áudio para o início com `audio.currentTime = 0` (JS), podendo assim tocar o áudio várias vezes seguidas
- media querie `@media (hover: hover) {}`: eu coloco dentro dessa media querie o CSS de hover, pois no celular não tem hover, então o CSS não é aplicado. Assim, eu consigo tratar o hover no celular. 

## O que eu pratiquei

- Eventos de teclado e click (mouse e touch)
- Usei a tag `<kbd>` para mostrar as teclas (poderia ter usado um `<p>`, mas assim fica mais semântico)
- `webkit-tap-highlight-color: color;` para mudar a cor do highlight do click no celular;
- `user-select: none;` para não selecionar o texto ao clicar nele
