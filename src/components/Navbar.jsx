import useDarkMode from '../hooks/useDarkmode';
import ThemeToggler from './ThemeToggler';

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <>
          <nav className="font-heading flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white dark:bg-black shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <a href="/home" className="text-2xl no-underline text-slate-900 dark:text-white">Tailwind Darkmode</a>
                </div>
                <div>
                    <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </nav> 
        </>
    )
}

       