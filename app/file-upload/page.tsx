'use client'

import { useState } from 'react'

export default function FileUploadTest() {
    const [file, setFile] = useState<File | null>(null)
    const [result, setResult] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!file) {
            setResult('Please select a file')
            return
        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch('/api/file-upload', {
                method: 'POST',
                body: formData,
            })
            const data = await response.json()
            setResult(JSON.stringify(data, null, 2))
        } catch (error) {
            setResult('Error: ' + error)
        }
    }

    return (
        <div className="container">
            <h1>File Upload Test</h1>

            <div className="warning">
                <strong>⚠️ Vulnerability:</strong> This endpoint accepts file uploads without proper validation.
                It allows uploading of executable files and doesn't check file types or content.
            </div>

            <div className="card">
                <h2>Upload File</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        className="input"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <button type="submit" className="button">Upload File</button>
                </form>

                {result && (
                    <div className="result">
                        <strong>Result:</strong>
                        <pre>{result}</pre>
                    </div>
                )}
            </div>

            <div className="card">
                <h2>Test Cases</h2>
                <p>Try uploading these file types:</p>
                <ul style={{ lineHeight: '2', marginTop: '1rem' }}>
                    <li>Executable files (.exe, .sh, .bat)</li>
                    <li>Script files (.php, .jsp, .asp)</li>
                    <li>Large files to test size limits</li>
                    <li>Files with double extensions (.jpg.php)</li>
                </ul>
            </div>

            <a href="/" style={{ color: '#ffd700', display: 'block', marginTop: '2rem' }}>← Back to Home</a>
        </div>
    )
}
