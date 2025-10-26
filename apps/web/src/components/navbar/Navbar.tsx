export default function Navbar(){

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen bg-background transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            {darkMode ? (
                                <Moon className="w-8 h-8 text-blue-400" />
                            ) : (
                                <Sun className="w-8 h-8 text-yellow-500" />
                            )}
                            <h1 className="text-3xl">Weather Forecast</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="dark-mode"
                                checked={darkMode}
                                onCheckedChange={toggleDarkMode}
                            />
                            <Label htmlFor="dark-mode">Dark Mode</Label>
                        </div>
                </div>
                </div>
            </div>
        </div>

        );
                }