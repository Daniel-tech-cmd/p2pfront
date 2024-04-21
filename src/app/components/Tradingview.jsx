"use client";
import { useEffect } from "react";
import { useState } from "react";
// import Script from "next/script";

const TradingViewWidget = () => {
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      setloaded(true);
      console.log(loaded);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "450px",
          "minHeight":"450px",
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency": "USD",
          "colorTheme": "light",
          "locale": "en"
        }
      `;
      document
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);

      return () => {
        // Clean up function to remove the script when the component unmounts
        document.querySelector(".tradingview-widget-container__widget");
        // .removeChild(script);
      };
    }
  }, [loaded]);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget">
        {/* <Script src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" /> */}
      </div>
      <div className="tradingview-widget-copyright">
        {/* <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a> */}
      </div>
    </div>
  );
};

export default TradingViewWidget;
