'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Check, AlertCircle, Clock } from 'lucide-react';

const endpoints = [
    {
        method: 'GET',
        path: '/api/users',
        description: 'Fetch a list of active users',
        response: {
            status: 200,
            data: [
                { id: 1, name: "Alexandro", role: "Admin", status: "Active" },
                { id: 2, name: "Sarah", role: "Editor", status: "Active" },
                { id: 3, name: "Michael", role: "User", status: "Offline" }
            ]
        }
    },
    {
        method: 'POST',
        path: '/api/auth/login',
        description: 'Authenticate user credentials',
        body: { email: "user@example.com", password: "********" },
        response: {
            status: 200,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            expiresIn: 3600
        }
    },
    {
        method: 'GET',
        path: '/api/products/123',
        description: 'Get product details by ID',
        response: {
            status: 200,
            id: 123,
            name: "Premium API Plan",
            price: 49.99,
            features: ["Unlimited Requests", "Priority Support"]
        }
    },
    {
        method: 'DELETE',
        path: '/api/cache/clear',
        description: 'Clear system cache (Admin only)',
        response: {
            status: 403,
            error: "Forbidden",
            message: "You do not have permission to perform this action."
        }
    }
];

export default function ApiPlayground() {
    const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [status, setStatus] = useState<number | null>(null);
    const [latency, setLatency] = useState<number | null>(null);

    const handleSendRequest = () => {
        setIsLoading(true);
        setResponse(null);
        setStatus(null);
        setLatency(null);

        // Simulate network delay
        const delay = Math.floor(Math.random() * 500) + 300; // 300-800ms

        setTimeout(() => {
            setResponse(activeEndpoint.response);
            setStatus(activeEndpoint.response.status);
            setLatency(delay);
            setIsLoading(false);
        }, delay);
    };

    const getMethodColor = (method: string) => {
        switch (method) {
            case 'GET': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'POST': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'PUT': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
            case 'DELETE': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-gray-400';
        }
    };

    const getStatusColor = (code: number) => {
        if (code >= 200 && code < 300) return 'text-green-400';
        if (code >= 400 && code < 500) return 'text-yellow-400';
        if (code >= 500) return 'text-red-400';
        return 'text-gray-400';
    };

    return (
        <section className="py-20 px-6 bg-black/40">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Interactive API Playground
                    </h2>
                    <p className="text-gray-400">
                        Test my backend logic directly. Select an endpoint and hit send.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar - Endpoints List */}
                    <div className="lg:col-span-1 space-y-3">
                        {endpoints.map((ep, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveEndpoint(ep);
                                    setResponse(null);
                                    setStatus(null);
                                }}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${activeEndpoint.path === ep.path
                                        ? 'bg-gray-800 border-blue-500/50 shadow-lg shadow-blue-500/10'
                                        : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded border ${getMethodColor(ep.method)}`}>
                                        {ep.method}
                                    </span>
                                    <span className="text-gray-300 font-mono text-sm truncate">
                                        {ep.path}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-xs pl-1">{ep.description}</p>
                            </button>
                        ))}
                    </div>

                    {/* Main - Request/Response Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
                            {/* Request Bar */}
                            <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex items-center gap-4">
                                <span className={`font-bold font-mono ${getMethodColor(activeEndpoint.method).split(' ')[0]}`}>
                                    {activeEndpoint.method}
                                </span>
                                <div className="flex-1 font-mono text-gray-300 text-sm bg-black/30 px-3 py-2 rounded border border-gray-800">
                                    https://api.delpiero.dev{activeEndpoint.path}
                                </div>
                                <button
                                    onClick={handleSendRequest}
                                    disabled={isLoading}
                                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg font-medium transition-colors"
                                >
                                    {isLoading ? (
                                        <RotateCcw className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <Play className="w-4 h-4 fill-current" />
                                            Send
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Body (if POST) */}
                            {activeEndpoint.body && (
                                <div className="p-4 border-b border-gray-800 bg-gray-900/30">
                                    <div className="text-xs text-gray-500 mb-2 font-mono">REQUEST BODY</div>
                                    <pre className="text-xs text-gray-300 font-mono bg-black/30 p-3 rounded border border-gray-800">
                                        {JSON.stringify(activeEndpoint.body, null, 2)}
                                    </pre>
                                </div>
                            )}

                            {/* Response Area */}
                            <div className="p-6 min-h-[300px] bg-[#0d1117]">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-xs text-gray-500 font-mono">RESPONSE</div>
                                    {status && (
                                        <div className="flex items-center gap-4 text-xs font-mono">
                                            <span className={`flex items-center gap-1.5 ${getStatusColor(status)}`}>
                                                {status === 200 ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                                                Status: {status}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-gray-400">
                                                <Clock className="w-3 h-3" />
                                                Time: {latency}ms
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    {isLoading ? (
                                        <div className="absolute inset-0 flex items-center justify-center h-40">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                <span className="text-sm text-gray-500 font-mono">Processing request...</span>
                                            </div>
                                        </div>
                                    ) : response ? (
                                        <motion.pre
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="font-mono text-sm text-green-400 overflow-auto max-h-[300px] custom-scrollbar"
                                        >
                                            {JSON.stringify(response, null, 2)}
                                        </motion.pre>
                                    ) : (
                                        <div className="flex items-center justify-center h-40 text-gray-600 text-sm font-mono">
                                            Click "Send" to see the response
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
