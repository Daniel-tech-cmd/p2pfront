"use client";
import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "minHeight":"500px",
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
      document
        .querySelector(".tradingview-widget-container__widget")
        .removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
