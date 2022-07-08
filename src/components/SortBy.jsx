import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSorting } from '../redux/actions/filters'
import { FaSortUp } from 'react-icons/fa'


const SortBy = React.memo(({ activeSortBy, onClickSortBy }) => {
  const dispatch = useDispatch()
  const { allSorting } = useSelector(({ filters }) => filters)
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
  const sortByRef = React.useRef(null)

  const setIsVisible = () => setIsVisiblePopup(!isVisiblePopup)
  const handleOutsideClick = (e) => !e.path.includes(sortByRef.current) && setIsVisiblePopup(false)
  const popupClassNames = isVisiblePopup ? 'sort-by__icon active' : 'sort-by__icon'

  React.useEffect(() => {
    dispatch(fetchSorting())
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={sortByRef} className="nav-menu__sort-by sort-by">
      <FaSortUp className={popupClassNames} />
      <span className='sort-by__text'>Сортировка по:</span>
      <span className='sort-by__tag' onClick={setIsVisible}>{activeSortBy.name}</span>
      {
        isVisiblePopup && (
          <div className="sort-by__popup">
            <ul className="sort-by__popup_list">
              {
                allSorting.map(({ type, name }) => {
                  const setItemClassNames = activeSortBy.type === type ? 'sort-by__popup_item active' : 'sort-by__popup_item'

                  return (
                    <li
                      key={type}
                      onClick={() => onClickSortBy(type, name)}
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