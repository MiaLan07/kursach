
export default function FAQItem({ faq, toggleFaq, index, activeFaq }) {
    return (
        <div className="faqitem" onClick={() => toggleFaq(index)}>
            <h4>{faq.question}</h4>
            <div style={{ display: activeFaq === index ? "block" : "none" }}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
}