"use client";
import React, { useState, useEffect, useRef } from "react";
import { Shield, Lock, Terminal, Network, Eye, Cpu, Zap, Code } from "lucide-react";

const CybersecurityPage = () => {
    const [terminalText, setTerminalText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [currentSection, setCurrentSection] = useState(0);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [currentCommand, setCurrentCommand] = useState("");
    const [output, setOutput] = useState<Array<{ type: string; content: string | JSX.Element }>>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const welcomeMessage = "Welcome to a New World of Cybersecurity";

    const commands = {
        help: {
            description: "Show available commands",
            action: () => (
                <div className="space-y-2">
                    <p className="text-cyan-400 font-bold">Available Commands:</p>
                    <p className="text-green-300"><span className="text-cyan-400">help</span> - Show this help message</p>
                    <p className="text-green-300"><span className="text-cyan-400">about</span> - Display cybersecurity expertise overview</p>
                    <p className="text-green-300"><span className="text-cyan-400">skills</span> - Show technical skills and proficiency levels</p>
                    <p className="text-green-300"><span className="text-cyan-400">achievements</span> - List core competencies</p>
                    <p className="text-green-300"><span className="text-cyan-400">tools</span> - Display security tools expertise</p>
                    <p className="text-green-300"><span className="text-cyan-400">certifications</span> - Show security certifications</p>
                    <p className="text-green-300"><span className="text-cyan-400">clear</span> - Clear terminal screen</p>
                </div>
            )
        },
        about: {
            description: "Display cybersecurity expertise overview",
            action: () => (
                <div className="space-y-3">
                    <p className="text-cyan-400 font-bold flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        SECURITY STATUS: ACTIVE
                    </p>
                    <p className="text-green-300 leading-relaxed">
                        Specialized in offensive and defensive cybersecurity operations.
                        Expertise in penetration testing, malware analysis, and security automation.
                        Committed to securing digital infrastructure and protecting against emerging threats.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["Ethical_Hacking", "Threat_Hunting", "Incident_Response", "Security_Auditing"].map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-300">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            )
        },
        skills: {
            description: "Show technical skills",
            action: () => (
                <div className="space-y-3">
                    <p className="text-purple-400 font-bold flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        SKILL_MATRIX.sys
                    </p>
                    {[
                        { name: "Metasploit", level: 90 },
                        { name: "Burp Suite", level: 85 },
                        { name: "Wireshark", level: 88 },
                        { name: "Python Security", level: 92 },
                        { name: "Nmap", level: 87 },
                    ].map((skill, i) => (
                        <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-green-300">{skill.name}</span>
                                <span className="text-cyan-400">{skill.level}%</span>
                            </div>
                            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        achievements: {
            description: "List core competencies",
            action: () => (
                <div className="space-y-2">
                    <p className="text-cyan-400 font-bold flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        CORE_COMPETENCIES.exe
                    </p>
                    {[
                        { icon: Shield, text: "Penetration Testing Expert" },
                        { icon: Lock, text: "Malware Analysis Specialist" },
                        { icon: Network, text: "Network Security Professional" },
                        { icon: Eye, text: "Threat Detection & Response" },
                    ].map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 text-green-300">
                            <achievement.icon className="w-4 h-4 text-cyan-400" />
                            <span>{achievement.text}</span>
                        </div>
                    ))}
                </div>
            )
        },
        tools: {
            description: "Display security tools",
            action: () => (
                <div className="space-y-2">
                    <p className="text-cyan-400 font-bold">Security Tools Arsenal:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {["Metasploit", "Burp Suite", "Nmap", "Wireshark", "IDA Pro", "Ghidra", "Splunk", "Sysmon"].map((tool, i) => (
                            <div key={i} className="flex items-center gap-2 text-green-300">
                                <Code className="w-3 h-3 text-cyan-400" />
                                <span className="text-sm">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        certifications: {
            description: "Show certifications",
            action: () => (
                <div className="space-y-2">
                    <p className="text-cyan-400 font-bold">Security Certifications:</p>
                    {["Network Research - ThinkCyber", "Introduction to Cybersecurity", "Linux Fundamentals", "Python for Cybersecurity"].map((cert, i) => (
                        <div key={i} className="flex items-center gap-2 text-green-300">
                            <Shield className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm">{cert}</span>
                        </div>
                    ))}
                </div>
            )
        },
        clear: {
            description: "Clear terminal",
            action: () => null
        }
    };

    // Typing animation effect
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < welcomeMessage.length) {
                setTerminalText(welcomeMessage.substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentSection(1);
                    setOutput([
                        { type: 'system', content: 'Initializing security protocols...' },
                        { type: 'system', content: 'Loading threat detection systems...' },
                        { type: 'success', content: 'All systems operational' },
                        { type: 'info', content: 'Type "help" to see available commands' }
                    ]);
                }, 500);
            }
        }, 80);

        return () => clearInterval(typingInterval);
    }, []);

    // Blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === '') return;

        // Add command to history
        setCommandHistory([...commandHistory, cmd]);

        // Add command to output
        const newOutput = [...output, { type: 'command', content: `$ ${cmd}` }];

        if (trimmedCmd === 'clear') {
            setOutput([]);
            setCurrentCommand('');
            return;
        }

        if (commands[trimmedCmd as keyof typeof commands]) {
            const result = commands[trimmedCmd as keyof typeof commands].action();
            if (result) {
                newOutput.push({ type: 'result', content: result });
            }
        } else {
            newOutput.push({
                type: 'error',
                content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
            });
        }

        setOutput(newOutput);
        setCurrentCommand('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(currentCommand);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-green-400 overflow-hidden relative">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `
                 linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
               `,
                        backgroundSize: '50px 50px',
                        animation: 'gridScroll 20s linear infinite'
                    }}>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.3
                        }}
                    />
                ))}
            </div>

            {/* Scrolling code background */}
            <div className="absolute right-0 top-0 h-full w-32 overflow-hidden opacity-5">
                <div className="animate-scroll-code text-xs font-mono text-green-500 whitespace-pre">
                    {`01010011 01000101
01000011 01010101
01010010 01001001
01010100 01011001
01001000 01000001
01000011 01001011
01010011 01011001
01010011 01010100
01000101 01001101`.repeat(20)}
                </div>
            </div>

            <div className="relative z-10 md:mx-48 md:mr-64 py-12">
                {/* Interactive Terminal */}
                <div className="mb-12 bg-black/80 border-2 border-green-500/30 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20 backdrop-blur-sm">
                    {/* Terminal top bar */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-green-400 text-sm font-mono">root@cybersecurity:~$</span>
                        </div>
                    </div>

                    {/* Terminal content */}
                    <div className="p-8 font-mono max-h-[600px] overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
                            <span className="text-cyan-400">system@security</span>
                            <span className="text-gray-500">:</span>
                            <span className="text-purple-400">~/portfolio</span>
                            <span className="text-gray-500">$</span>
                        </div>

                        {/* Welcome message */}
                        <div className="text-2xl md:text-4xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 animate-pulse">
                                {terminalText}
                            </span>
                            {showCursor && currentSection === 0 && <span className="inline-block w-3 h-8 bg-green-400 ml-1 animate-pulse"></span>}
                        </div>

                        {/* Command output */}
                        {currentSection >= 1 && (
                            <div className="space-y-4 mb-4">
                                {output.map((item, index) => (
                                    <div key={index}>
                                        {item.type === 'system' && (
                                            <p className="text-green-300 text-sm">
                                                <span className="text-cyan-400">[INFO]</span> {item.content}
                                            </p>
                                        )}
                                        {item.type === 'success' && (
                                            <p className="text-green-300 text-sm">
                                                <span className="text-green-400">[SUCCESS]</span> {item.content}
                                            </p>
                                        )}
                                        {item.type === 'info' && (
                                            <p className="text-cyan-300 text-sm">
                                                <span className="text-cyan-400">[TIP]</span> {item.content}
                                            </p>
                                        )}
                                        {item.type === 'command' && (
                                            <p className="text-green-400 font-bold">{item.content}</p>
                                        )}
                                        {item.type === 'result' && (
                                            <div className="ml-4 text-sm">{item.content}</div>
                                        )}
                                        {item.type === 'error' && (
                                            <p className="text-red-400 text-sm">
                                                <span className="text-red-500">[ERROR]</span> {item.content}
                                            </p>
                                        )}
                                    </div>
                                ))}
                                <div ref={terminalEndRef} />
                            </div>
                        )}

                        {/* Command input */}
                        {currentSection >= 1 && (
                            <div className="flex items-center gap-2">
                                <span className="text-cyan-400">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={currentCommand}
                                    onChange={(e) => setCurrentCommand(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
                                    placeholder="Type 'help' for commands..."
                                    autoFocus
                                />
                                {showCursor && <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CybersecurityPage;
