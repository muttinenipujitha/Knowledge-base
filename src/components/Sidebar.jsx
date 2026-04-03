import Icon from './Icon'

const NAV_SECTIONS = [
  {
    label: 'My Projects',
    items: [
      { key: 'agents',   label: 'Agents' },
      { key: 'aiModels', label: 'AI Models' },
      { key: 'library',  label: 'Library' },
    ],
  },
  
  {
    label: 'Orchestrator',
    items: [
      { key: 'published',   label: 'Published' },
      { key: 'machines',    label: 'Machines' },
      { key: 'queues',      label: 'Queues' },
      { key: 'triggers',    label: 'Triggers' },
      { key: 'jobs',        label: 'Jobs' },
      { key: 'executions',  label: 'Executions' },
      { key: 'vault',       label: 'Vault' },
      { key: 'knowledge',   label: 'Knowledge Base', active: true },
      { key: 'keystore',    label: 'Key Store' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { key: 'tenant',       label: 'Tenant' },
      { key: 'integrations', label: 'Integrations' },
    ],
  },
]

function SidebarItem({ iconKey, label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition
        ${active
          ? 'bg-primary/10 text-primary font-semibold border-r-[3px] border-primary'
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
        }`}
    >
      <Icon
        name={iconKey}
        size={17}
        className={active ? 'text-primary' : 'text-gray-400'}
      />
      {label}
    </button>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto scrollbar-hide">
      {NAV_SECTIONS.map((section) => (
        <div key={section.label} className="pt-4 pb-2">
          <p className="px-4 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
            {section.label}
          </p>
          {section.items.map((item) => (
            <SidebarItem
              key={item.key}
              iconKey={item.key}
              label={item.label}
              active={item.active || false}
            />
          ))}
        </div>
      ))}
    </aside>
  )
}
