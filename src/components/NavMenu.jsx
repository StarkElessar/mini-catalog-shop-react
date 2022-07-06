import React from 'react'
import { FaSortUp } from 'react-icons/fa'

export default function NavMenu({ tags, sortByTags }) {
  const [activeTag, setActiveTag] = React.useState('все')
  const [activeSortByTag, setActiveSortByTag] = React.useState('популярности')
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
  const sortByRef = React.useRef(null)

  const onSelectTag = (tag) => setActiveTag(tag)
  const onSelectSortByTag = (tag) => setActiveSortByTag(tag)
  const setIsVisible = () => setIsVisiblePopup(!isVisiblePopup)
  const handleOutsideClick = (e) => !e.path.includes(sortByRef.current) && setIsVisiblePopup(false)

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <nav className='catalog__nav-menu nav-menu'>
      <ul className='nav-menu__list'>
        {
          tags.map((tag, index) => {
            return (
              <li onClick={() => onSelectTag(tag)} key={`${tag}_${index}`}
                className={activeTag === tag ? 'nav-menu__item active' : 'nav-menu__item'}
              >
                {tag}
              </li>
            )
          })
        }
      </ul>
      <div ref={sortByRef} onClick={setIsVisible} className="nav-menu__sort-by sort-by">
        <FaSortUp className={isVisiblePopup ? 'sort-by__icon active' : 'sort-by__icon'} />
        <span className='sort-by__text'>Сортировка по:</span>
        <span className='sort-by__tag'>{activeSortByTag}</span>
        {
          isVisiblePopup && (
            <div className="sort-by__popup">
              <ul className="sort-by__popup_list">
                {
                  sortByTags.map((sortTag, index) => {
                    return (
                      <li
                        onClick={() => onSelectSortByTag(sortTag)}
                        key={`${sortTag}_${index}`}
                        className={activeSortByTag === sortTag ? 'sort-by__popup_item active' : 'sort-by__popup_item'}
                      >
                        {sortTag}
                      </li>
                    )
                  }) 
                }
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}
