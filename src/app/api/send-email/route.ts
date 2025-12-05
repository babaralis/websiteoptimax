export async function submitEmail(data: {
    companyName: string
    email: string
    industry: string
    phone: string
    slogan: string
    website: string
  }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.websiteoptimax.com/api'
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
    if (!res.status) {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to submit contact form')
      }
    return res
  }
  