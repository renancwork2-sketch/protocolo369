
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
      const list = [];
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