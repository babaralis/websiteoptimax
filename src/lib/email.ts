export async function submitEmail(data: {
  companyName: string
  email: string
  industry: string
  phone: string
  slogan: string
  website: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'ttps://payment.websiteoptimax.com/api'
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
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'ttps://payment.websiteoptimax.com/api'
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('company', data.company)
  formData.append('website', data.website)
  formData.append('budget', data.budget)
  formData.append('timeline', data.timeline)
  formData.append('message', data.message)
  
  const res = await fetch(`${baseUrl}/sendContactEmail`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
  
  const responseData = await res.json().catch(() => ({}))
  
  if (!res.ok || responseData.status === false) {
    throw new Error(responseData.message || 'Failed to submit contact form')
  }
  
  return res
}

