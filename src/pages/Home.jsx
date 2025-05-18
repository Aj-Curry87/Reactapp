import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome, Antoine!</h2>
      <p className="mb-4">
        I'm a passionate <strong>Junior Cloud Architect</strong> and former AWS Cloud Apprentice with a love for solving user issues and streamlining infrastructure.
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
