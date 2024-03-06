type Props = {
  name: string
  age: number
  email: string
}

const base_url = process.env.REACT_APP_BASE_URL

const sendEmail = async ({ name, age, email }: Props) => {
  try {
    const d = new URLSearchParams()
    d.set("personName", name)
    d.set("age", `${age}`)
    d.set("emailToReply", email)

    const req = await fetch(`${base_url}/sendEmail`, {
      method: "POST",
      body: d,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    return req.status
  } catch (error) {
    return false
  }
}

export const Api = {
  sendEmail,
}
