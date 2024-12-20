const Contact: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us at:</p>
      <a href="mailto:example@example.com" style={{ color: '#007bff', textDecoration: 'underline' }}>
        example@example.com
      </a>
    </div>
  );
};

export default Contact;
