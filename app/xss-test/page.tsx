'use client'

import { useState } from 'react'

export default function XssTest() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // VULNERABLE: Directly rendering user input without sanitization
        setOutput(input)
    }

    return (
        <div className="container">
            <h1>XSS (Cross-Site Scripting) Test</h1>

            <div className="warning">
                <strong>⚠️ Vulnerability:</strong> This page is vulnerable to XSS attacks.
                User input is rendered without sanitization, allowing script injection.
            </div>

            <div className="card">
                <h2>Comment Section</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter your comment"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="button">Post Comment</button>
                </form>

                {output && (
                    <div className="result">
                        <strong>Your Comment:</strong>
                        {/* VULNERABLE: Using dangerouslySetInnerHTML */}
                        <div dangerouslySetInnerHTML={{ __html: output }} />
                    </div>
                )}
            </div>

            <div className="card">
                <h2>Test Payloads</h2>
                <p>Try these XSS payloads:</p>
                <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
                    <li><code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> - Basic XSS</li>
                    <li><code>&lt;img src=x onerror=alert('XSS')&gt;</code> - Image tag XSS</li>
                    <li><code>&lt;svg onload=alert('XSS')&gt;</code> - SVG-based XSS</li>
                    <li><code>&lt;iframe src="javascript:alert('XSS')"&gt;</code> - Iframe XSS</li>
                </ul>
            </div>

            <a href="/" style={{ color: '#ffd700', display: 'block', marginTop: '2rem' }}>← Back to Home</a>
        </div>
    )
}
