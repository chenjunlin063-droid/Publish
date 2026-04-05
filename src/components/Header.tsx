import { Moon, Sun, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
    themeMode: 'light' | 'dark';
    onToggleTheme: () => void;
}

export default function Header({ themeMode, onToggleTheme }: HeaderProps) {
    return (
        <header className="glass flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-[100]">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-black dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:shadow-[0_2px_12px_rgba(255,255,255,0.15)]">
                      <img 
                        src="/geeklogo.png" 
                        alt="Geek Logo" 
                        className="w-full h-full object-cover rounded-[8px]"
                      />
                    </svg>
                </div>
                <span className="font-bold text-lg tracking-tight text-black dark:text-white">Geek Publish<span className="hidden sm:inline"> - 极客排版</span></span>
            </div>

            <div className="flex items-center gap-4">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/liuxiaopai-ai/raphael-publish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <Github size={20} />
                </motion.a>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggleTheme}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
            </div>
        </header>
    );
}
