import { renderHook, act } from '@testing-library/react-hooks'
import {useNews} from '../hooks/useNews'

test('should use useNews', () => {
    const { result } = renderHook(() => useNews())
    const newNews = [{title: 'these are the News', description: ''}]
    result.current.setNews(newNews)
    expect(result.current.news.length).toBe(1)
    expect(result.current.news).toEqual(newNews)
})