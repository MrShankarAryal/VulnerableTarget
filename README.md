# ShadowStrike Vulnerable Test Target

This is an intentionally vulnerable web application designed to test the ShadowStrike security testing tool.

## ⚠️ WARNING

**DO NOT DEPLOY THIS APPLICATION IN PRODUCTION OR EXPOSE IT TO THE PUBLIC INTERNET**

This application contains intentional security vulnerabilities for educational and testing purposes only.

## Features

- **SQL Injection Test**: Vulnerable endpoint that simulates SQL injection attacks
- **XSS Test**: Cross-site scripting vulnerability for testing XSS payloads
- **File Upload Test**: Unrestricted file upload endpoint

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Deployment to Vercel

1. Push this directory to a GitHub repository
2. Import the repository in Vercel
3. Deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Testing with ShadowStrike

Once deployed, use the following URLs to test ShadowStrike:

- **SQL Injection**: `https://your-app.vercel.app/api/sql-injection?id=1`
- **XSS Test**: `https://your-app.vercel.app/xss-test`
- **File Upload**: `https://your-app.vercel.app/api/file-upload`

## Vulnerabilities Included

### 1. SQL Injection
- Location: `/api/sql-injection`
- Parameter: `id`
- Test payload: `1 OR 1=1`

### 2. Cross-Site Scripting (XSS)
- Location: `/xss-test`
- Type: Reflected XSS
- Test payload: `<script>alert('XSS')</script>`

### 3. Unrestricted File Upload
- Location: `/api/file-upload`
- Accepts any file type without validation
- No size restrictions

## License

This project is for educational purposes only.
