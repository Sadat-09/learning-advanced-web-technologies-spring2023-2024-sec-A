

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .form-group {
          margin-bottom: 10px;
        }

        label {
          display: block;
          font-weight: bold;
        }

        input[type='text'],
        input[type='password'] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Register;
