function ErrorMessage({ message }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
