import React from "react";
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
	return (
		<div>
			<h1>Knowledge Base</h1>
			{faqs.map((faq, index) => (
				<FAQItem key={index} question={faq.q} answer={faq.a} />
			))}
		</div>
	);
}

export default KnowledgeBase;
