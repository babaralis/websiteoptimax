// Generate or retrieve browser session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server-side'
  
  const SESSION_KEY = 'browser_session_id'
  let sessionId = sessionStorage.getItem(SESSION_KEY)
  
  if (!sessionId) {
    // Generate unique session ID: timestamp + random string
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
    sessionStorage.setItem(SESSION_KEY, sessionId)
  }
  
  return sessionId
}

// Get country code from user's IP using geolocation API
async function getCountryFromIP(): Promise<string> {
  if (typeof window === 'undefined') return 'Unknown'
  
  // Check if country is already cached in session
  const COUNTRY_KEY = 'user_country_code'
  const cachedCountry = sessionStorage.getItem(COUNTRY_KEY)
  
  if (cachedCountry) {
    return cachedCountry
  }
  
  try {
    // Use ipapi.co free API to get country from IP
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    
    if (data.country_code) {
      const countryCode = data.country_code
      sessionStorage.setItem(COUNTRY_KEY, countryCode)
      return countryCode
    }
  } catch (error) {
    console.error('Error fetching country from IP:', error)
  }
  
  return 'Unknown'
}

export async function contactLead(data: {
    companyName: string
    email: string
    industry: string
    phone: string
    slogan: string
    website: string
  }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api'
    
    // Get or generate session ID
    const sessionId = getSessionId()
    
    // Get country code from user's IP
    const countryCode = await getCountryFromIP()
    
    // Prepare data object
    const leadData = {
      name: data.companyName,
      company_name: data.companyName,
      email: data.email,
      service_id: data.industry,
      phone_number: data.phone,
      message: data.slogan,
      website: data.website,
      country_flag: countryCode,
      message_id: Math.random().toString(36).substring(2, 15),
      session_id: sessionId,
    }
    
    // Encode data: JSON -> Base64 -> URL encode (to match backend expectations)
    const jsonString = JSON.stringify(leadData)
    const base64Data = btoa(jsonString) // Base64 encode
    const encodedData = encodeURIComponent(base64Data) // URL encode
    
    // Get user agent from browser
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
    
    const res = await fetch(`${baseUrl}/lead/create/contact/${encodedData}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': userAgent,
        // Note: Client-IP will be automatically detected by the backend from the request
      },
    })
    
    const responseData = await res.json().catch(() => ({}))
    
    if (!res.ok || responseData.status === false) {
      throw new Error(responseData.message || 'Failed to submit contact form')
    }
    
    return res
  }


  export async function briefLead(data: {
    companyName: string
    email: string
    industry: string
    phone: string
    slogan: string
    website: string
  }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api'
    
    // Get or generate session ID
    const sessionId = getSessionId()
    
    // Get country code from user's IP
    const countryCode = await getCountryFromIP()
    
    // Prepare data object
    const leadData = {
        cus_name: data.companyName,
        company_name: data.companyName,
        cus_email: data.email,
        service_id: data.industry,
        industry: data.industry,
        cus_phone: data.phone,
        message: data.slogan,
        website: data.website,
        country_flag: countryCode,
        message_id: Math.random().toString(36).substring(2, 15),
        session_id: sessionId,
    }
    
    // Encode data: JSON -> Base64 -> URL encode (to match backend expectations)
    const jsonString = JSON.stringify(leadData)
    const base64Data = btoa(jsonString) // Base64 encode
    const encodedData = encodeURIComponent(base64Data) // URL encode
    
    // Get user agent from browser
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
    
    const res = await fetch(`${baseUrl}/lead/create/webBrief/${encodedData}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': userAgent,
        // Note: Client-IP will be automatically detected by the backend from the request
      },
    })
    
    const responseData = await res.json().catch(() => ({}))
    
    if (!res.ok || responseData.status === false) {
      throw new Error(responseData.message || 'Failed to submit contact form')
    }
    
    return res
  }