"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  resetKey?: number;
  theme?: "light" | "dark" | "auto";
}

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export default function TurnstileWidget({
  siteKey,
  onVerify,
  onExpire,
  onError,
  resetKey = 0,
  theme = "light",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    if (!siteKey) return;

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || !window.turnstile) return;

      // Remove existing widget if re-rendering
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors
        }
        widgetIdRef.current = null;
      }

      containerRef.current.innerHTML = "";
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        size: "flexible",
        callback: (token: string) => {
          onVerifyRef.current(token);
        },
        "expired-callback": () => {
          onExpireRef.current?.();
        },
        "error-callback": () => {
          onErrorRef.current?.();
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      let script = document.getElementById(
        TURNSTILE_SCRIPT_ID
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = TURNSTILE_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      const handleLoad = () => renderWidget();
      script.addEventListener("load", handleLoad);

      // Fallback poll in case script finished loading right before listener attached
      const pollInterval = window.setInterval(() => {
        if (window.turnstile) {
          window.clearInterval(pollInterval);
          renderWidget();
        }
      }, 200);

      return () => {
        cancelled = true;
        script?.removeEventListener("load", handleLoad);
        window.clearInterval(pollInterval);
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // Ignore cleanup errors
          }
          widgetIdRef.current = null;
        }
      };
    }

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme]);

  // Reset Turnstile widget when parent increments resetKey (single-use tokens)
  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch {
        // Ignore reset errors
      }
    }
  }, [resetKey]);

  return <div ref={containerRef} className="w-full min-h-[65px]" />;
}
