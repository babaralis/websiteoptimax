export async function submitEmail(data: {
  companyName: string
  email: string
  industry: string
  phone: string
  slogan: string
  website: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api'
  const formData = new FormData()
  formData.append('companyName', data.companyName)
  formData.append('email', data.email)
  formData.append('industry', data.industry)
  formData.append('phone', data.phone)
  formData.append('slogan', data.slogan)
  formData.append('website', data.website)

  
  const res = await fetch(`${baseUrl}/sendEmail`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'omit', // Explicitly set for Safari compatibility
    mode: 'cors', // Explicitly enable CORS
    body: formData,
  })
  
  const responseData = await res.json().catch(() => ({}))
  
  if (!res.ok || responseData.status === false) {
    throw new Error(responseData.message || 'Failed to submit contact form')
  }
  
  return res
}

export async function submitContactEmail(data: {
  name: string
  email: string
  company: string
  website: string
  budget: string
  timeline: string
  message: string
  title: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api'
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('company', data.company)
  formData.append('website', data.website)
  formData.append('budget', data.budget)
  formData.append('timeline', data.timeline)
  formData.append('message', data.message)
  formData.append('title', data.title)
  
  const res = await fetch(`${baseUrl}/sendContactEmail`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'omit', // Explicitly set for Safari compatibility
    mode: 'cors', // Explicitly enable CORS
    body: formData,
  })
  
  const responseData = await res.json().catch(() => ({}))
  
  if (!res.ok || responseData.status === false) {
    throw new Error(responseData.message || 'Failed to submit contact form')
  }
  
  return res
}


export async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api'    

  const res = await fetch(`${baseUrl}/getCategory`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'omit', // Explicitly set for Safari compatibility
    mode: 'cors', // Explicitly enable CORS
  })
  
  const responseData = await res.json().catch(() => ({}))
  return responseData.data || []
}