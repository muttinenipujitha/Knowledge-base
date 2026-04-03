import Icon from './Icon'

export default function TopBar() {
  return (
    <header className="h-14 bg-primaryDark flex items-center px-5 gap-4 shrink-0 z-20">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2 mr-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        <span className="text-white font-semibold text-base tracking-wide">Worcspace</span>
      </div>

      {/* Workspace selector */}
      <button className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 rounded-md transition">
        Worcspace 1
        <Icon name="chevDown" size={14} />
      </button>

      {/* Global Search */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 gap-2">
          <Icon name="search" size={15} className="text-white/50" />
          <input
            placeholder="Search..."
            className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
          />
          <span className="text-white/40 text-xs border border-white/20 rounded px-1">⌘K</span>
        </div>
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-4">
        <button className="text-white/70 hover:text-white transition">
          <Icon name="bell" size={18} />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold select-none">
          GK
        </div>
      </div>
    </header>
  )
}
