"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/** Должны совпадать с components/cookie-consent-banner.tsx */
const COOKIE_CONSENT_KEY = "ink-masters-cookie-consent";
const COOKIE_CONSENT_VALUE = "v1";

const METRIKA_ID = 108671950;
const TAG_SRC = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;

function hasAnalyticsConsent(): boolean {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_VALUE;
  } catch {
    return false;
  }
}

export function YandexMetrika() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (hasAnalyticsConsent()) setAllowed(true);
    const onAccept = () => setAllowed(true);
    window.addEventListener("ink-cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("ink-cookie-consent-accepted", onAccept);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, "script", "${TAG_SRC}", "ym");
ym(${METRIKA_ID}, "init", {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}
      </Script>
      <noscript>
        <div>
          {/* Внешний пиксель Метрики без JS; next/image здесь не подходит */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
