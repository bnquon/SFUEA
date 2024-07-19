"use client"
import React from "react";
import { useState, useEffect } from "react";
import Faq from "react-faq-component";
import { data } from "../data/GamersLoungeFAQ";
import { HomePageFAQData } from "../data/HomePageFAQ";

interface FAQProps {
  onWhatPage: string;
}

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
};

export const FAQ: React.FC<FAQProps> = ({ onWhatPage }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveStyles = () => {
    if (windowWidth >= 1800) {
      return {
        rowContentTextSize: "20px",
        rowTitleTextSize: "26px",
      }
    }
    else if (windowWidth >= 1500) {
      return {
        rowContentTextSize: "18px",
        rowTitleTextSize: "24px",
      }
    }
    else if (windowWidth >= 1200) {
      // lg breakpoint
      return {
        rowContentTextSize: "16px",
        rowTitleTextSize: "22px",
      };
    } else if (windowWidth >= 610) {
      // sm breakpoint
      return {
        rowContentTextSize: "14px",
        rowTitleTextSize: "20px",
      };
    } else {
      return {
        rowContentTextSize: "12px",
        rowTitleTextSize: "18px",
      };
    }
  };

  const styles = {
    bgColor: "#d3d3d3",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentPaddingTop: "8px",
    rowContentPaddingBottom: "8px",
    ...getResponsiveStyles(),
  };

  return (
    <Faq
      data={onWhatPage === "home" ? HomePageFAQData : data}
      styles={styles}
      config={config}
    />
  );
};
