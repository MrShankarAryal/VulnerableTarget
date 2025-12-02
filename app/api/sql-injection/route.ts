import { NextRequest, NextResponse } from 'next/server'

// Simulated database
const fakeDatabase = [
    { id: 1, username: 'admin', password: 'admin123', email: 'admin@example.com' },
    { id: 2, username: 'user1', password: 'pass123', email: 'user1@example.com' },
    { id: 3, username: 'user2', password: 'secret456', email: 'user2@example.com' },
]

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 })
    }

    // VULNERABLE: Simulating SQL injection vulnerability
    // In a real app, this would be: SELECT * FROM users WHERE id = ${id}
    // This allows injection attacks like: 1 OR 1=1

    try {
        // Simulate SQL injection behavior
        if (id.toLowerCase().includes('or') || id.toLowerCase().includes('union')) {
            // Simulating successful SQL injection - return all users
            return NextResponse.json({
                success: true,
                message: 'SQL Injection successful! All users returned.',
                users: fakeDatabase,
                vulnerability: 'SQL_INJECTION',
                injectedQuery: `SELECT * FROM users WHERE id = ${id}`
            })
        }

        // Normal query
        const userId = parseInt(id)
        const user = fakeDatabase.find(u => u.id === userId)

        if (user) {
            return NextResponse.json({
                success: true,
                user: user
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'User not found'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: 'Database error',
            details: String(error)
        }, { status: 500 })
    }
}
