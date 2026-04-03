import { useState, useRef } from 'react'
import Icon from './Icon'

const VECTOR_STORES = ['Qdrant', 'Pinecone', 'Weaviate', 'Chroma']
const LLM_MODELS = [
  'text-embedding-ada-002',
  'text-embedding-3-small',
  'text-embedding-3-large',
]

export default function CreateModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    llmModel: 'text-embedding-ada-002',
  })
  const [error, setError] = useState('')
  const backdropRef = useRef()

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose()
  }

  const handleSubmit = () => {
    if (!form.name.trim()) {
      setError('Name is required.')
      return
    }

    
    onSubmit(form)
    onClose()
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/30 z-50 flex justify-end"
    >
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col slide-in">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Create New Knowledge Base
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-gray-600 ml-4"
            >
              <Icon name="x" size={17} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name (Cannot be edited later)
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={set('name')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none
                focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder-gray-400"
            />
            {error && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={5}
              value={form.description}
              onChange={set('description')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none
                focus:ring-2 focus:ring-primary/30 focus:border-primary transition
                placeholder-gray-400 resize-none"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Vector Store
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.vectorStore}
                onChange={set('vectorStore')}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none
                  focus:ring-2 focus:ring-primary/30 focus:border-primary transition
                  appearance-none bg-white"
              >
                {VECTOR_STORES.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
              <Icon
                name="chevDown"
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              LLM Embedding Model
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.llmModel}
                onChange={set('llmModel')}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none
                  focus:ring-2 focus:ring-primary/30 focus:border-primary transition
                  appearance-none bg-white"
              >
                {LLM_MODELS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <Icon
                name="chevDown"
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
