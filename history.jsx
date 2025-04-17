function History() {
    const handleNewChat = () => {
        console.log("New chat created!");
        // Add logic here to handle creating a new chat
    };

    return (
        <div className="history">
            <h2>History</h2>
            <ul>
                <li>Prompt 1</li>
                <li>Prompt 2</li>
                <li>Prompt 3</li>
                <li>Prompt 4</li>
            </ul>
            <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" onClick={() => console.log("History cleared!")}>
                    Clear History
                </button>
                <button type="button" onClick={handleNewChat}>
                    +
                </button>
            </div>
            <link rel="stylesheet" href="./history.css" />
        </div>
    );
}

export default History;