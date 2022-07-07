import React from 'react'
import { FaSortUp } from 'react-icons/fa'

const sortTags = [
  {
    type: 'popular',
    name: 'популярности',
  },
  {
    type: 'price',
    name: 'цене',
  },
  {
    type: 'alphabet',
    name: 'алфавиту',
  },
]

const SortBy = React.memo(function SortBy({ onClickSortBy }) {
  const [activeSortByTag, setActiveSortByTag] = React.useState('популярности')
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
  const sortByRef = React.useRef(null)

  const onSelectSortByTag = (type, name) => {
    setActiveSortByTag(name)
    onClickSortBy(type)
  }
  const setIsVisible = () => setIsVisiblePopup(!isVisiblePopup)
  const handleOutsideClick = (e) => !e.path.includes(sortByRef.current) && setIsVisiblePopup(false)

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={sortByRef} className="nav-menu__sort-by sort-by">
      <FaSortUp className={isVisiblePopup ? 'sort-by__icon active' : 'sort-by__icon'} />
      <span className='sort-by__text'>Сортировка по:</span>
      <span className='sort-by__tag' onClick={setIsVisible}>{activeSortByTag}</span>
      {
        isVisiblePopup && (
          <div className="sort-by__popup">
            <ul className="sort-by__popup_list">
              {
                sortTags.map(({ type, name }) => {
                  const setItemClassNames = activeSortByTag === name ? 'sort-by__popup_item active' : 'sort-by__popup_item'

                  return (
                    <li
                      key={type}
                      onClick={() => onSelectSortByTag(type, name)}
                      className={setItemClassNames}
                    >
                      {name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
})

export default SortBy