import React, { useEffect } from 'react'
import { fetchCollection } from '../actions/collection'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Collection.module.scss'

export default function Collection() {
  const dispatch = useDispatch()
  const collection = useSelector((s) => s.collection)

  useEffect(() => {
    dispatch(fetchCollection())
  }, [])

  return (
    <>
      {' '}
      <div className={styles.background}>
        <h1 className={styles.title}>
          {' '}
          ππππππππ π²πππΈβ―ππ π―β― πππππππ π―π½π ππππππΈππΎβπ π«πΆππ
          ππππππππ{' '}
        </h1>
        <ul>
          {collection.map((image) => (
            <li key={image.id}>
              <img
                className={styles.image}
                src={image.image_url}
                alt='my collection'
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
