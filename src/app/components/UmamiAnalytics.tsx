import Script from "next/script";

export default function UmamiAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      src="https://analytics.amxpress.com.ar/script.js"
      data-website-id="9a000b33-5aea-4854-9819-639a72e38a48"
      strategy="afterInteractive"
    />
  );
}
