import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
        }

        // VULNERABLE: No file type validation, no size limits, no sanitization
        const fileName = file.name
        const fileSize = file.size
        const fileType = file.type

        // Simulate dangerous file detection
        const dangerousExtensions = ['.exe', '.sh', '.bat', '.php', '.jsp', '.asp', '.aspx']
        const isDangerous = dangerousExtensions.some(ext => fileName.toLowerCase().endsWith(ext))

        return NextResponse.json({
            success: true,
            message: 'File uploaded successfully (simulated)',
            vulnerability: isDangerous ? 'DANGEROUS_FILE_UPLOAD' : 'UNRESTRICTED_FILE_UPLOAD',
            fileInfo: {
                name: fileName,
                size: fileSize,
                type: fileType,
                dangerous: isDangerous,
                warning: isDangerous ? 'This file type could be executed on the server!' : 'No file type restrictions'
            }
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: 'Upload failed',
            details: String(error)
        }, { status: 500 })
    }
}
