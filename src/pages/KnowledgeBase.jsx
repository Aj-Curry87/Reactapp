import React, { useState } from "react";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    q: "How to reset your password?",
    a: "Go to Settings > Security > Reset Password.",
  },
  {
    q: "How to connect to VPN?",
    a: "Use Cisco AnyConnect and login with company credentials.",
  },
  {
    q: "Outlook not syncing?",
    a: "Restart Outlook and clear local cache under File > Options.",
  },
];

function KnowledgeBase() {
  const [query, setQuery] = useState("");

  const filtered = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Knowledge Base</h1>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-6 border rounded dark:bg-gray-900 dark:border-gray-700"
      />
      <div className="space-y-4">
        {filtered.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default KnowledgeBase;