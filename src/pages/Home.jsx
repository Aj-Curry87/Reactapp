import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to your Favorite Support Desk's Favorite Support Desk!</h2>
      <p className="mb-4">
        Please leave your worries at the DNS Server, whatever your problem, Here, lies the Solution
      </p>
      <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
      <ul className="list-disc list-inside">
        <li>AWS Solutions Architect Associate</li>
        <li>AWS Cloud Practitioner</li>
        <li>CompTIA A+</li>
        <li>Linux Essentials</li>
        <li><em>Network+ (In Progress)</em></li>
      </ul>
    </div>
  );
}
