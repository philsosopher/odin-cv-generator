const PreviewSection = ({ cvDetails }) => {
    return (
        <div className="preview-section">
            <h2>Preview</h2>


                  {/* TEMP: Display current object for debugging */}
                <div style={{ marginTop: "2rem", background: "#222", color: "#fff", borderRadius: "8px", padding: "1rem" }}>
                    <strong>DEBUG: cvDetails object</strong>
                    <pre
                    style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-all",
                        fontSize: "0.95rem",
                        background: "#111",
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        borderRadius: "6px"
                    }}
                    >
                    {JSON.stringify(cvDetails, null, 2)}
                    </pre>
                </div>
        </div>
    );
}

export default PreviewSection;