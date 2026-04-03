import Icon from './Icon'

export default function Pagination({ total, rowsPerPage = 10 }) {
  return (
    <div className="flex items-center justify-between px-1 text-sm text-gray-600">
      <span>{total} rows</span>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Rows per page</span>
          <div className="flex items-center border border-gray-300 rounded px-2 py-1 gap-1 select-none">
            <span>{rowsPerPage}</span>
            <Icon name="chevDown" size={13} className="text-gray-400" />
          </div>
        </div>

        <span>page 1 of 1</span>

        <div className="flex items-center gap-0.5">
          {['chevFirst', 'chevLeft', 'chevRight', 'chevLast'].map((icon) => (
            <button
              key={icon}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 transition"
            >
              <Icon name={icon} size={13} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
