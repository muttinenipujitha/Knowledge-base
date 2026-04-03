import { useState, useRef, useEffect } from 'react'
import Icon from './Icon'

function CardMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1 hover:bg-gray-100 rounded transition text-gray-400 hover:text-gray-600"
      >
        <Icon name="moreV" size={15} />
      </button>

      {open && (
        <div className="absolute right-0 top-7 w-36 bg-white rounded-lg shadow-lg border border-gray-100 z-10 py-1">
          {['View', 'Edit', 'Delete'].map((action) => (
            <button
              key={action}
              onClick={() => setOpen(false)}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 transition
                ${action === 'Delete' ? 'text-red-500' : 'text-gray-700'}`}
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function KnowledgeCard({ card }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition cursor-pointer">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-gray-900 text-base">{card.title}</h3>
        <CardMenu />
      </div>

      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {card.description}
      </p>

      <p className="text-gray-400 text-xs mt-auto">
        Created On:{' '}
        <span className="font-semibold text-gray-600">{card.date}</span>
      </p>
    </div>
  )
}
