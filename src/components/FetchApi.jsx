import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetcProducts} from '../slices/ApiSlice'
import BorderExample from './Cards/ProductCard'
import './fetchApi.css'


const FetchApi = () => {
  const products = useSelector(state => state.api)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetcProducts())
  }, [dispatch]);

  useEffect(() => {
    console.log(products)
  }, [products])
  
  return (
    <div className='cards'>
    {products.data.map((product) => {
      return <BorderExample key={product.id} data={product} />
    })}
    
    </div>
  )
}

export default FetchApi