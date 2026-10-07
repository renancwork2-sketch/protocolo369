
      (function() {
        try {
          const atomiStaticPageMeta = {"pageId":"iL5Xd40hcY3xqNI5UmjR","pageName":"369 [VSL] - BR+ TESTE A/B","pageDomain":"www.prosperidademagnetica.online"};
          const ATOMI_PLATFORM_NOTIFY_URL = "https://apido.atomicat-api.com/platform/notify/s/fe";

          function atomiSerializeError(error) {
            try {
              if (!error) return { message: "Unknown error" };
              if (typeof error === "string") return { message: error };
              if (error instanceof Error) {
                return {
                  name: error.name,
                  message: error.message,
                  stack: error.stack,
                };
              }
              return {
                message: error?.message || "Non-Error exception",
                raw: JSON.stringify(error),
              };
            } catch (serializationError) {
              return {
                message: "Failed to serialize error",
                serializationError: serializationError?.message,
              };
            }
          }

          function atomiReportError(error, extra = {}) {
            try {
              const payload = {
                domain: window?.location?.hostname || atomiStaticPageMeta?.pageDomain || "",
                pageUrl: window?.location?.href || "",
                pagePath: window?.location?.pathname || "",
                referrer: document?.referrer || "",
                userAgent: navigator?.userAgent || "",
                language: navigator?.language || "",
                viewport: {
                  width: window?.innerWidth,
                  height: window?.innerHeight,
                },
                timestamp: new Date().toISOString(),
                pageMeta: atomiStaticPageMeta,
                error: atomiSerializeError(error),
                extra,
              };

              const payloadString = JSON.stringify(payload);
              if (navigator?.sendBeacon) {
                const blob = new Blob([payloadString], { type: "text/plain;charset=UTF-8" });
                navigator.sendBeacon(ATOMI_PLATFORM_NOTIFY_URL, blob);
                return;
              }

              fetch(ATOMI_PLATFORM_NOTIFY_URL, {
                method: "POST",
                mode: "no-cors",
                keepalive: true,
                headers: {
                  "Content-Type": "text/plain;charset=UTF-8",
                },
                body: payloadString,
              }).catch(() => {});
            } catch (reportingError) {
              console.log(reportingError);
            }
          }

          if (typeof window !== "undefined") {
            window.atomiReportError = atomiReportError;
          }
        } catch (error) {
          console.log(error);
        }
      })();
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      function atomiGetVturbSrc() {
        try {
          var src = "";

          try {
            var pageUrl = new URL(window.location.href);
            src = pageUrl.searchParams.get("src") || "";
            if (src) return location.search != "" ? "&src=" + src : "?src=" + src;
          } catch (e) {
            console.log(e);
          }

          try {
            var links = document.querySelectorAll('a[href*="src="]');
            for (var i = 0; i < links.length; i++) {
              try {
                var u = new URL(links[i].href);
                var s = u.searchParams.get("src");
                if (s) return location.search != "" ? "&src=" + s : "?src=" + s;
              } catch (e2) {
                console.log(e2);
              }
            }
          } catch (e1) {
            console.log(e1);
          }

          return "";
        } catch (error) {
          console.log(error);
        }
      }
    
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          function scheduleRandomUpdate(element) {
            const min = parseInt(element.dataset.min) || 400;
            const max = parseInt(element.dataset.max) || 700;
            
            const randomDelay = Math.random() * 3000;
            
            setTimeout(() => {
              try {
                let current = parseInt(element.innerText);
                
                // Initialize if not a valid number
                if (isNaN(current)) {
                  current = atomiRdn(min, max);
                }
                
                // Apply increment (-1 to +2) and clamp within bounds
                const increment = atomiRdn(-5, 7);
                const newValue = Math.max(min, Math.min(max, current + increment));
                
                element.innerText = newValue.toString();
                
                // Schedule the next update with a new random delay
                scheduleRandomUpdate(element);
              } catch (error) {
                console.log('Random update error:', error);
              }
            }, randomDelay);
          }

          // Initialize random updates for each element
          document.querySelectorAll('.atomicat-random').forEach(el => {
            scheduleRandomUpdate(el);
          });
        } catch (error) {
          console.log(error);
        }
      })();
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
  (function() {
    try {
      const list = [{"compKey":"333d10b","misc":{"items":[{"bg":"#e2b6f5","chat":"a live já começou? Cheguei agora","time":"00:03","user":"Ana Ribeiro"},{"bg":"#ff9a9a","chat":"cheguei bem na hora?","time":"00:05","user":"Carlos Almeida"},{"bg":"#b4a2f4","chat":"estou ouvindo aqui e já fiquei curiosa","time":"00:07","user":"Gabriel Santos"},{"bg":"#a0f1e8","chat":"essa live apareceu para mim do nada","time":"00:10","user":"Paula Ribeiro"},{"bg":"#96e6a1","chat":"eu quase passei direto, mas alguma coisa me fez parar","time":"00:13","user":"Cláudio Ferreira"},{"bg":"#a3d9a0","chat":"cheguei agora e quero entender tudo sobre o 369","time":"00:16","user":"Helena Castro"},{"bg":"#e0e0e0","chat":"parece que eu encontrei essa live no momento certo","time":"00:20","user":"Alan Carvalho"},{"bg":"#3b82f6","chat":"Não vou sair até entender como isso funciona","time":"00:24","user":"Miguel Oliveira"},{"bg":"#9aebec","chat":"estou assistindo com meu marido","time":"00:28","user":"Kelly Martins"},{"bg":"#fecaca","chat":"Enviei essa live para minha irmã","time":"00:32","user":"Tiago Almeida"},{"bg":"#c2f5d4","chat":"o chat está muito rápido kkk","time":"00:38","user":"Ana Clara"},{"bg":"#f9c74f","chat":"tem muita gente aqui buscando uma mudança","time":"00:45","user":"Gustavo Pereira"},{"bg":"#ff705b","chat":"Hiroshi, estou prestando atenção em cada palavra","time":"00:52","user":"Camila Torres"},{"bg":"#a1e9e8","chat":"Nunca fico tanto tempo em uma live, mas essa me prendeu","time":"01:00","user":"Priscila Martins"},{"bg":"#f9a8d4","chat":"Estou vendo tudo pelo celular","time":"01:08","user":"Leonardo Alves"},{"bg":"#a1a1f7","chat":"já peguei papel e caneta","time":"01:16","user":"Adriana Ramos"},{"bg":"#81e6d9","chat":"quero acompanhar desde o começo","time":"01:25","user":"Elisa Fernandes"},{"bg":"#fdba74","chat":"Essa live parece diferente","time":"01:35","user":"Lorena Campos"},{"bg":"#f6a9fa","chat":"cheguei agora e já senti que o assunto é forte","time":"01:45","user":"Milena Torres"},{"bg":"#a5b4fc","chat":"não acredito que quase perdi essa explicação","time":"01:55","user":"Elaine Batista"},{"bg":"#f4a1a8","chat":"Alguém mais sentiu que precisava estar aqui hoje?","time":"02:05","user":"Rafaela Mendes"},{"bg":"#a4f9f9","chat":"Parece que essa mensagem encontrou a gente","time":"02:15","user":"Ana Luiza"},{"bg":"#b2a2d7","chat":"Vou ficar aqui até o final","time":"02:25","user":"Márcia Fernandes"},{"bg":"#c4c4c4","chat":"Hiroshi, continua... está muito interessante","time":"02:38","user":"Rafael Teixeira"},{"bg":"#60a5fa","chat":"quero entender por que justamente os números 3, 6 e 9","time":"02:52","user":"Fernanda Costa"},{"bg":"#9aabac","chat":"Sabe que nunca tinha ouvido falar disso dessa maneira...","time":"03:05","user":"Juliana Rocha"},{"bg":"#5bdba8","chat":"Essa live está muito boa","time":"03:20","user":"André Lopes"},{"bg":"#b4a1f7","chat":"Estou curiosa demais.. kkk","time":"03:35","user":"Beatriz Nunes"},{"bg":"#b9d6e6","chat":"Já percebi que não vai ser mais uma explicação comum sobre lei da atração.","time":"03:50","user":"Paulo Mendes"},{"bg":"#d6d6d6","chat":"estou pronta para aprender","time":"04:05","user":"Luciana Ferreira"},{"bg":"#e2b6f5","chat":"Minha vida financeira está travada há anos... quero mudar isso","time":"04:20","user":"Renata Barros"},{"bg":"#ff9a9a","chat":"eu trabalho muito, mas parece que nunca saio do lugar","time":"04:35","user":"Débora Cardoso"},{"bg":"#b4a2f4","chat":"Quero parar de viver apenas para pagar contas...","time":"04:50","user":"Sérgio Batista"},{"bg":"#a0f1e8","chat":"Meu pedido é conseguir um emprego melhor.","time":"05:05","user":"Tiago Ramos"},{"bg":"#96e6a1","chat":"quero quitar todas as minhas dívidas","time":"05:20","user":"Vanessa Freitas"},{"bg":"#a3d9a0","chat":"Meu maior desejo é conquistar minha casa própria","time":"05:35","user":"Leandro Ribeiro"},{"bg":"#e0e0e0","chat":"quero ter dinheiro para ajudar minha família","time":"05:50","user":"Cristina Alves"},{"bg":"#3b82f6","chat":"Quero recuperar minha paz financeira...","time":"06:05","user":"Vinícius Tavares"},{"bg":"#9aebec","chat":"parece que o Hiroshi está falando diretamente comigo...","time":"06:20","user":"Daniel Correia"},{"bg":"#fecaca","chat":"estou cansada de começar o mês já preocupada com contas...","time":"06:35","user":"Silvana Duarte"},{"bg":"#c2f5d4","chat":"Essa parte sobre sentir que a vida não avança mexeu comigo","time":"06:50","user":"Viviane Lima"},{"bg":"#f9c74f","chat":"Eu me esforço, mas os resultados nunca aparecem como deveriam... triste demais","time":"07:10","user":"Nelson Duarte"},{"bg":"#ff705b","chat":"Quero mudar meu padrão financeiro","time":"07:30","user":"Marcos Vinícius"},{"bg":"#a1e9e8","chat":"Preciso de uma oportunidade de trabalho, estou com aluguel atrasado","time":"07:50","user":"Leandro Costa"},{"bg":"#f9a8d4","chat":"meu pedido é sair das dívidas.","time":"08:10","user":"Anderson Silva"},{"bg":"#a1a1f7","chat":"Quero parar de viver com medo do futuro...","time":"08:30","user":"Rodrigo Martins"},{"bg":"#81e6d9","chat":"minha palavra é abundância","time":"08:50","user":"Aline Fernandes"},{"bg":"#fdba74","chat":"Meu pedido é prosperidade","time":"09:10","user":"Rafael Barbosa"},{"bg":"#f6a9fa","chat":"quero saúde e estabilidade para minha família","time":"09:30","user":"Tatiane Soares"},{"bg":"#a5b4fc","chat":"quero amor, dinheiro e tranquilidade.","time":"09:50","user":"Cláudio Rocha"},{"bg":"#f4a1a8","chat":"Meu pedido é liberdade financeira","time":"10:10","user":"Mariana Melo"},{"bg":"#a4f9f9","chat":"quero atrair mais clientes para o meu negócio","time":"10:30","user":"Henrique Lima"},{"bg":"#b2a2d7","chat":"Preciso de uma virada ainda este ano","time":"10:50","user":"Adriano Costa"},{"bg":"#c4c4c4","chat":"Estou desempregada e essa parte falou muito comigo...","time":"11:10","user":"Kelly Andrade"},{"bg":"#60a5fa","chat":"quero romper esse ciclo de escássez.","time":"11:35","user":"Diego Pereira"},{"bg":"#9aabac","chat":"cansei de ver o dinheiro chegar e desaparecer","time":"12:00","user":"Rita Carvalho"},{"bg":"#5bdba8","chat":"Quero construir uma vida mais próspera","time":"12:25","user":"Fábio Gomes"},{"bg":"#b4a1f7","chat":"Eu também sinto que algo bloqueia meus resultados","time":"12:50","user":"Larissa Cunha"},{"bg":"#b9d6e6","chat":"tenho sonhos, mas parece que tudo fica sempre para depois","time":"13:15","user":"Gustavo Nascimento"},{"bg":"#d6d6d6","chat":"quero parar de sobreviver e começar a viver","time":"13:40","user":"Isabela Monteiro"},{"bg":"#e2b6f5","chat":"Isso me deu esperança novamente","time":"14:05","user":"Mauro Henrique"},{"bg":"#ff9a9a","chat":"Estou emocionada porque me identifiquei com tudo","time":"14:30","user":"Carla Batista"},{"bg":"#b4a2f4","chat":"parece que eu precisava ouvir exatamente isso hoje","time":"14:55","user":"Alex Moreira"},{"bg":"#a0f1e8","chat":"Nunca tinha entendido o 369 dessa maneira","time":"15:20","user":"Michele Araújo"},{"bg":"#96e6a1","chat":"agora estou começando a perceber que não é apenas repetir números.","time":"15:45","user":"Jorge Silva"},{"bg":"#a3d9a0","chat":"essa explicação sobre intenção, frequência e repetição fez todo o sentido.","time":"16:10","user":"Natália Campos"},{"bg":"#e0e0e0","chat":"Hiroshi, explica novamente a função do número 3","time":"16:35","user":"Rodrigo Pacheco"},{"bg":"#3b82f6","chat":"Quero entender por que o 6 representa essa etapa","time":"17:00","user":"Monique Santos"},{"bg":"#9aebec","chat":"e o número 9? Qual é o papel dele?","time":"17:25","user":"Everton Dias"},{"bg":"#fecaca","chat":"Agora sim entendi que existe uma sequência por trás do método","time":"17:50","user":"Raquel Fonseca"},{"bg":"#c2f5d4","chat":"Interessante perceber que cada etapa tem uma função específica...","time":"18:15","user":"Wesley Ferreira"},{"bg":"#f9c74f","chat":"isso parece muito mais estruturado do que eu imaginava","time":"18:40","user":"Talita Gomes"},{"bg":"#ff705b","chat":"não sabia que os números podiam ser usados assim...","time":"19:05","user":"Márcio Nunes"},{"bg":"#a1e9e8","chat":"Chocada de como tudo isso faz sentido...","time":"19:30","user":"Letícia Barbosa"},{"bg":"#f9a8d4","chat":"Agora entendo por que não basta apenas desejar...","time":"19:55","user":"Marcos Oliveira"},{"bg":"#a1a1f7","chat":"então o protocolo ajuda a manter a intenção mais clara?","time":"20:20","user":"Vitor Hugo"},{"bg":"#81e6d9","chat":"Estou anotando tudo!!!","time":"20:45","user":"Otávio Martins"},{"bg":"#fdba74","chat":"essa explicação sobre frequência foi muito forte.","time":"21:10","user":"Bianca Teixeira"},{"bg":"#f6a9fa","chat":"Hiroshi, mostra um exemplo prático.","time":"21:35","user":"Guilherme Souza"},{"bg":"#a5b4fc","chat":"Pode fazer pelo celular?","time":"22:00","user":"Denise Carvalho"},{"bg":"#f4a1a8","chat":"existe um horário específico?","time":"22:25","user":"Sandro Melo"},{"bg":"#a4f9f9","chat":"Agora entendi que o erro pode estar na forma de aplicar","time":"22:50","user":"Mirela Castro"},{"bg":"#b2a2d7","chat":"isso é mais profundo do que apenas pensar positivo","time":"23:15","user":"Ivan Rocha"},{"bg":"#c4c4c4","chat":"Gostei porque existe uma metodologia simples","time":"23:40","user":"Tânia Freitas"},{"bg":"#60a5fa","chat":"Finalmente uma explicação com começo, meio e fim","time":"24:05","user":"Pablo Nascimento"},{"bg":"#9aabac","chat":"É tão simples, e ainda existe lógica em cada etapa","time":"24:30","user":"Douglas Lima"},{"bg":"#5bdba8","chat":"Essa sequência realmente parece uma chave","time":"24:55","user":"João Martins"},{"bg":"#b4a1f7","chat":"agora entendo por que tanta gente se interessa pelo 369","time":"25:20","user":"Marcelo Vieira"},{"bg":"#b9d6e6","chat":"Hiroshi explica de um jeito muito claro","time":"25:45","user":"Hélio Martins"},{"bg":"#d6d6d6","chat":"isso está ficando cada vez mais interessante","time":"26:10","user":"Talita Ribeiro"},{"bg":"#e2b6f5","chat":"Quero aprender o passo a passo completo","time":"26:35","user":"Renato Dias"},{"bg":"#ff9a9a","chat":"Já tentei afirmações e não senti mudança alguma, vou fazer o 369","time":"27:00","user":"Kelvin Moreira"},{"bg":"#b4a2f4","chat":"Também fiz mapa dos sonhos e desisti no meio","time":"27:25","user":"Suellen Rocha"},{"bg":"#a0f1e8","chat":"gostei porque o Protocolo 369 parece mais organizado","time":"27:50","user":"Antônio Ferreira"},{"bg":"#96e6a1","chat":"Agora entendi por que eu começava motivada e depois desistia...","time":"28:15","user":"Larissa Mendes"},{"bg":"#a3d9a0","chat":"Talvez meu erro tenha sido não seguir essa sequência 369","time":"28:40","user":"Andreia Torres"},{"bg":"#e0e0e0","chat":"Gostei porque não depende apenas de pensamento positivo","time":"29:05","user":"Márcia Batista"},{"bg":"#3b82f6","chat":"isso parece mais simples para quem tem a mente muito acelerada","time":"29:30","user":"Victor Barros"},{"bg":"#9aebec","chat":"Eu não tenho muito tempo. Dá para encaixar na rotina?","time":"29:55","user":"Fabiana Lopes"},{"bg":"#fecaca","chat":"Se forem poucos minutos por dia, consigo fazer","time":"30:20","user":"Juliana Alves"},{"bg":"#c2f5d4","chat":"o protocolo parece prático","time":"30:45","user":"Sérgio Carvalho"},{"bg":"#f9c74f","chat":"gostei porque não precisa mudar toda a rotina","time":"31:10","user":"Monique Ferreira"},{"bg":"#ff705b","chat":"Quero aplicar de verdade","time":"31:35","user":"Daniel Moreira"},{"bg":"#a1e9e8","chat":"Hiroshi, gostei porque você não está falando apenas de desejar","time":"32:00","user":"Ana Paula"},{"bg":"#f9a8d4","chat":"quero começar o Protocolo 369 ainda hoje","time":"32:25","user":"Everton Rocha"},{"bg":"#a1a1f7","chat":"Quero começar uma nova fase","time":"32:50","user":"Carla Mendes"},{"bg":"#81e6d9","chat":"Estou pronta para romper com a escássez","time":"33:15","user":"Renata Oliveira"},{"bg":"#fdba74","chat":"Sinto que essa live está despertando algo em mim","time":"33:40","user":"Júlio César"},{"bg":"#f6a9fa","chat":"quero aprender a direcionar melhor a minha energia.","time":"34:05","user":"Vanessa Lima"},{"bg":"#a5b4fc","chat":"Quero seguir cada etapa","time":"34:30","user":"Caíque Barbosa"},{"bg":"#f4a1a8","chat":"quero ter acesso ao método completo","time":"34:55","user":"Roseli Martins"},{"bg":"#a4f9f9","chat":"Estou pronta para aplicar o Protocolo 369","time":"35:20","user":"Priscila Moraes"},{"bg":"#b2a2d7","chat":"Quero começar com foco","time":"35:45","user":"Simone Carvalho"},{"bg":"#c4c4c4","chat":"chegou a hora de colocar em prática! ansioso","time":"36:10","user":"Augusto Silva"},{"bg":"#60a5fa","chat":"Hiroshi, obrigada por explicar de forma tão clara","time":"36:35","user":"Bianca Moura"},{"bg":"#9aabac","chat":"A possibilidade de fazer pelo celular ajudou muito...","time":"37:00","user":"Pedro Henrique"},{"bg":"#5bdba8","chat":"Vou dar o primeiro passo hoje mesmo","time":"37:25","user":"Cíntia Ramos"},{"bg":"#b4a1f7","chat":"Hiroshi, coloca o acesso na tela.","time":"37:50","user":"Fábio Almeida"},{"bg":"#b9d6e6","chat":"Essa oportunidade ficará disponível por quanto tempo?","time":"38:15","user":"Paulo Henrique"},{"bg":"#d6d6d6","chat":"Estou interessada em começar, manda o link","time":"38:40","user":"Sandra Lopes"},{"bg":"#e2b6f5","chat":"quero garantir minha vaga","time":"39:05","user":"Luciana Duarte"},{"bg":"#ff9a9a","chat":"Onde está o botão?","time":"39:30","user":"Thiago Costa"},{"bg":"#b4a2f4","chat":"Eu vou entrar agora.","time":"39:55","user":"Gabriela Alves"},{"bg":"#a0f1e8","chat":"estou fazendo minha inscrição agora mesmo...","time":"40:20","user":"Anderson Lima"},{"bg":"#96e6a1","chat":"Acabei de entrar.","time":"40:45","user":"Bruno Castro"},{"bg":"#a3d9a0","chat":"consegui garantir meu acesso.","time":"41:10","user":"Lucas Pacheco"},{"bg":"#e0e0e0","chat":"Estou dentro! Consegui","time":"41:35","user":"Renata Costa"},{"bg":"#3b82f6","chat":"quero vir compartilhar meus resultados depois.","time":"42:00","user":"Carlos Martins"},{"bg":"#9aebec","chat":"Eu acredito que esse método chegou até mim no momento certo","time":"42:25","user":"Juliana Ferreira"},{"bg":"#fecaca","chat":"Em breve volto aqui para contar minha transformação.","time":"42:50","user":"Gustavo Almeida"},{"bg":"#c2f5d4","chat":"Gratidão por tudo Hiroshi","time":"43:15","user":"Leandro Rocha"},{"bg":"#f9c74f","chat":"Que live maravilhosa!","time":"43:40","user":"Fernanda Lopes"},{"bg":"#ff705b","chat":"Essa live foi uma resposta... ontem mesmo pedi um sinal","time":"44:05","user":"Marcos Duarte"},{"bg":"#a1e9e8","chat":"Vaga garantida! Agora é começar...","time":"44:30","user":"Daniel Santos"},{"bg":"#f9a8d4","chat":"acabei de receber meu acesso no e-mail","time":"44:55","user":"Roberto Ferreira"},{"bg":"#a1a1f7","chat":"Estou muito emocionada.","time":"45:20","user":"Aline Rocha"},{"bg":"#81e6d9","chat":"também acabei de garantir meu acesso.","time":"45:45","user":"Vinícius Almeida"},{"bg":"#fdba74","chat":"a inscrição foi rápida e o acesso chegou na hora","time":"46:10","user":"João Carvalho"},{"bg":"#f6a9fa","chat":"Fazia tempo que eu não sentia esperança... gratidão!","time":"46:35","user":"Priscila Almeida"},{"bg":"#a5b4fc","chat":"acesso recebido! agora vou seguir o passo a passo.","time":"47:00","user":"Rafael Barbosa"},{"bg":"#f4a1a8","chat":"Vaga confirmada, estou muito feliz!","time":"47:25","user":"Fernanda Barbosa"},{"bg":"#a4f9f9","chat":"Já entrei e o conteúdo parece muito completo.","time":"47:50","user":"Paulo César"},{"bg":"#b2a2d7","chat":"Hiroshi, consegui garantir minha vaga!","time":"48:15","user":"Larissa Gomes"},{"bg":"#c4c4c4","chat":"Vaga garantida, agora é colocar em prática.","time":"48:40","user":"Bruno Almeida"},{"bg":"#60a5fa","chat":"Estou muito feliz, meu acesso já chegou.","time":"49:05","user":"Débora Martins"},{"bg":"#9aabac","chat":"gratidão por tornar esse conteúdo acessível.","time":"49:30","user":"Rafael Oliveira"},{"bg":"#5bdba8","chat":"Que live maravilhosa. Muito obrigada!","time":"49:55","user":"Vanessa Cardoso"},{"bg":"#b4a1f7","chat":"essa live foi um verdadeiro presente.","time":"50:20","user":"Marcos Ribeiro"},{"bg":"#b9d6e6","chat":"Estou muito feliz por ter assistido essa live. gratidão","time":"50:45","user":"Diego Souza"}],"invert":true,"type":"chatbot","chatType":"youtube","boundingBox":{"desktop":{"top":936.31,"left":490,"width":841,"height":602,"timestamp":1787753969999},"mobile":{"top":854.22,"left":14,"width":337,"height":602,"timestamp":1787753970101}},"count":"2.4k"}}];
      const currentUser = "Você";
      const toMs = (t) => (([m, s]) => ((m || 0) * 60 + (s || 0)) * 1000)(t.split(":").map(Number));
      const scroll = (el) => el?.scroll({ top: el.scrollHeight, behavior: "smooth" });
      list.forEach((c) => {
        const el = document.querySelector(".a-ch-" + (c?.compKey || ""));
        const comments = el?.querySelector(".comments");
        const btn = el?.querySelector(".btn-send");
        const ta = el?.querySelector(".send-message");
        const count = el?.querySelector(".msg-count");
        const filter = c?.misc?.filter || [];
        const items = c?.misc?.items || [];
        const addChat = (e) => {
          e?.preventDefault?.();
          let val = filter.reduce((s, f) => s.replace(f, ""), (ta?.value || "").trim());
          if (!val.trim()) return;
          comments?.insertAdjacentHTML("beforeend", "<div class=\"comment\"><div class=\"user-id\"><div class=\"user-icon\"><span>" + (currentUser?.[0] || "V") + "</span></div></div><span class=\"comment-user\">" + currentUser + "</span><span class=\"comment-text\">" + val + "</span></div>");
          if (ta) ta.value = "";
          if (count) count.textContent = "0/200";
          scroll(comments);
        };
        ta?.addEventListener("keyup", (e) => {
          if (ta.value.length > 200) ta.value = ta.value.slice(0, 200);
          e?.key?.toLowerCase() === "enter" ? addChat(e) : (count && (count.textContent = ta.value.length + "/200"));
        });
        btn?.addEventListener("click", addChat);
        items.forEach((item) => {
          setTimeout(() => {
            comments?.insertAdjacentHTML("beforeend", "<div class=\"comment\"><div class=\"user-id\" style=\"background:" + (item?.bg || "") + "\"><div class=\"user-icon\"><span>" + (item?.user?.[0] || "U") + "</span></div></div><div><span class=\"comment-user\">" + (item?.user || "User1234") + "</span><span class=\"comment-text\">" + (item?.chat || "Wow!") + "</span></div></div>");
            scroll(comments);
          }, toMs(item?.time || "00:00"));
        });
      });
    } catch (e) {}
  })();
    (function() {
    try {
    const displayList = [{"k":"23b9ddc","d":"10","t":"html"}];
    console.log("displayList", displayList);
    function atomicatRunDisplayItem(item) {
      var t = item.t, k = item.k, d = item.d, qs = item.qs, qk = item.qk;
      var elementClass = t === "container" ? ".atomicat-container-" + k : ".atomicat-element-container-" + k;
      console.log("elementClass", elementClass);
      function reveal() {
        var targetElement = document.querySelector(elementClass);
        if (!targetElement) return;
        console.log("targetElement", targetElement);
        setTimeout(function() {
          targetElement.classList.remove("atomicat-hidden");
        }, d * 1000);
      }
      if (qs) {
        var stepSelector = qk
          ? ".a-iq-cont-" + qk + " .a-iq-item-" + qs
          : ".a-iq-item-" + qs;
        function waitForActiveStep() {
          var stepEl = document.querySelector(stepSelector);
          if (stepEl && stepEl.classList.contains("current-slide")) {
            reveal();
            return;
          }
          requestAnimationFrame(waitForActiveStep);
        }
        requestAnimationFrame(waitForActiveStep);
      } else {
        reveal();
      }
    }
    displayList.forEach(function(item) { atomicatRunDisplayItem(item); });
    } catch (error) {
      console.log(error);
    }
    })();
    (function() {
          try {
              const animationList = [{"key":"f4585e0","type":"text"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('a-e-a-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('a-e-a-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();