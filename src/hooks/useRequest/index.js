import { useEffect, useState } from 'react'

export default function useRequest(ip='8.8.8.8') {
	const [getDataResponse, setDataResponse] = useState()
	const url = `https://geo.ipify.org/api/v1?apiKey=at_WXluPfPH0crN2rZeG2AKjpMtLJroT&ipAddress=${ip}`
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setDataResponse(data))
	},[url])
	return getDataResponse
}