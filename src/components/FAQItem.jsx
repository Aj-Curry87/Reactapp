import React from "react";

/**
 * FAQItem component displays a single FAQ entry.
 * Props:
 *  - question: string (the FAQ question)
 *  - answer: string (the FAQ answer)
 */
export default function FAQItem({ question, answer }) {
  return (
    <div className="faq-item" style={{ marginBottom: "1.5rem" }}>
      <h4 style={{ color: "#2d3748", fontWeight: "bold" }}>{question}</h4>
      <p style={{ color: "#4a5568" }}>{answer}</p>
    </div>
  );
}