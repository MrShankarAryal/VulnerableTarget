'use client'

import { useState } from 'react'

export default function SqlInjectionTest() {
    const [userId, setUserId] = useState('')
    const [result, setResult] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch(`/api/sql-injection?id=${userId}`)
            const data = await response.json()
            setResult(JSON.stringify(data, null, 2))
        } catch (error) {
            setResult('Error: ' + error)
        }
    }

    return (
        <div className="container">
            <h1>SQL Injection Test</h1>

            <div className="warning">
                <strong>⚠️ Vulnerability:</strong> This endpoint is vulnerable to SQL injection attacks.
                The user input is directly concatenated into SQL queries without sanitization.
            </div>

            <div className="card">
                <h2>User Lookup</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter user ID (e.g., 1)"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <button type="submit" className="button">Search User</button>
                </form>

                {result && (
                    <div className="result">
                        <strong>Result:</strong>
                        <pre>{result}</pre>
                    </div>
                )}
            </div>

            <div className="card">
                <h2>Test Payloads</h2>
                <p>Try these SQL injection payloads:</p>
                <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
                    <li><code>1 OR 1=1</code> - Basic authentication bypass</li>
                    <li><code>1' OR '1'='1</code> - String-based injection</li>
                    <li><code>1; DROP TABLE users--</code> - Destructive query</li>
                    <li><code>1 UNION SELECT null, username, password FROM users--</code> - Data extraction</li>
                </ul>
            </div>

            <a href="/" style={{ color: '#ffd700', display: 'block', marginTop: '2rem' }}>← Back to Home</a>
        </div>
    )
}
