import { useEffect, useState } from 'react'

export default function useRequest(ip='8.8.8.8') {
	const [getDataResponse, setDataResponse] = useState()
	const [loading, setLoading] = useState(false)
	const url = `https://geo.ipify.org/api/v1?apiKey=at_WXluPfPH0crN2rZeG2AKjpMtLJroT&ipAddress=${ip}`
	useEffect(() => {
		setLoading(true)
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setDataResponse(data)
				setLoading(false)
			})
		.catch(error => console.error(error))
	},[url])
	return {getDataResponse, loading}
}