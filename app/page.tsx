export default function Home() {
    return (
        <div className="container">
            <h1>🎯 ShadowStrike Test Target</h1>

            <div className="warning">
                <strong>⚠️ WARNING:</strong> This is an intentionally vulnerable web application for testing purposes only.
                Do NOT deploy this in production or expose it to the public internet.
            </div>

            <div className="card">
                <h2>Available Test Endpoints</h2>
                <ul style={{ lineHeight: '2' }}>
                    <li><a href="/sql-injection" style={{ color: '#ffd700' }}>SQL Injection Test</a></li>
                    <li><a href="/xss-test" style={{ color: '#ffd700' }}>XSS (Cross-Site Scripting) Test</a></li>
                    <li><a href="/file-upload" style={{ color: '#ffd700' }}>File Upload Test</a></li>
                </ul>
            </div>

            <div className="card">
                <h2>About This Application</h2>
                <p>
                    This application contains intentional security vulnerabilities designed to test
                    the ShadowStrike security testing tool. Each endpoint simulates common web vulnerabilities
                    that can be exploited for educational and testing purposes.
                </p>
            </div>
        </div>
    )
}
