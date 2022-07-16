import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSorting } from '../redux/actions/filters'
import { FaSortUp } from 'react-icons/fa'


const SortBy = ({ activeSortBy, onClickSortBy }) => {
  const dispatch = useDispatch()
  const { allSorting } = useSelector(({ filters }) => filters)
  const [isVisiblePopup, setIsVisiblePopup] = useState(false)
  const sortByRef = useRef(null)

  const setIsVisible = () => setIsVisiblePopup(!isVisiblePopup)

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath())

    !path.includes(sortByRef.current) && setIsVisiblePopup(false)
  }

  const popupClassNames = isVisiblePopup ? 'sort-by__icon active' : 'sort-by__icon'

  useEffect(() => {
    dispatch(fetchSorting())
    document.body.addEventListener('click', handleOutsideClick)
  }, [dispatch])

  return (
    <div ref={sortByRef} className="nav-menu__sort-by sort-by">
      <FaSortUp className={popupClassNames} />
      <span className='sort-by__text'>Сортировка по:</span>
      <span className='sort-by__tag' onClick={setIsVisible}>{activeSortBy.tag}</span>
      {
        isVisiblePopup && (
          <div className="sort-by__popup">
            <ul className="sort-by__popup_list">
              {
                allSorting.map(({ path, tag, type }) => {
                  const setItemClassNames = activeSortBy.tag === tag
                    ? 'sort-by__popup_item active'
                    : 'sort-by__popup_item'
                  
                  const handleClickSortBy = () => {
                    onClickSortBy(path, tag, type)
                    setIsVisiblePopup(!isVisiblePopup)
                  }
                  
                  return (
                    <li
                      key={`${path}_${type}`}
                      onClick={handleClickSortBy}
                      className={setItemClassNames}
                    >
                      {tag}
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
}

export default memo(SortBy)