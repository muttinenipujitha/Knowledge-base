import { useState } from 'react'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import KnowledgeCard from './components/KnowledgeCard'
import Pagination from './components/Pagination'
import CreateModal from './components/CreateModal'
import Icon from './components/Icon'

const INITIAL_CARDS = [
  {

    id: 1,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
  {
    id: 2,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
  {
    
    id: 3,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
  {
    id: 4,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
  {
    id: 5,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
  {
    id: 6,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025',
  },
]

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3 text-gray-400 py-24">
      <svg
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
      <p className="text-base">No Knowledge Bases Found</p>
    </div>
  )
}

export default function App() {
  const [cards, setCards] = useState(INITIAL_CARDS)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = cards.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleCreate = (form) => {
    const today = new Date()
    const d = String(today.getDate()).padStart(2, '0')
    const m = String(today.getMonth() + 1).padStart(2, '0')
    const y = today.getFullYear()

    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: form.name,
        description:
          form.description ||
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        date: `${d}/${m}/${y}`,
      },
    ])
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Page header */}
          <div className="flex items-center justify-between px-7 py-5 shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>

            <div className="flex items-center gap-3">
              {/* Content search */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2 w-52">
                <Icon name="search" size={15} className="text-gray-400" />
                <input
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
                />
              </div>

              {/* Create New */}
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                  text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm"
              >
                <Icon name="plus" size={15} />
                Create New
              </button>
            </div>
          </div>

          {/* Card area */}
          <div className="flex-1 overflow-y-auto px-7 pb-4">
            <div className="border border-gray-200 rounded-xl bg-white p-5 min-h-full flex flex-col">
              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((card) => (
                    <KnowledgeCard key={card.id} card={card} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="px-7 py-3 border-t border-gray-200 bg-white shrink-0">
            <Pagination total={filtered.length} rowsPerPage={10} />
          </div>
        </main>
      </div>

      {/* Create Modal */}
      {showModal && (
        <CreateModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  )
}
