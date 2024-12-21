const Contact = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen pt-10">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p>Any questions, feel free to reach out:</p>
      <a
        href="mailto:henrikdchristensen@gmail.com"
        className="text-blue-600 underline"
      >
        henrikdchristensen@gmail.com
      </a>
    </div>
  );
};

export default Contact;
