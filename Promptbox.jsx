function Promptbox() {
    return (
      <div className="promptbox">
        <textarea
          rows="3"
          placeholder="Send a message..."
        ></textarea>
        <button type="button">➤</button>
      </div>
    );
  }
  
  export default Promptbox;
  