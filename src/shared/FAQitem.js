
export default function FAQItem({ faq, toggleFaq, index, activeFaq }) {
    return (
        <div className="faqitem" onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            <div style={{ display: activeFaq === index ? "block" : "none" }}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
}