import Script from "next/script";

export default function UmamiAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      src="https://analytics.amxpress.com.ar/script.js"
      data-website-id="7be70e90-1b7b-441f-97d9-ad502d9a43eb"
      strategy="afterInteractive"
    />
  );
}
